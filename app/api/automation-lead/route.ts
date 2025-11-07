
import { NextRequest, NextResponse } from 'next/server';
import { getFirestoreAdmin } from '@/lib/firebase-admin';
import { notifyDiscord, createAutomationLeadEmbed } from '@/lib/discord-automation';
import type { ILead, ICalculatorSession, IEvent } from '@/types/automation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      email, 
      name, 
      sessionId, 
      formData, 
      result, 
      source = 'automation_calculator', 
      utm 
    } = body;

    if (!email || !sessionId) {
      return NextResponse.json(
        { error: 'Missing email or sessionId' },
        { status: 400 }
      );
    }

    const db = getFirestoreAdmin();
    const now = new Date();

    // Create or update lead
    const leadsRef = db.collection('leads');
    const leadQuery = await leadsRef.where('email', '==', email).limit(1).get();

    let leadId: string;
    let leadData: Partial<ILead>;

    if (leadQuery.empty) {
      // New lead
      leadData = {
        email,
        name: name || undefined,
        source,
        status: 'pending',
        utm: utm || undefined,
        createdAt: now,
        updatedAt: now,
      };
      const newLead = await leadsRef.add(leadData);
      leadId = newLead.id;
    } else {
      // Existing lead - update
      const existingLead = leadQuery.docs[0];
      leadId = existingLead.id;
      leadData = {
        name: name || existingLead.data().name,
        updatedAt: now,
        utm: utm || existingLead.data().utm,
      };
      await leadsRef.doc(leadId).update(leadData);
    }

    // Store calculator session
    const sessionsRef = db.collection('calc_sessions');
    const sessionData: Omit<ICalculatorSession, 'createdAt'> & { createdAt: any } = {
      sessionId,
      inputs: formData,
      results: result,
      leadId,
      page: 'automation',
      createdAt: now,
    };
    await sessionsRef.doc(sessionId).set(sessionData);

    // Log event
    const eventsRef = db.collection('events');
    const captureEvent: Omit<IEvent, 'createdAt'> & { createdAt: any } = {
      type: 'lead_captured',
      payload: { 
        email, 
        leadId, 
        sessionId, 
        page: 'automation',
        monthlyHumanCost: result?.monthlyHumanCost,
        potentialSavingsMonthly: result?.potentialSavingsMonthly
      },
      createdAt: now,
    };
    await eventsRef.add(captureEvent);

    // Send Discord notification
    await notifyDiscord(
      `🤖 New Automation Lead: ${email}`,
      createAutomationLeadEmbed({
        email,
        name,
        monthlyHumanCost: result?.monthlyHumanCost,
        potentialSavingsMonthly: result?.potentialSavingsMonthly,
        source
      })
    );

    // Queue email for 5 minutes later
    const emailEvent: Omit<IEvent, 'createdAt'> & { createdAt: any; runAt: any } = {
      type: 'email_queue',
      payload: {
        to: email,
        subject: 'Your Automation Blueprint + 30-Day Efficiency Plan',
        template: 'automation_blueprint',
        meta: { 
          leadId, 
          sessionId,
          monthlyHumanCost: result?.monthlyHumanCost,
          potentialSavingsMonthly: result?.potentialSavingsMonthly,
          potentialSavingsAnnual: result?.potentialSavingsAnnual
        },
      },
      runAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      createdAt: now,
    };
    await eventsRef.add(emailEvent);

    return NextResponse.json({ ok: true, leadId });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
