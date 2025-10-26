
import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export interface Lead {
  id: string
  email: string
  name: string
  company?: string
  phone?: string
  confirmation_token?: string
  confirmed: boolean
  calculator_data?: any
  source?: string
  created_at: string
  updated_at: string
}

export interface CalculatorResponse {
  id: string
  calculator_type: string
  responses: any
  recommendations: any[]
  timestamp: string
  lead_id?: string
  projected_savings?: any
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  subject?: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
  created_at: string
}
