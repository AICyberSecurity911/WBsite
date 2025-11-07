
export async function notifyDiscord(content: string, embed?: any) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.log('Discord webhook not configured, skipping notification');
    return { success: false, reason: 'no_webhook' };
  }

  try {
    const payload: any = { content };
    if (embed) {
      payload.embeds = [embed];
    }

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error('Discord notification failed:', response.statusText);
      return { success: false, error: response.statusText };
    }

    return { success: true };
  } catch (error) {
    console.error('Discord notification error:', error);
    return { success: false, error };
  }
}

export function createAutomationLeadEmbed(data: {
  email: string;
  name?: string;
  monthlyHumanCost?: number;
  potentialSavingsMonthly?: number;
  source?: string;
}) {
  return {
    title: '🤖 New Automation Lead Captured',
    color: 0x14b8a6, // Teal color
    fields: [
      { name: 'Email', value: data.email, inline: true },
      { name: 'Name', value: data.name || 'Not provided', inline: true },
      { name: 'Source', value: data.source || 'automation_calculator', inline: true },
      { 
        name: 'Current Monthly Cost', 
        value: data.monthlyHumanCost ? `$${data.monthlyHumanCost.toLocaleString()}` : 'N/A', 
        inline: true 
      },
      { 
        name: 'Potential Savings', 
        value: data.potentialSavingsMonthly ? `$${data.potentialSavingsMonthly.toLocaleString()}/mo` : 'N/A', 
        inline: true 
      },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'QuantumLeap AI - Intelligent Automations' }
  };
}

export function createBookingEmbed(data: {
  email: string;
  name?: string;
  bookingId?: string;
  startTime?: string;
}) {
  return {
    title: '📅 TidyCal Booking Confirmed',
    color: 0x10b981, // Green color
    fields: [
      { name: 'Email', value: data.email, inline: true },
      { name: 'Name', value: data.name || 'Not provided', inline: true },
      { name: 'Booking ID', value: data.bookingId || 'N/A', inline: true },
      { name: 'Start Time', value: data.startTime || 'Not provided', inline: false },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'QuantumLeap AI - Intelligent Automations' }
  };
}
