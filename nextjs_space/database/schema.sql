
-- QuantumLeap AI Database Schema
-- Run this SQL in your Supabase SQL editor or equivalent

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_cron";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    confirmation_token VARCHAR(500),
    confirmed BOOLEAN DEFAULT FALSE,
    calculator_data JSONB,
    source VARCHAR(100) DEFAULT 'ai-workforce-calculator',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create calculator_responses table
CREATE TABLE IF NOT EXISTS calculator_responses (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    calculator_type VARCHAR(100) NOT NULL,
    responses JSONB NOT NULL,
    recommendations JSONB,
    projected_savings JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_confirmation_token ON leads(confirmation_token);
CREATE INDEX IF NOT EXISTS idx_leads_confirmed ON leads(confirmed);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_calculator_responses_type_timestamp ON calculator_responses(calculator_type, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Set up Row Level Security (RLS) for Supabase
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE calculator_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public read/write access for the application
-- In production, you'd want more restrictive policies
CREATE POLICY "Allow public access" ON leads FOR ALL USING (true);
CREATE POLICY "Allow public access" ON calculator_responses FOR ALL USING (true);
CREATE POLICY "Allow public access" ON contact_submissions FOR ALL USING (true);

-- Optional: Set up automatic cleanup of old unconfirmed leads (after 30 days)
-- This would require pg_cron extension to be enabled in Supabase
-- SELECT cron.schedule('cleanup-unconfirmed-leads', '0 2 * * *', 'DELETE FROM leads WHERE confirmed = FALSE AND created_at < NOW() - INTERVAL ''30 days'';');
