
import fs from 'fs'
import path from 'path'

interface CalendarEvent {
  id: string
  summary: string
  description?: string
  start: {
    dateTime: string
    timeZone?: string
  }
  end: {
    dateTime: string
    timeZone?: string
  }
  attendees?: Array<{
    email: string
    displayName?: string
  }>
}

export async function getGoogleCalendarToken() {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot access secrets from client-side')
  }
  
  const authSecretsPath = path.join(process.env.HOME || '/home/ubuntu', '.config', 'abacusai_auth_secrets.json')
  
  if (!fs.existsSync(authSecretsPath)) {
    throw new Error('Google Calendar not configured')
  }
  
  const authSecrets = JSON.parse(fs.readFileSync(authSecretsPath, 'utf-8'))
  const token = authSecrets?.googlecalendar?.secrets?.access_token?.value
  
  if (!token) {
    throw new Error('Google Calendar access token not found')
  }
  
  return token
}

export async function listCalendarEvents(
  timeMin?: string,
  timeMax?: string
): Promise<CalendarEvent[]> {
  try {
    const token = await getGoogleCalendarToken()
    
    const params = new URLSearchParams({
      timeMin: timeMin || new Date().toISOString(),
      timeMax: timeMax || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      singleEvents: 'true',
      orderBy: 'startTime',
      maxResults: '50'
    })
    
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?${params}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data.items || []
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return []
  }
}

export async function createCalendarEvent(event: {
  summary: string
  description?: string
  start: string
  end: string
  attendees?: string[]
}): Promise<CalendarEvent | null> {
  try {
    const token = await getGoogleCalendarToken()
    
    const eventData = {
      summary: event.summary,
      description: event.description,
      start: {
        dateTime: event.start,
        timeZone: 'America/New_York'
      },
      end: {
        dateTime: event.end,
        timeZone: 'America/New_York'
      },
      attendees: event.attendees?.map(email => ({ email }))
    }
    
    const response = await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      }
    )
    
    if (!response.ok) {
      throw new Error(`Failed to create event: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error creating calendar event:', error)
    return null
  }
}
