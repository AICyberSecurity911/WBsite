
import { NextResponse } from 'next/server'
import { verifyAdminToken } from '@/lib/admin-auth'
import { listTidyCalBookings, getTidyCalStats } from '@/lib/tidycal'

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    
    if (action === 'stats') {
      const stats = await getTidyCalStats()
      return NextResponse.json({ stats })
    }
    
    const startDate = searchParams.get('startDate') || undefined
    const endDate = searchParams.get('endDate') || undefined
    
    const bookings = await listTidyCalBookings(startDate, endDate)
    
    return NextResponse.json({ bookings })
  } catch (error) {
    console.error('TidyCal fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch TidyCal data' },
      { status: 500 }
    )
  }
}
