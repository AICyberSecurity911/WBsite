
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendEmail, generateResultsEmailHtml } from '@/lib/email'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?error=missing-token`)
    }

    // Find lead by confirmation token
    const { data: lead, error } = await supabase
      .from('leads')
      .select('*')
      .eq('confirmation_token', token)
      .single()

    if (error || !lead) {
      console.error('Error finding lead by token:', error)
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?error=invalid-token`)
    }

    // Update lead as confirmed
    const { error: updateError } = await supabase
      .from('leads')
      .update({ 
        confirmed: true,
        confirmation_token: null,
        updated_at: new Date().toISOString()
      })
      .eq('id', lead.id)

    if (updateError) {
      console.error('Error updating lead confirmation:', updateError)
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?error=update-failed`)
    }

    // Send results email with 5-minute delay
    setTimeout(async () => {
      try {
        const recommendations = lead.calculator_data?.recommendations || [
          {
            title: 'AI Executive Assistant',
            description: 'Manages your schedule and administrative tasks',
            savings: '$3,200/month'
          },
          {
            title: 'AI Bookkeeper', 
            description: 'Automates your accounting and financial reporting',
            savings: '$2,800/month'
          }
        ]

        const resultsHtml = generateResultsEmailHtml(lead.name, recommendations)
        await sendEmail({
          to: lead.email,
          subject: 'Your Personalized AI Workforce Recommendations',
          html: resultsHtml
        })
      } catch (emailError) {
        console.error('Error sending results email:', emailError)
      }
    }, 5 * 60 * 1000) // 5 minutes delay

    // Redirect to confirmation success page
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?success=true&name=${encodeURIComponent(lead.name)}`)

  } catch (error) {
    console.error('Email verification API error:', error)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?error=server-error`)
  }
}
