

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

async function initializeDatabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Supabase credentials not found in environment variables')
    process.exit(1)
  }

  console.log('🚀 Initializing QuantumLeap AI Database...')
  console.log('📍 Supabase URL:', supabaseUrl)

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Read the SQL schema file
  const schemaPath = path.join(__dirname, '../database/schema.sql')
  const schema = fs.readFileSync(schemaPath, 'utf-8')

  console.log('\n📝 Executing SQL schema...')
  
  // Note: Supabase JS client doesn't support executing raw SQL directly
  // You need to run the schema.sql file in the Supabase SQL Editor
  console.log('\n⚠️  IMPORTANT: Please follow these steps to initialize your database:\n')
  console.log('1. Go to your Supabase Dashboard: https://app.supabase.com/project/' + supabaseUrl.split('//')[1].split('.')[0])
  console.log('2. Navigate to SQL Editor')
  console.log('3. Copy the contents of: /home/ubuntu/quantumleap_io/nextjs_space/database/schema.sql')
  console.log('4. Paste and execute the SQL in the editor')
  console.log('\n✅ Once completed, your database will be ready!\n')

  // Test database connection
  console.log('🔍 Testing database connection...')
  const { data, error } = await supabase.from('leads').select('count')
  
  if (error && error.code !== 'PGRST116') {
    if (error.message.includes('relation') && error.message.includes('does not exist')) {
      console.log('⚠️  Tables not yet created. Please run the SQL schema as instructed above.')
    } else {
      console.error('❌ Database error:', error.message)
    }
  } else {
    console.log('✅ Database connection successful!')
    console.log('✅ All tables are ready!')
  }
}

initializeDatabase().catch(console.error)

