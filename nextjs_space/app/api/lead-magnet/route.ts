
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

function generateBackgroundChecksEmailHtml(name: string, tidyCalLink: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Free Guide: 5 Red Flags Standard Background Checks Always Miss</title>
      <style>
        body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #7c3aed 0%, #5312c4 100%); padding: 40px 20px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); }
        .content { padding: 40px 30px; }
        .red-flag-item { background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 15px 0; border-radius: 4px; }
        .red-flag-title { font-weight: bold; color: #dc2626; margin-bottom: 5px; }
        .btn { display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #7c3aed 0%, #5312c4 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 5px; box-shadow: 0 4px 6px rgba(124, 58, 237, 0.3); }
        .btn:hover { box-shadow: 0 6px 12px rgba(124, 58, 237, 0.4); }
        .cta-box { background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%); border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0; border: 2px solid #7c3aed; }
        .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; }
        .highlight { color: #7c3aed; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🛡️ QuantumLeap AI</div>
          <p style="color: white; margin-top: 10px; font-size: 16px;">Intelligence Investigations</p>
        </div>
        <div class="content">
          <h2 style="color: #111827; margin: 0 0 10px;">Hi ${name}! 👋</h2>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for downloading our guide! You're about to discover the <strong>5 red flags</strong> that standard background checks <span class="highlight">always miss</span>—and how to spot them before they cost your company millions.
          </p>

          <h3 style="color: #7c3aed; margin-top: 30px;">🚨 The 5 Red Flags Standard Checks Miss:</h3>
          
          <div class="red-flag-item">
            <div class="red-flag-title">1. Hidden Alias Identities</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Candidates using slight name variations, maiden names, or completely different identities across platforms. Standard checks only verify the name provided.</p>
          </div>

          <div class="red-flag-item">
            <div class="red-flag-title">2. Cross-Jurisdictional Criminal Records</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Criminal activity in states or countries outside the standard search radius. 34% of criminal records are filed in different jurisdictions.</p>
          </div>

          <div class="red-flag-item">
            <div class="red-flag-title">3. Dark Web Presence</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Active accounts on illegal marketplaces, hacker forums, or data breach databases. Standard checks never look online.</p>
          </div>

          <div class="red-flag-item">
            <div class="red-flag-title">4. Undisclosed Financial Red Flags</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Bankruptcies, tax liens, foreclosures, and judgments hidden in other states or under different names. Financial desperation is the #1 predictor of theft.</p>
          </div>

          <div class="red-flag-item">
            <div class="red-flag-title">5. Behavioral Threat Indicators</div>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Restraining orders, harassment complaints, workplace disputes, and online extremism that never appear in criminal databases.</p>
          </div>

          <div class="cta-box">
            <h3 style="color: #5b21b6; margin: 0 0 15px;">Ready to Uncover Hidden Risks?</h3>
            <p style="color: #6d28d9; margin: 0 0 20px; font-size: 16px;">
              Book a <strong>FREE confidential briefing</strong> with our intelligence analysts. We'll review your current screening process and show you exactly what you're missing.
            </p>
            <p style="color: #6d28d9; margin: 0 0 20px; font-size: 14px;">
              ✅ No obligation<br/>
              ✅ 100% confidential<br/>
              ✅ Custom risk assessment
            </p>
            <a href="${tidyCalLink}" class="btn">🛡️ Schedule Your Free Briefing</a>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            <strong>Pro Tip:</strong> In 94% of our investigations, we find 7+ red flags that standard checks missed. Want to know what you're missing? Let's talk.
          </p>

          <p style="color: #374151; font-size: 16px; margin-top: 30px;">
            Stay safe,<br/>
            <strong style="color: #7c3aed;">The QuantumLeap AI Intelligence Team</strong>
          </p>
        </div>
        <div class="footer">
          <p style="margin: 5px 0;">© 2025 QuantumLeap AI. All rights reserved.</p>
          <p style="margin: 5px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #7c3aed; text-decoration: none;">Visit our website</a> | 
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/privacy" style="color: #7c3aed; text-decoration: none;">Privacy Policy</a>
          </p>
          <p style="margin: 15px 0 5px; font-size: 12px;">
            You're receiving this because you requested our free background check guide.<br/>
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
    const { email, name, source, leadMagnet, page } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // TidyCal booking link
    const tidyCalLink = process.env.TIDYCAL_BOOKING_URL || process.env.NEXT_PUBLIC_TIDYCAL_BOOK_URL || 'https://tidycal.com/quantumleap/consultation'
    
    // Determine email content based on leadMagnet
    let emailSubject = '🚀 Your Free Guide'
    let emailHtml = generateLeadMagnetEmailHtml(name || 'there', tidyCalLink)
    
    if (leadMagnet === '5 Red Flags Standard Background Checks Always Miss' || source === 'background_checks_gated_offer') {
      emailSubject = '🛡️ Your Free Guide: 5 Red Flags Standard Background Checks Always Miss'
      emailHtml = generateBackgroundChecksEmailHtml(name || 'there', tidyCalLink)
    }

    // Send email to lead
    const emailResult = await sendEmail({
      to: email,
      subject: emailSubject,
      html: emailHtml,
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
          color: leadMagnet?.includes('Background') ? 0x7c3aed : 0xFF6B35, // Purple for background checks, orange for others
          fields: [
            {
              name: '👤 Name',
              value: name || 'Not provided',
              inline: true,
            },
            {
              name: '📧 Email',
              value: email,
              inline: true,
            },
            {
              name: '📚 Guide',
              value: leadMagnet || '10 Workflows to Automate',
              inline: true,
            },
            {
              name: '📍 Source',
              value: source || 'Unknown',
              inline: true,
            },
            {
              name: '🌐 Page',
              value: page || 'Unknown',
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
      ok: true,
      success: true,
      message: 'Guide sent successfully! Check your email.',
    })
  } catch (error) {
    console.error('Lead magnet API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred', ok: false },
      { status: 500 }
    )
  }
}
