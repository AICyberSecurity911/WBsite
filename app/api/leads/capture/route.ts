
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail, generateConfirmationEmailHtml } from '@/lib/email'
import { sendDiscordNotification, createLeadNotification } from '@/lib/discord'
import { randomBytes } from 'crypto'

export const dynamic = 'force-dynamic'

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const current = rateLimitStore.get(ip) || { count: 0, resetTime: now + windowMs }
  
  if (now > current.resetTime) {
    current.count = 0
    current.resetTime = now + windowMs
  }
  
  current.count++
  rateLimitStore.set(ip, current)
  
  return current.count <= maxRequests
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { email, name, company, phone, calculatorData } = body

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate confirmation token
    const confirmationToken = randomBytes(32).toString('hex')
    const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/leads/verify?token=${confirmationToken}`

    // Check if lead already exists
    const { data: existingLead, error: checkError } = await supabase
      .from('leads')
      .select('id, confirmed')
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing lead:', checkError)
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      )
    }

    let leadData
    if (existingLead) {
      // Update existing lead
      const { data, error } = await supabase
        .from('leads')
        .update({
          name,
          company,
          phone,
          confirmation_token: confirmationToken,
          calculator_data: calculatorData,
          updated_at: new Date().toISOString()
        })
        .eq('email', email)
        .select()
        .single()

      if (error) {
        console.error('Error updating lead:', error)
        return NextResponse.json(
          { error: 'Failed to update lead' },
          { status: 500 }
        )
      }
      leadData = data
    } else {
      // Create new lead
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            email,
            name,
            company,
            phone,
            confirmation_token: confirmationToken,
            calculator_data: calculatorData,
            confirmed: false,
            source: 'ai-workforce-calculator'
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error creating lead:', error)
        return NextResponse.json(
          { error: 'Failed to save lead' },
          { status: 500 }
        )
      }
      leadData = data
    }

    // Send confirmation email
    const emailHtml = generateConfirmationEmailHtml(name, confirmationUrl)
    const emailResult = await sendEmail({
      to: email,
      subject: 'Confirm Your AI Workforce Assessment - QuantumLeap AI',
      html: emailHtml
    })

    if (!emailResult.success) {
      console.error('Failed to send confirmation email:', emailResult.error)
      // Don't fail the request if email fails, but log it
    }

    // Send Discord notification
    const discordPayload = createLeadNotification({
      name,
      email,
      company,
      phone,
      calculatorData
    })
    
    const discordResult = await sendDiscordNotification(discordPayload)
    if (!discordResult.success) {
      console.error('Failed to send Discord notification:', discordResult.error)
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully. Please check your email for confirmation.',
      confirmationRequired: !existingLead?.confirmed,
      leadId: leadData.id
    })

  } catch (error) {
    console.error('Lead capture API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
