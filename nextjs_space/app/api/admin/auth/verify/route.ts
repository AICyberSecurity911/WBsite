
import { NextResponse } from 'next/server'
import { verifyAdminToken } from '@/lib/admin-auth'

export async function POST(request: Request) {
  try {
    const { token } = await request.json()
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      )
    }
    
    const admin = await verifyAdminToken(token)
    
    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }
    
    return NextResponse.json({ admin })
  } catch (error) {
    console.error('Admin token verification error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}
