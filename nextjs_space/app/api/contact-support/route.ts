
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Trigger any other workflows

    // For now, we'll just log it and return success
    console.log('Contact Support Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    })

    // In a production environment, you would integrate with:
    // - Email service (SendGrid, Mailgun, etc.)
    // - CRM system
    // - Notification service (Discord, Slack, etc.)
    // - Database for storing submissions

    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been received. We will contact you shortly.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
