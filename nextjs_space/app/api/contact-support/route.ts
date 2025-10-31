
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
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length > 400) {
      return NextResponse.json(
        { error: 'Message must be 400 characters or less' },
        { status: 400 }
      )
    }

    // Log the contact support request
    console.log('Contact Support Request:', {
      name,
      email,
      phone,
      messageLength: message.length,
      timestamp: new Date().toISOString()
    })

    // In a production environment, you would:
    // 1. Send an email notification to the support team
    // 2. Store the message in a database
    // 3. Send a confirmation email to the user
    // 4. Create a support ticket in your CRM

    // For now, we'll just return success
    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been received. We will respond within 24 hours.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact support request:', error)
    return NextResponse.json(
      { error: 'An error occurred processing your request' },
      { status: 500 }
    )
  }
}
