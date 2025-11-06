# Intelligent Automations Setup Instructions

## Environment Variables Configuration

The following environment variables need to be configured for the Intelligent Automations feature to work properly:

### 1. Firebase/Firestore Setup

You need to set up a Firebase project and configure Firestore:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Firestore Database
4. Go to Project Settings > Service Accounts
5. Generate a new private key (downloads a JSON file)
6. Extract the following from the JSON file and add to `.env`:

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

**Note:** When copying the private key, make sure to keep the `\n` characters for line breaks.

### 2. Gmail API Setup (for automated emails)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Gmail API
3. Create a Service Account
4. Download the service account key JSON file
5. Enable domain-wide delegation (if sending from a specific domain)
6. Add to `.env`:

```env
GMAIL_CLIENT_EMAIL=your-service-account@your-project-id.iam.gserviceaccount.com
GMAIL_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
GMAIL_SENDER="Paras Khurana <hello@quantumleapai.io>"
```

### 3. TidyCal Integration

1. Configure your TidyCal account
2. Get your booking link
3. Set up webhook in TidyCal settings:
   - Webhook URL: `https://yourdomain.com/api/tidycal-webhook?secret=YOUR_SECRET`
   - Generate a random 64-character secret
4. Add to `.env`:

```env
NEXT_PUBLIC_TIDYCAL_BOOK_URL=https://tidycal.com/yourname/booking
TIDYCAL_WEBHOOK_SECRET=your-random-64-char-secret
```

### 4. Cron Job Setup

For automated email sending, you need to set up a cron job that calls the endpoint every minute:

1. Generate a random 64-character secret for authentication
2. Add to `.env`:

```env
CRON_SECRET=your-random-64-char-secret
```

3. Set up a cron job (on Vercel, Hostinger, or your hosting platform):
   - URL: `https://yourdomain.com/api/cron-send-pending`
   - Method: GET or POST
   - Header: `Authorization: Bearer YOUR_CRON_SECRET`
   - Frequency: Every 1 minute

### 5. Discord Webhook (Already Configured)

Discord webhook is already configured. If you need to update:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
```

### 6. Static Assets

Create a PDF automation blueprint and host it:

```env
BLUEPRINT_URL=https://yourdomain.com/static/automation-blueprint.pdf
```

## Firestore Collections Structure

The following collections will be created automatically when the app runs:

### `leads` Collection
- `email` (string, indexed, unique)
- `name` (string, optional)
- `source` (string) - e.g., "automation_calculator"
- `status` (string) - "pending", "confirmed", or "booked"
- `confirmedAt` (timestamp, optional)
- `bookedAt` (timestamp, optional)
- `utm` (object, optional)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

### `calc_sessions` Collection
- `sessionId` (string, indexed, unique)
- `inputs` (object) - Calculator input data
- `results` (object) - Calculator results
- `leadId` (string, optional) - Reference to lead
- `page` (string) - "automation"
- `createdAt` (timestamp)

### `events` Collection
- `type` (string, indexed) - "lead_captured", "email_queue", "email_sent", "booking_confirmed"
- `payload` (object) - Event-specific data
- `runAt` (timestamp, optional, indexed) - For scheduled events
- `processedAt` (timestamp, optional) - When event was processed
- `error` (string, optional) - Error message if processing failed
- `createdAt` (timestamp, indexed)

## Testing the Setup

1. **Test Calculator:**
   - Navigate to `/intelligent-automation`
   - Fill out the calculator form
   - Click "Reveal My Hidden Hours & Savings"
   - Verify results display correctly

2. **Test Lead Capture:**
   - Enter email in the calculator results section
   - Click "Email My Plan"
   - Check Discord for notification
   - Check Firestore for lead entry
   - Wait 5 minutes and check email inbox

3. **Test Cron Job:**
   - Manually call the cron endpoint with proper auth header
   - Verify pending emails are sent
   - Check Firestore events collection for processed events

4. **Test TidyCal Webhook:**
   - Book a meeting via TidyCal
   - Verify Discord receives booking notification
   - Check Firestore lead status updated to "booked"

## Security Notes

- Never commit `.env` file to version control
- Use environment variables in Vercel dashboard for deployment
- Rotate secrets regularly
- Use Firebase security rules to protect data
- Enable IP whitelisting for sensitive endpoints if possible

## Deployment Checklist

- [ ] Firebase project created and Firestore enabled
- [ ] Service account keys generated for Firebase and Gmail
- [ ] All environment variables added to Vercel/hosting platform
- [ ] TidyCal webhook configured
- [ ] Cron job scheduled
- [ ] Discord webhook tested
- [ ] PDF blueprint uploaded and accessible
- [ ] Test complete lead capture flow end-to-end
- [ ] Verify emails are being sent
- [ ] Check Firestore data is being stored correctly

## Troubleshooting

### Emails not sending
- Verify Gmail API is enabled
- Check service account has proper permissions
- Ensure domain-wide delegation is configured
- Check Gmail sender email is correct
- Verify private key format (with \n characters)

### Firestore connection issues
- Verify Firebase project ID is correct
- Check service account key is valid
- Ensure Firestore is enabled in Firebase console
- Check security rules allow write access

### Cron job not running
- Verify cron secret matches in .env and cron configuration
- Check cron job is scheduled correctly (every minute)
- Look for errors in deployment logs
- Test endpoint manually with curl

### Discord notifications not working
- Verify webhook URL is correct and active
- Check Discord channel permissions
- Test webhook with curl to isolate issue

## Support

For additional help, check:
- Firebase Documentation: https://firebase.google.com/docs
- Gmail API Documentation: https://developers.google.com/gmail/api
- TidyCal Documentation: https://tidycal.com/docs
- Vercel Cron Jobs: https://vercel.com/docs/cron-jobs

