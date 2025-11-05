
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { sendDiscordNotification } from '@/lib/discord'

export const dynamic = 'force-dynamic'

function generateLeadMagnetEmailHtml(name: string, tidyCalLink: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Free Guide: 10 Workflows to Automate</title>
      <style>
        body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 40px 20px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }
        .content { padding: 40px 30px; }
        .workflow-item { background-color: #fff7ed; border-left: 4px solid #FF6B35; padding: 15px; margin: 15px 0; border-radius: 4px; }
        .workflow-title { font-weight: bold; color: #FF6B35; margin-bottom: 5px; }
        .btn { display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 5px; box-shadow: 0 4px 6px rgba(255, 107, 53, 0.3); }
        .btn:hover { box-shadow: 0 6px 12px rgba(255, 107, 53, 0.4); }
        .cta-box { background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0; border: 2px solid #FF6B35; }
        .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; }
        .highlight { color: #FF6B35; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">⚡ QuantumLeap AI</div>
          <p style="color: white; margin-top: 10px; font-size: 16px;">Your Guide to Business Automation</p>
        </div>
        <div class="content">
          <h2 style="color: #111827; margin: 0 0 10px;">Hi ${name}! 👋</h2>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for downloading our guide! You're about to discover the <strong>10 workflows</strong> that have helped 500+ small business owners <span class="highlight">reclaim 20+ hours per week</span> and <span class="highlight">save 87% on operational costs</span>.
          </p>

          <h3 style="color: #FF6B35; margin-top: 30px;">🚀 Here's What You'll Learn:</h3>
          
          <div class="workflow-item">
            <div class="workflow-title">1. Customer Inquiry Response (Save 15 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Instantly respond to customer questions 24/7 with AI-powered responses</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">2. Invoice & Payment Processing (Save 10 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Automate billing, payment reminders, and reconciliation</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">3. Lead Qualification & Follow-up (Save 12 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Never miss a hot lead with automated scoring and nurture sequences</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">4. Appointment Scheduling (Save 8 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Eliminate back-and-forth with smart calendar automation</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">5. Social Media Management (Save 10 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Schedule, post, and engage across all platforms automatically</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">6. Email Campaign Management (Save 6 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Personalized email sequences that convert while you sleep</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">7. Expense Tracking & Reporting (Save 5 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Real-time expense categorization and financial reporting</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">8. Inventory Management (Save 7 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Automated stock alerts and reorder triggers</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">9. Customer Feedback Collection (Save 4 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Automated surveys and sentiment analysis</p>
          </div>

          <div class="workflow-item">
            <div class="workflow-title">10. Data Backup & Security (Save 3 hrs/week)</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Automated backups and security monitoring</p>
          </div>

          <div class="cta-box">
            <h3 style="color: #92400e; margin: 0 0 15px;">Ready to Automate Your Business?</h3>
            <p style="color: #78350f; margin: 0 0 20px; font-size: 16px;">
              Book a <strong>FREE 30-minute consultation</strong> and we'll show you exactly which workflows will have the biggest impact on YOUR business.
            </p>
            <p style="color: #78350f; margin: 0 0 20px; font-size: 14px;">
              ✅ No obligation<br/>
              ✅ Custom automation roadmap<br/>
              ✅ ROI projection for your business
            </p>
            <a href="${tidyCalLink}" class="btn">📅 Book Your Free Consultation Now</a>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            <strong>Pro Tip:</strong> Most SMBs start with workflows #1, #2, and #3 to see immediate results. Want to know which ones are right for you? Let's talk!
          </p>

          <p style="color: #374151; font-size: 16px; margin-top: 30px;">
            To your success,<br/>
            <strong style="color: #FF6B35;">The QuantumLeap AI Team</strong>
          </p>
        </div>
        <div class="footer">
          <p style="margin: 5px 0;">© 2025 QuantumLeap AI. All rights reserved.</p>
          <p style="margin: 5px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #FF6B35; text-decoration: none;">Visit our website</a> | 
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/privacy" style="color: #FF6B35; text-decoration: none;">Privacy Policy</a>
          </p>
          <p style="margin: 15px 0 5px; font-size: 12px;">
            You're receiving this because you requested our free automation guide.<br/>
            Don't want these emails? <a href="#" style="color: #6b7280;">Unsubscribe</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TidyCal booking link (replace with your actual link)
    const tidyCalLink = process.env.TIDYCAL_BOOKING_URL || 'https://tidycal.com/quantumleap/consultation'

    // Send email to lead
    const emailResult = await sendEmail({
      to: email,
      subject: '🚀 Your Free Guide: 10 Workflows Every SMB Should Automate',
      html: generateLeadMagnetEmailHtml(name, tidyCalLink),
    })

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    // Send Discord notification
    const discordPayload = {
      content: '📥 New Lead Magnet Download!',
      embeds: [
        {
          title: '🎁 Free Guide Downloaded',
          color: 0xFF6B35, // Orange color
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
            {
              name: '📚 Guide',
              value: '10 Workflows to Automate',
              inline: true,
            },
            {
              name: '🔗 TidyCal Link Sent',
              value: tidyCalLink,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    await sendDiscordNotification(discordPayload)

    return NextResponse.json({
      success: true,
      message: 'Guide sent successfully! Check your email.',
    })
  } catch (error) {
    console.error('Lead magnet API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
