
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, role, source } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Create or update lead
    const lead = await prisma.lead.upsert({
      where: { email },
      update: {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        company: company || undefined,
        role: role || undefined,
        source: source || 'website'
      },
      create: {
        email,
        firstName: firstName || null,
        lastName: lastName || null,
        company: company || null,
        role: role || null,
        source: source || 'website'
      }
    });

    return NextResponse.json({ 
      success: true, 
      leadId: lead.id,
      message: 'Lead captured successfully' 
    });

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
