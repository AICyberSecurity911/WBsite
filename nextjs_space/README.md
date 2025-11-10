
# QuantumLeap AI - Custom AI Solutions for SMBs

A comprehensive Next.js website showcasing QuantumLeap AI's services including Custom AI Workforce, Intelligent Automation, Cyber Intelligence, and Background Checks solutions tailored for small and medium-sized businesses.

## 🚀 Live Demo

**Deployed Site:** [https://quantumleap-io-55l56u.abacusai.app](https://quantumleap-io-55l56u.abacusai.app)

## 🎯 Features

### Core Services Pages
- **AI Workforce** - Custom-built AI employees for SMBs with interactive calculator
- **Intelligent Automation** - Workflow automation solutions with contact support
- **Cyber Intelligence** - Security audits with breach checking tool (powered by Have I Been Pwned)
- **Background Checks** - Enhanced due diligence services

### Key Functionalities
- 📊 **Interactive ROI Calculator** - Calculate savings from AI implementation
- 🔒 **Email Breach Checker** - Check if emails appear in data breaches (HIBP API)
- 📝 **Lead Capture System** - Exit-intent popups, forms with email validation
- 📧 **Email Integration** - Gmail API for automated communications
- 📅 **Calendar Integration** - Google Calendar + TidyCal booking
- 💬 **Discord Notifications** - Real-time lead notifications
- 📱 **Admin Dashboard** - Manage leads, consultations, blog content
- 📚 **Blog System** - SEO-optimized articles with dynamic routing

### Design Features
- 🎨 Modern UI with Tailwind CSS + shadcn/ui components
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 14
- 🎭 Animated components with Framer Motion

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.28 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** JWT-based admin auth
- **APIs:** Gmail, Google Calendar, TidyCal, Have I Been Pwned
- **Package Manager:** npm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AICyberSecurity911/quantumleap-io.git
cd quantumleap-io

# Install dependencies (use --legacy-peer-deps due to peer dependency conflicts)
npm install --legacy-peer-deps

# Set up environment variables (see .env.example)
cp .env.example .env

# Run database migrations
npm run prisma generate
npm run prisma db push

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://..."

# Admin Auth
ADMIN_JWT_SECRET="your-secret-key"

# Email (Gmail API)
GMAIL_USER="your-gmail@gmail.com"
GMAIL_REFRESH_TOKEN="your-refresh-token"

# Calendar
GOOGLE_CALENDAR_ID="your-calendar-id"

# TidyCal
TIDYCAL_API_KEY="your-tidycal-key"

# Discord
DISCORD_WEBHOOK_URL="your-discord-webhook"

# Google Drive (optional)
GOOGLE_DRIVE_FOLDER_ID="your-folder-id"
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── admin/               # Admin dashboard pages
│   ├── api/                 # API routes
│   ├── blog/                # Blog pages
│   └── [services]/          # Service pages
├── components/              # React components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # shadcn/ui components
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── prisma/                  # Database schema
└── scripts/                 # Setup scripts
```

## 🚀 Deployment

The site is deployed on Abacus.AI platform:
- **Production:** https://quantumleap-io-55l56u.abacusai.app

### Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔐 Admin Dashboard

Access the admin dashboard at `/admin/login` with proper credentials.

**Features:**
- Lead management and analytics
- Consultation requests tracking
- Blog post management (create, edit via API)
- Calendar integration
- TidyCal booking management
- Google Drive document access

## 📝 License

© 2025 QuantumLeap AI. All rights reserved.

## 👨‍💻 Developer

Built with ❤️ by the QuantumLeap team

---

**Questions or Issues?**  
Contact: ai@cybersecurity911.com
