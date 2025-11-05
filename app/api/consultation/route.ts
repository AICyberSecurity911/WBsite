

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendEmail } from '@/lib/email'
import { sendDiscordNotification } from '@/lib/discord'

export const dynamic = 'force-dynamic'

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3

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
    const { name, email, company, phone, message, subject } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company,
        phone,
        subject: subject || 'Consultation Request',
        message,
        status: 'new'
      }
    })

    // Send confirmation email to user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Consultation Request Received</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; }
          .header { background: linear-gradient(135deg, #14b8a6 0%, #10b981 100%); padding: 40px 20px; text-align: center; }
          .logo { font-size: 24px; font-weight: bold; color: white; }
          .content { padding: 40px 30px; }
          .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">QuantumLeap AI</div>
          </div>
          <div class="content">
            <h2 style="color: #111827; margin: 0 0 20px;">Hi ${name},</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to QuantumLeap AI! We've received your consultation request and our team will review it shortly.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              <strong>What happens next?</strong>
            </p>
            <ul style="color: #374151; font-size: 16px; line-height: 1.8;">
              <li>Our team will review your request within 24 hours</li>
              <li>We'll reach out to schedule your free 30-minute strategy session</li>
              <li>You'll receive a custom implementation roadmap for your business</li>
            </ul>
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              If you have any urgent questions, feel free to reply to this email.
            </p>
          </div>
          <div class="footer">
            <p>© 2025 QuantumLeap AI. All rights reserved.</p>
            <p>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #14b8a6;">Visit our website</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Consultation Request Received - QuantumLeap AI',
      html: userEmailHtml
    })

    if (!userEmailResult.success) {
      console.error('Failed to send confirmation email to user:', userEmailResult.error)
    }

    // Send notification email to support team
    const supportEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Consultation Request</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 20px auto; background-color: white; border-radius: 8px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #14b8a6 0%, #10b981 100%); padding: 20px; color: white; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #374151; }
          .value { color: #111827; margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🚀 New Consultation Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            ${company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
            ` : ''}
            ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
            <div class="field">
              <div class="label">Submission ID:</div>
              <div class="value">${submission.id}</div>
            </div>
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    const supportEmailResult = await sendEmail({
      to: process.env.SMTP_USER || 'support@leapintoai.com',
      subject: `New Consultation Request from ${name}`,
      html: supportEmailHtml
    })

    if (!supportEmailResult.success) {
      console.error('Failed to send notification email to support:', supportEmailResult.error)
    }

    // Send Discord notification
    const discordPayload = {
      content: '🎯 New Consultation Request!',
      embeds: [
        {
          title: 'Consultation Request Details',
          color: 0x14b8a6,
          fields: [
            {
              name: '👤 Name',
              value: name,
              inline: true,
            },
            {
              name: '📧 Email',
              value: email,
              inline: true,
            },
            ...(company ? [{
              name: '🏢 Company',
              value: company,
              inline: true,
            }] : []),
            ...(phone ? [{
              name: '📱 Phone',
              value: phone,
              inline: true,
            }] : []),
            {
              name: '💬 Message',
              value: message.substring(0, 500) + (message.length > 500 ? '...' : ''),
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    const discordResult = await sendDiscordNotification(discordPayload)
    if (!discordResult.success) {
      console.error('Failed to send Discord notification:', discordResult.error)
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully',
      submissionId: submission.id
    })

  } catch (error) {
    console.error('Consultation API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

