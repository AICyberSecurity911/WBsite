
import { google } from 'googleapis';

export async function sendHtmlEmail(to: string, subject: string, html: string) {
  try {
    const jwt = new google.auth.JWT({
      email: process.env.GMAIL_CLIENT_EMAIL!,
      key: (process.env.GMAIL_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/gmail.send'],
      subject: process.env.GMAIL_SENDER!
    });
    
    await jwt.authorize();
    const gmail = google.gmail({ version: 'v1', auth: jwt });
    const raw = buildRaw(process.env.GMAIL_SENDER!, to, subject, html);
    
    await gmail.users.messages.send({ 
      userId: 'me', 
      requestBody: { raw } 
    });
    
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}

function buildRaw(from: string, to: string, subject: string, html: string) {
  const msg = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    '',
    html
  ].join('\n');
  
  return Buffer.from(msg)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function renderEmailTemplate(template: string, meta: any) {
  const book = process.env.NEXT_PUBLIC_TIDYCAL_BOOK_URL || '#';
  const blueprint = process.env.BLUEPRINT_URL || 'https://quantumleapai.abacusai.app/static/automation-blueprint.pdf';
  
  if (template === 'automation_blueprint') {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Your Automation Blueprint Is Ready</h1>
        </div>
        
        <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <h2 style="color: #0f766e; margin-top: 0;">Save 20+ Hours Per Week on Autopilot</h2>
          
          <p>Here's your personalized guide to automating repetitive work across email, invoicing, reporting, and project coordination.</p>
          
          <div style="background: #f0fdfa; border-left: 4px solid #14b8a6; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">📊 Your Automation Snapshot:</p>
            <ul style="margin: 10px 0 0 0; padding-left: 20px;">
              <li>Current monthly cost: <strong>$${meta?.monthlyHumanCost?.toLocaleString() || 'N/A'}</strong></li>
              <li>Potential savings: <strong>$${meta?.potentialSavingsMonthly?.toLocaleString() || 'N/A'}/month</strong></li>
              <li>Annual savings: <strong>$${meta?.potentialSavingsAnnual?.toLocaleString() || 'N/A'}/year</strong></li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${blueprint}" style="background: #14b8a6; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
              📥 Download Your Blueprint (PDF)
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <h3 style="color: #0f766e;">Next Step: Get Your 30-Day Efficiency Plan</h3>
          
          <p>Let's map out:</p>
          <ul>
            <li>The top 3 workflows to automate first</li>
            <li>Exact hours you'll recover each week</li>
            <li>How to deploy in under 14 days</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${book}" style="background: #0f766e; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
              📅 Book My Free 30-Day Efficiency Plan
            </a>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0; font-style: italic; color: #6b7280;">"Automation doesn't replace people. It replaces the repetitive grind that keeps them from doing their best work."</p>
            <p style="margin: 10px 0 0 0; font-weight: bold;">— Paras Khurana, Founder & CEO, QuantumLeap AI</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Fortune 500 Strategy | MIT & Caltech Engineering | NASA-Recognized Security</p>
            <p style="margin-top: 15px;">
              <a href="https://quantumleapai.abacusai.app" style="color: #14b8a6; text-decoration: none;">QuantumLeap AI</a> | 
              <a href="https://quantumleapai.abacusai.app/privacy" style="color: #14b8a6; text-decoration: none;">Privacy Policy</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
  
  // Default template
  return `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Thank you for your interest in QuantumLeap AI</h2>
      <p>We'll be in touch soon.</p>
      <p>— The QuantumLeap Team</p>
    </body>
    </html>
  `;
}
