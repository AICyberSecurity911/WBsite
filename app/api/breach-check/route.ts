
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

    // XposedOrNot API returns data in this format:
    // {
    //   "BreachMetrics": { ... },
    //   "BreachesSummary": { "site": "..." },
    //   "ExposedBreaches": {
    //     "breaches_details": [...]
    //   }
    // }

    // Check if there are any breaches
    const breachesData = data.ExposedBreaches?.breaches_details || []
    const breachCount = breachesData.length
    
    // Also check the BreachesSummary for site list
    const siteSummary = data.BreachesSummary?.site || ''
    const siteCount = siteSummary ? siteSummary.split(';').length : 0

    if (breachCount === 0 && siteCount === 0) {
      return NextResponse.json({
        exposed: false,
        message: 'Good news! This email was not found in any known data breaches.',
        remaining: rateLimit.remaining
      })
    }

    // Use the higher count (sometimes siteSummary has more complete data)
    const actualBreachCount = Math.max(breachCount, siteCount)

    // Process breach data
    const breachNames = breachesData
      .map((b: any) => b.breach || 'Unknown')
      .slice(0, 10)
    
    const mostRecentBreach = breachesData.length > 0 
      ? breachesData.reduce((latest: any, current: any) => {
          const latestDate = new Date(latest.xposed_date || '1970')
          const currentDate = new Date(current.xposed_date || '1970')
          return currentDate > latestDate ? current : latest
        }, breachesData[0])
      : null

    // Get risk score from BreachMetrics
    const riskData = data.BreachMetrics?.risk?.[0] || { risk_label: 'Unknown', risk_score: 0 }

    return NextResponse.json({
      exposed: true,
      breachCount: actualBreachCount,
      breachNames,
      riskScore: riskData.risk_score,
      riskLabel: riskData.risk_label,
      mostRecentBreach: mostRecentBreach ? {
        name: mostRecentBreach.breach || 'Unknown',
        date: mostRecentBreach.xposed_date || 'Unknown',
        dataClasses: mostRecentBreach.xposed_data ? mostRecentBreach.xposed_data.split(';') : [],
        records: mostRecentBreach.xposed_records || 0
      } : null,
      message: `Warning! This email appeared in ${actualBreachCount} known data breach${actualBreachCount !== 1 ? 'es' : ''}.`,
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
