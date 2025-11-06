
# Have I Been Pwned (HIBP) API Setup Guide

## Why You Need This
Your Cyber Intelligence page's email breach checker uses the Have I Been Pwned API, which requires an API key for authentication.

## How to Get Your HIBP API Key

### Step 1: Visit the HIBP API Page
Go to: https://haveibeenpwned.com/API/Key

### Step 2: Choose Your Plan
- **Commercial Use** (Recommended for your business): $3.50/month via Patreon
  - Supports commercial websites
  - Higher rate limits
  - Priority support
  
- **Non-Commercial**: Free tier available for personal/non-profit projects

### Step 3: Subscribe & Get Your Key
1. Click "Subscribe on Patreon" button
2. Choose the $3.50/month tier (or higher)
3. Complete the Patreon subscription
4. You'll receive your API key via email within 24 hours
5. The API key looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### Step 4: Add the API Key to Your Project

#### Option A: Using the Command Line (Recommended)
```bash
cd /home/ubuntu/quantumleap_io/nextjs_space
echo 'HIBP_API_KEY=your_actual_api_key_here' >> .env
```

#### Option B: Manual Edit
1. Open the `.env` file in `/home/ubuntu/quantumleap_io/nextjs_space/`
2. Add this line:
   ```
   HIBP_API_KEY=your_actual_api_key_here
   ```
3. Replace `your_actual_api_key_here` with your actual key
4. Save the file

### Step 5: Redeploy Your Application
After adding the API key, you need to redeploy for the changes to take effect.

## Testing the Breach Checker

Once configured, the breach checker will:
- ✅ Check any email against 600+ known data breaches
- ✅ Show breach count and details
- ✅ Display most recent breach information
- ✅ Rate limit to prevent abuse (10 checks per hour per IP)

## Troubleshooting

### Error: "Service not configured"
- Your `HIBP_API_KEY` is not set in the `.env` file
- Follow Step 4 above to add it

### Error: "Service authentication failed"
- Your API key is invalid or expired
- Double-check the key in your `.env` file
- Ensure there are no extra spaces or quotes
- Contact HIBP support if the key should be valid

### Error: "Rate limit exceeded"
- The HIBP API has rate limits
- Wait a few minutes and try again
- Consider upgrading your HIBP plan for higher limits

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit your `.env` file to Git/GitHub
- Keep your API key confidential
- The `.env` file is already in `.gitignore`

## API Documentation
Full HIBP API docs: https://haveibeenpwned.com/API/v3

## Questions?
If you need help setting this up, I can guide you through the process!
