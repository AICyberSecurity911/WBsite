
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

    // Call XposedOrNot API (free, no API key needed)
    const response = await fetch(
      `https://api.xposedornot.com/v1/breach-analytics?email=${encodeURIComponent(email)}`,
      {
        headers: {
          'User-Agent': 'QuantumLeap-Cyber-Intelligence-Tool',
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

    if (response.status === 429) {
      // Rate limited by XposedOrNot
      return NextResponse.json(
        { 
          error: 'Service temporarily unavailable. Please try again in a few minutes.',
          remaining: rateLimit.remaining 
        },
        { status: 429 }
      )
    }

    if (!response.ok) {
      throw new Error(`XposedOrNot API error: ${response.status}`)
    }

    const data = await response.json()

    // XposedOrNot returns data in this format:
    // {
    //   "email": "...",
    //   "breaches_details": [...],
    //   "metrics": {
    //     "breaches": X,
    //     "pastes": Y
    //   }
    // }

    const breaches = data.breaches_details || []
    const breachCount = data.metrics?.breaches || breaches.length || 0

    if (breachCount === 0) {
      return NextResponse.json({
        exposed: false,
        message: 'Good news! This email was not found in any known data breaches.',
        remaining: rateLimit.remaining
      })
    }

    // Process breach data
    const breachNames = breaches.map((b: any) => b.breach || b.name || 'Unknown').slice(0, 10)
    const mostRecentBreach = breaches.length > 0 ? breaches.reduce((latest: any, current: any) => {
      const latestDate = new Date(latest.breach_date || latest.date || '1970-01-01')
      const currentDate = new Date(current.breach_date || current.date || '1970-01-01')
      return currentDate > latestDate ? current : latest
    }, breaches[0]) : null

    return NextResponse.json({
      exposed: true,
      breachCount,
      breachNames,
      totalAccounts: data.metrics?.pastes || 0,
      mostRecentBreach: mostRecentBreach ? {
        name: mostRecentBreach.breach || mostRecentBreach.name || 'Unknown',
        date: mostRecentBreach.breach_date || mostRecentBreach.date || 'Unknown',
        dataClasses: mostRecentBreach.exposed_data || mostRecentBreach.data_classes || []
      } : null,
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
