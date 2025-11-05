
import nodemailer from 'nodemailer'

// Create SMTP transporter using Hostinger settings
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: options.from || `${process.env.SMTP_FROM_NAME || 'QuantumLeap AI'} <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    })
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export function generateConfirmationEmailHtml(name: string, confirmationUrl: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirm Your AI Workforce Assessment</title>
      <style>
        body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #14b8a6 0%, #10b981 100%); padding: 40px 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: bold; color: white; }
        .content { padding: 40px 30px; }
        .btn { display: inline-block; padding: 15px 30px; background: #14b8a6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; }
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
            Thank you for completing our AI Workforce Assessment! 
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Please click the button below to confirm your email address and receive your personalized AI team recommendations:
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmationUrl}" class="btn">Confirm Email & Get Results</a>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This link will expire in 24 hours. If you didn't request this assessment, you can safely ignore this email.
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
}

export function generateResultsEmailHtml(name: string, recommendations: any[]) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your AI Workforce Recommendations</title>
      <style>
        body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #14b8a6 0%, #10b981 100%); padding: 40px 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: bold; color: white; }
        .content { padding: 40px 30px; }
        .recommendation { background-color: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .btn { display: inline-block; padding: 15px 30px; background: #14b8a6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; }
        .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">QuantumLeap AI</div>
        </div>
        <div class="content">
          <h2 style="color: #111827; margin: 0 0 20px;">Your Personalized AI Workforce Plan</h2>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hi ${name}, based on your assessment, here are our top AI employee recommendations:
          </p>
          ${recommendations.map(rec => `
            <div class="recommendation">
              <h3 style="color: #14b8a6; margin: 0 0 10px;">${rec.title}</h3>
              <p style="color: #374151; margin: 0 0 10px;">${rec.description}</p>
              <strong style="color: #065f46;">Projected savings: ${rec.savings}</strong>
            </div>
          `).join('')}
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_BASE_URL}/consultation" class="btn">Book Free Consultation</a>
          </div>
        </div>
        <div class="footer">
          <p>© 2025 QuantumLeap AI. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
