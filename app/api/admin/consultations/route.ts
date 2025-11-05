
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyAdminToken } from '@/lib/admin-auth'

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const consultations = await prisma.consultationBooking.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json({ consultations })
  } catch (error) {
    console.error('Consultations fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch consultations' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: Request) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { id, status } = await request.json()
    
    const consultation = await prisma.consultationBooking.update({
      where: { id },
      data: { status }
    })
    
    return NextResponse.json({ consultation })
  } catch (error) {
    console.error('Consultation update error:', error)
    return NextResponse.json(
      { error: 'Failed to update consultation' },
      { status: 500 }
    )
  }
}
