# Cursor IDE Quick Reference - QuantumLeap AI

**Based on Complete Developer Handover Document v2.0**

## 🎯 Essential Facts

- **Working Directory**: `nextjs_space/` (NOT root `src/app/`)
- **Branch**: `semi-final` (production branch)
- **Live URL**: https://quantumleapai.abacusai.app
- **Package Manager**: npm (always use `--legacy-peer-deps`)
- **Node Version**: 18.x (required)

## 🚀 Daily Commands

```bash
# Navigate to project
cd "C:\Users\email\OneDrive\Desktop\Website Cursor\nextjs_space"

# Start development
npm install --legacy-peer-deps  # If dependencies changed
npm run dev                     # Start dev server (localhost:3000)

# Quality checks
npm run lint -- --no-cache      # Check code quality
npm run typecheck               # TypeScript validation
npm run build                   # Production build test

# Database
npx prisma generate             # Regenerate Prisma client
npx prisma studio               # Open database GUI
```

## 📁 Project Structure Quick Reference

```
nextjs_space/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Homepage (/)
│   ├── smb/                   # SMB landing (/smb)
│   ├── ai-workforce/          # Service page
│   ├── admin/                 # Admin dashboard (protected)
│   └── api/                   # API routes
├── components/
│   ├── calculator/            # 4 ROI calculators
│   ├── layout/                # Header, Footer
│   ├── sections/              # Page sections
│   └── ui/                    # shadcn/ui components (50+)
├── lib/                       # Utilities & integrations
│   ├── db.ts                  # Prisma client
│   ├── email.ts               # Gmail API
│   ├── discord.ts             # Discord webhooks
│   └── calculator.ts           # Calculator logic
└── prisma/
    └── schema.prisma          # Database schema
```

## 🎨 Design System (Quantum Gradient Dark)

**Always use these CSS classes:**

```tsx
// Backgrounds
className="bg-qgd-bg"          // Main background (#07070b)
className="bg-qgd-card"        // Card background (#0c0c12)

// Text
className="text-qgd-fg"         // Primary text (#f6f7ff)
className="text-qgd-fg-muted"  // Secondary text (#9ca3af)

// Accents
className="text-qgd-accent"     // Copper/coral (#ff7f50)
className="bg-qgd-primary"      // Purple (#5312c4)

// Cards with flame border
import { FlameBorder } from '@/components/ui/flame-border'
<FlameBorder>
  {/* Card content */}
</FlameBorder>
```

## 🔌 Key API Endpoints

### Public APIs

- `POST /api/calculator/recommendations` - Calculator submissions
- `POST /api/consultation` - Book consultation
- `POST /api/breach-check` - Email breach checker
- `POST /api/contact-support` - Contact form

### Admin APIs (Protected)

- `POST /api/admin/auth/login` - Admin login
- `GET /api/admin/leads` - Get all leads
- `GET /api/admin/analytics` - Dashboard metrics
- `GET /api/admin/calendar` - Calendar events

## 🗄️ Database Models (Quick Reference)

```typescript
// Lead - All captured leads
Lead {
  email (unique)
  name, company, phone
  source (e.g., "ai-team-calculator")
  calculatorData (JSON)
  confirmed (boolean)
}

// CalculatorResponse - Calculator submissions
CalculatorResponse {
  calculatorType
  responses (JSON)
  recommendations (JSON)
  projectedSavings (JSON)
  leadId (FK)
}

// ConsultationBooking - Bookings
ConsultationBooking {
  name, email, company
  serviceInterest
  preferredDate, preferredTime
  status ("pending", "confirmed", etc.)
  googleEventId, tidycalBookingId
}
```

## 🔐 Environment Variables (Required)

```env
# Database
DATABASE_URL="postgresql://..."

# Email (Gmail API)
GMAIL_CLIENT_EMAIL="service-account@..."
GMAIL_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GMAIL_SENDER="paras@leapintoai.com"

# Discord
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."

# Admin Auth
ADMIN_JWT_SECRET="your-secret-key"

# Google Calendar
GOOGLE_CALENDAR_ID="primary"

# TidyCal
TIDYCAL_API_KEY="your-key"
NEXT_PUBLIC_TIDYCAL_BOOK_URL="https://tidycal.com/..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
```

**Get credentials from**: `/home/ubuntu/quantumleap_credentials.json` (on server)

## 🧮 Calculator Types

1. **AI Team Calculator** (`ai-team`) - Employee replacement ROI
2. **Automation Calculator** (`automation`) - Process automation savings
3. **Hiring Risk Calculator** (`hiring-risk`) - Bad hire cost analysis
4. **Profit Potential Calculator** (`profit-potential`) - Business transformation ROI

**Location**: `components/calculator/`

## 📧 Email Flow

When a lead is captured:
1. Create/update `Lead` record
2. Create `CalculatorResponse` record
3. Send confirmation email (Gmail API)
4. Send Discord notification
5. Return results to frontend

**Email templates**: Generated in API routes

## 🐛 Common Issues & Quick Fixes

### Build Fails
```bash
cd nextjs_space
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npx prisma generate
npm run build
```

### Database Connection Error
```bash
# Verify DATABASE_URL in .env.local
# Test connection
npx prisma db pull
```

### Email Not Sending
```bash
# Check Gmail API credentials
# Verify service account has domain-wide delegation
# Check Google Cloud Console for quota
```

### Prisma Client Out of Sync
```bash
npx prisma generate
# If still failing:
rm -rf node_modules/.prisma
npx prisma generate
```

## 🔍 Debugging Tips

### View Database
```bash
npx prisma studio
# Opens browser at http://localhost:5555
```

### Check API Routes
```bash
# Test in browser or Postman
curl http://localhost:3000/api/health
```

### View Logs
```bash
# Check terminal output
# Check browser console (F12)
# Check network tab for API calls
```

## 📝 Code Style Quick Reference

```typescript
// ✅ Use explicit types
function calculate(salary: number): number { }

// ✅ Use interfaces
interface User { id: string; name: string }

// ✅ Use 'use client' for client components
'use client'
import { useState } from 'react'

// ✅ Use kebab-case for files
user-profile.tsx

// ✅ Use PascalCase for components
export function UserProfile() { }
```

## 🚢 Deployment Checklist

Before deploying:
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds
- [ ] Test all calculators
- [ ] Test lead capture
- [ ] Test email sending
- [ ] Test admin login
- [ ] Check mobile responsiveness

## 📊 Key Metrics to Monitor

- **Leads**: Total, new today, by source
- **Consultations**: Booked, conversion rate
- **Calculators**: Completions, completion rate
- **Performance**: Lighthouse score (target: 90+)

## 🔗 Important Links

- **Repository**: https://github.com/AICyberSecurity911/WBsite.git
- **Live Site**: https://quantumleapai.abacusai.app
- **Admin Dashboard**: https://quantumleapai.abacusai.app/admin
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

## 📞 Support Contacts

- **Founder**: paras@leapintoai.com
- **Support**: support@leapintoai.com
- **Hosting**: Abacus.AI dashboard

## ⚡ Quick Wins

### Add a New Service Page
1. Create `app/new-service/page.tsx`
2. Add to navigation in `components/layout/header.tsx`
3. Create service-specific components in `components/sections/`
4. Add route to sitemap

### Add a New Calculator
1. Create component in `components/calculator/new-calculator.tsx`
2. Add calculation logic to `lib/calculator.ts`
3. Create API route `app/api/calculator/new-calc/route.ts`
4. Add to service page

### Add a New Admin Feature
1. Create page in `app/admin/new-feature/page.tsx`
2. Create API route in `app/api/admin/new-feature/route.ts`
3. Add to admin navigation
4. Protect with JWT authentication

---

**Remember**: Always work in `nextjs_space/` directory, use `--legacy-peer-deps` for npm install, and test locally before deploying!

