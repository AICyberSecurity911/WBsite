
import { NextRequest, NextResponse } from 'next/server'

// Rate limiting (simple in-memory store - in production, use Redis)
const checkCounts = new Map<string, { count: number; resetAt: number }>()

function getRateLimitKey(ip: string): string {
  return `breach-check:${ip}`
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const key = getRateLimitKey(ip)
  const now = Date.now()
  const limit = 10 // 10 checks per hour per IP
  const windowMs = 60 * 60 * 1000 // 1 hour

  let record = checkCounts.get(key)
  
  if (!record || now > record.resetAt) {
    record = { count: 0, resetAt: now + windowMs }
    checkCounts.set(key, record)
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: limit - record.count }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again later.',
          remaining: 0 
        },
        { status: 429 }
      )
    }

    // Check if API key is configured
    const apiKey = process.env.HIBP_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: 'Service not configured. Please contact support.',
          remaining: rateLimit.remaining 
        },
        { status: 503 }
      )
    }

    // Call Have I Been Pwned API
    const response = await fetch(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`,
      {
        headers: {
          'User-Agent': 'QuantumLeap-Cyber-Intelligence-Tool',
          'hibp-api-key': apiKey,
          'Accept': 'application/json'
        }
      }
    )

    if (response.status === 404) {
      // Email not found in breaches - good news!
      return NextResponse.json({
        exposed: false,
        message: 'Good news! This email was not found in any known data breaches.',
        remaining: rateLimit.remaining
      })
    }

    if (response.status === 401) {
      // Invalid or missing API key
      console.error('HIBP API key is invalid or expired')
      return NextResponse.json(
        { 
          error: 'Service authentication failed. Please contact support.',
          remaining: rateLimit.remaining 
        },
        { status: 503 }
      )
    }

    if (response.status === 429) {
      // Rate limited by HIBP
      return NextResponse.json(
        { 
          error: 'Service temporarily unavailable. Please try again in a few minutes.',
          remaining: rateLimit.remaining 
        },
        { status: 429 }
      )
    }

    if (!response.ok) {
      throw new Error(`HIBP API error: ${response.status}`)
    }

    const breaches = await response.json()

    // Process breach data
    const breachCount = breaches.length
    const breachNames = breaches.map((b: any) => b.Name).slice(0, 10) // First 10
    const totalAccounts = breaches.reduce((sum: number, b: any) => sum + (b.PwnCount || 0), 0)
    const mostRecentBreach = breaches.reduce((latest: any, current: any) => {
      const latestDate = new Date(latest.BreachDate)
      const currentDate = new Date(current.BreachDate)
      return currentDate > latestDate ? current : latest
    }, breaches[0])

    return NextResponse.json({
      exposed: true,
      breachCount,
      breachNames,
      totalAccounts,
      mostRecentBreach: {
        name: mostRecentBreach.Name,
        date: mostRecentBreach.BreachDate,
        dataClasses: mostRecentBreach.DataClasses
      },
      message: `Warning! This email appeared in ${breachCount} known data breach${breachCount > 1 ? 'es' : ''}.`,
      remaining: rateLimit.remaining
    })

  } catch (error) {
    console.error('Breach check error:', error)
    return NextResponse.json(
      { error: 'Failed to check email. Please try again.' },
      { status: 500 }
    )
  }
}
