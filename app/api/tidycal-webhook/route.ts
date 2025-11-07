
import { NextRequest, NextResponse } from 'next/server';
import { getFirestoreAdmin } from '@/lib/firebase-admin';
import { notifyDiscord, createBookingEmbed } from '@/lib/discord-automation';

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret
    const secret = request.headers.get('x-tidycal-secret') || 
                   request.nextUrl.searchParams.get('secret');
    
    if (secret !== process.env.TIDYCAL_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { email, name, booking_id, start_time } = body;

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const db = getFirestoreAdmin();
    const now = new Date();

    // Update lead status
    const leadsRef = db.collection('leads');
    const leadQuery = await leadsRef.where('email', '==', email).limit(1).get();

    if (!leadQuery.empty) {
      const leadDoc = leadQuery.docs[0];
      await leadDoc.ref.update({
        status: 'booked',
        bookedAt: now,
        updatedAt: now,
      });
    }

    // Log booking event
    const eventsRef = db.collection('events');
    await eventsRef.add({
      type: 'booking_confirmed',
      payload: { email, name, booking_id, start_time },
      createdAt: now,
    });

    // Send Discord notification
    await notifyDiscord(
      `📅 TidyCal Booking Confirmed: ${email}`,
      createBookingEmbed({ email, name, bookingId: booking_id, startTime: start_time })
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('TidyCal webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
