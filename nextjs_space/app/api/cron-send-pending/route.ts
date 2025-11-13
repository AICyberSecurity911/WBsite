
import { NextRequest, NextResponse } from 'next/server';
import { getFirestoreAdmin } from '@/lib/firebase-admin';
import { sendHtmlEmail, renderEmailTemplate } from '@/lib/email-automation';

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization');
    const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
    
    if (authHeader !== expectedAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = getFirestoreAdmin();
    const eventsRef = db.collection('events');
    const now = new Date();

    // Find pending emails
    const pendingQuery = await eventsRef
      .where('type', '==', 'email_queue')
      .where('runAt', '<=', now)
      .limit(25)
      .get();

    let processed = 0;
    const batch = db.batch();

    for (const doc of pendingQuery.docs) {
      const event = doc.data();
      
      // Skip if already processed
      if (event.processedAt) continue;

      try {
        const { to, subject, template, meta } = event.payload;
        const html = renderEmailTemplate(template, meta);
        
        await sendHtmlEmail(to, subject, html);
        
        // Mark as processed
        batch.update(doc.ref, {
          processedAt: now,
        });

        // Log sent event
        await eventsRef.add({
          type: 'email_sent',
          payload: { to, template, subject },
          createdAt: now,
        });

        processed++;
      } catch (error) {
        console.error('Email send error:', error);
        // Mark as processed with error
        batch.update(doc.ref, {
          processedAt: now,
          error: String(error),
        });
      }
    }

    await batch.commit();

    return NextResponse.json({ 
      success: true, 
      processed,
      timestamp: now.toISOString()
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Cron job failed', details: String(error) },
      { status: 500 }
    );
  }
}

// Also support POST for manual triggers
export async function POST(request: NextRequest) {
  return GET(request);
}
