
import fs from 'fs'
import path from 'path'

interface TidyCalBooking {
  id: string
  contact_id: string
  booking_type_id: string
  start_time: string
  end_time: string
  status: string
  contact: {
    name: string
    email: string
  }
  booking_type: {
    title: string
  }
}

export async function getTidyCalToken() {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot access secrets from client-side')
  }
  
  const authSecretsPath = path.join(process.env.HOME || '/home/ubuntu', '.config', 'abacusai_auth_secrets.json')
  
  if (!fs.existsSync(authSecretsPath)) {
    throw new Error('TidyCal not configured')
  }
  
  const authSecrets = JSON.parse(fs.readFileSync(authSecretsPath, 'utf-8'))
  const token = authSecrets?.tidycal?.secrets?.api_key?.value
  
  if (!token) {
    throw new Error('TidyCal API key not found')
  }
  
  return token
}

export async function listTidyCalBookings(
  startDate?: string,
  endDate?: string
): Promise<TidyCalBooking[]> {
  try {
    const token = await getTidyCalToken()
    
    const params = new URLSearchParams()
    if (startDate) params.append('start_date', startDate)
    if (endDate) params.append('end_date', endDate)
    params.append('per_page', '50')
    
    const response = await fetch(
      `https://tidycal.com/api/bookings?${params}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`TidyCal API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error('Error fetching TidyCal bookings:', error)
    return []
  }
}

export async function getTidyCalStats(): Promise<{
  totalBookings: number
  upcomingBookings: number
  cancelledBookings: number
}> {
  try {
    const bookings = await listTidyCalBookings()
    const now = new Date()
    
    return {
      totalBookings: bookings.length,
      upcomingBookings: bookings.filter(b => 
        new Date(b.start_time) > now && b.status === 'confirmed'
      ).length,
      cancelledBookings: bookings.filter(b => b.status === 'cancelled').length
    }
  } catch (error) {
    console.error('Error getting TidyCal stats:', error)
    return { totalBookings: 0, upcomingBookings: 0, cancelledBookings: 0 }
  }
}
