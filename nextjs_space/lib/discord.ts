
export interface DiscordWebhookPayload {
  content?: string
  embeds?: Array<{
    title: string
    description?: string
    color?: number
    fields?: Array<{
      name: string
      value: string
      inline?: boolean
    }>
    timestamp?: string
  }>
}

export async function sendDiscordNotification(payload: DiscordWebhookPayload) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.warn('Discord webhook URL not configured')
    return { success: false, error: 'Webhook URL not configured' }
  }

  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Discord notification error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export function createLeadNotification(leadData: any) {
  return {
    content: '🚀 New Lead Captured!',
    embeds: [
      {
        title: 'New QuantumLeap AI Lead',
        color: 0x14b8a6, // Teal color
        fields: [
          {
            name: '👤 Name',
            value: leadData.name || 'Not provided',
            inline: true,
          },
          {
            name: '📧 Email',
            value: leadData.email,
            inline: true,
          },
          {
            name: '🏢 Company',
            value: leadData.company || 'Not provided',
            inline: true,
          },
          {
            name: '📱 Phone',
            value: leadData.phone || 'Not provided',
            inline: true,
          },
          {
            name: '📊 Calculator Results',
            value: leadData.calculatorData ? JSON.stringify(leadData.calculatorData, null, 2).substring(0, 800) : 'Not provided',
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  }
}
