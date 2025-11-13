# Developer Onboarding Summary

**QuantumLeap AI Website - Complete Setup Guide**

## 📚 Documentation Files

1. **CURSOR_IDE_WORKFLOW_GUIDE.md** - Daily workflow, common issues, git hooks, CI/CD
2. **CURSOR_QUICK_REFERENCE.md** - Quick commands, structure, design system, APIs
3. **COMPLETE_DEVELOPER_HANDOVER.md** - Full technical documentation (provided separately)

## 🎯 Critical Information

### Project Location
- **Actual Project**: `nextjs_space/` directory
- **Default Template**: Root `src/app/` (ignore this)
- **Always work in**: `nextjs_space/`

### Branch
- **Current Branch**: `semi-final`
- **Production Branch**: `semi-final`
- **Always checkout**: `git checkout semi-final`

### Package Manager
- **Always use**: `npm install --legacy-peer-deps`
- **Never use**: `yarn` or plain `npm install`

## 🚀 First-Time Setup (5 Minutes)

```bash
# 1. Clone and navigate
git clone https://github.com/AICyberSecurity911/WBsite.git
cd WBsite
git checkout semi-final
cd nextjs_space

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Set up environment
# Copy .env.example to .env.local
# Get credentials from server: /home/ubuntu/quantumleap_credentials.json

# 4. Generate Prisma client
npx prisma generate

# 5. Start development
npm run dev

# 6. Open browser
# http://localhost:3000
```

## 📋 Daily Workflow

### Morning Routine
```bash
cd nextjs_space
git pull origin semi-final
npm install --legacy-peer-deps  # If package.json changed
npm run dev
```

### Before Committing
```bash
# Pre-commit hook runs automatically, but you can check manually:
npm run lint -- --no-cache
npm run typecheck
```

### Before Pushing
```bash
# Pre-push hook runs automatically, but you can check manually:
npm run lint -- --no-cache --max-warnings=0
npm run typecheck
npm run build
```

## 🎨 Design System Essentials

**Theme**: Quantum Gradient Dark (dark-mode-first)

**Key Colors**:
- Background: `bg-qgd-bg` (#07070b)
- Cards: `bg-qgd-card` (#0c0c12)
- Text: `text-qgd-fg` (#f6f7ff)
- Accent: `text-qgd-accent` (#ff7f50 - copper/coral)
- Primary: `bg-qgd-primary` (#5312c4 - purple)

**Components**:
- Use `FlameBorder` for animated card borders
- Use shadcn/ui components from `components/ui/`
- Follow spacing system: `py-16 md:py-20 lg:py-24` for sections

## 🔧 Key Integrations

1. **Gmail API** - Email sending
2. **Google Calendar** - Booking management
3. **TidyCal** - Alternative booking system
4. **Discord** - Internal notifications
5. **Have I Been Pwned** - Breach checking
6. **Supabase** - PostgreSQL database

## 📊 Project Stats

- **23 Pages** (18 public + 5 admin)
- **20+ API Routes**
- **4 Calculators** (AI Team, Automation, Hiring Risk, Profit Potential)
- **50+ UI Components** (shadcn/ui)
- **6 Database Models** (Lead, CalculatorResponse, ConsultationBooking, etc.)
- **Build Time**: ~45 seconds
- **Target Lighthouse**: 90+ all metrics

## 🐛 Most Common Issues

### 1. Wrong Directory
**Problem**: Working in root `src/app/` instead of `nextjs_space/`
**Solution**: Always `cd nextjs_space` first

### 2. Dependency Conflicts
**Problem**: `npm install` fails with ERESOLVE errors
**Solution**: Always use `npm install --legacy-peer-deps`

### 3. Prisma Client Out of Sync
**Problem**: "Prisma client doesn't match schema"
**Solution**: `npx prisma generate`

### 4. Build Errors
**Problem**: TypeScript or ESLint errors
**Solution**: 
```bash
npm run lint -- --no-cache
npm run typecheck
# Fix errors, then rebuild
```

### 5. Email Not Sending
**Problem**: Gmail API authentication fails
**Solution**: Check `.env.local` has correct `GMAIL_CLIENT_EMAIL` and `GMAIL_PRIVATE_KEY`

## 📁 File Locations Quick Reference

| What | Where |
|------|-------|
| Homepage | `app/page.tsx` |
| SMB Landing | `app/smb/page.tsx` |
| Service Pages | `app/ai-workforce/`, `app/intelligent-automation/`, etc. |
| Admin Dashboard | `app/admin/` |
| API Routes | `app/api/` |
| Calculators | `components/calculator/` |
| UI Components | `components/ui/` |
| Database Schema | `prisma/schema.prisma` |
| Email Logic | `lib/email.ts` |
| Calculator Logic | `lib/calculator.ts` |
| Design System | `app/globals.css` |

## 🔐 Authentication

**Admin Login**:
- URL: `/admin/login`
- JWT-based with HTTP-only cookies
- Token expires: 24 hours
- Protected routes: All `/admin/*` except `/admin/login`

## 📧 Lead Capture Flow

1. User fills calculator/form
2. POST to `/api/calculator/recommendations` or similar
3. Create/update `Lead` record
4. Create `CalculatorResponse` record
5. Send email (Gmail API)
6. Send Discord notification
7. Return results to frontend

## 🧪 Testing Checklist

Before deploying:
- [ ] All calculators work
- [ ] Lead capture stores in database
- [ ] Emails send successfully
- [ ] Discord notifications work
- [ ] Admin login works
- [ ] All pages load
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Build succeeds

## 🚢 Deployment

**Current Platform**: Abacus.AI
**Auto-deploy**: On push to `semi-final` branch
**Manual Deploy**: Via Abacus.AI dashboard

**Pre-deployment**:
1. Run all quality checks
2. Test locally
3. Commit and push to `semi-final`
4. Monitor deployment in Abacus.AI dashboard

## 📞 Getting Help

1. **Check Documentation**:
   - CURSOR_QUICK_REFERENCE.md (this file)
   - CURSOR_IDE_WORKFLOW_GUIDE.md
   - COMPLETE_DEVELOPER_HANDOVER.md

2. **Check Logs**:
   - Terminal output
   - Browser console (F12)
   - Network tab

3. **Common Commands**:
   ```bash
   npx prisma studio  # View database
   npm run lint        # Check code
   npm run typecheck   # Check types
   npm run build       # Test build
   ```

4. **Contact**:
   - paras@leapintoai.com (Founder)
   - support@leapintoai.com (Support)

## ✅ Onboarding Checklist

- [ ] Cloned repository
- [ ] Checked out `semi-final` branch
- [ ] Installed dependencies (`npm install --legacy-peer-deps`)
- [ ] Set up `.env.local` with credentials
- [ ] Generated Prisma client (`npx prisma generate`)
- [ ] Started dev server (`npm run dev`)
- [ ] Opened http://localhost:3000
- [ ] Tested homepage
- [ ] Tested a calculator
- [ ] Tested admin login
- [ ] Read CURSOR_QUICK_REFERENCE.md
- [ ] Read CURSOR_IDE_WORKFLOW_GUIDE.md
- [ ] Understood project structure
- [ ] Know where to find things

## 🎓 Learning Path

### Week 1: Basics
- Understand project structure
- Learn design system
- Test all calculators
- Explore admin dashboard

### Week 2: Development
- Make a small change
- Test locally
- Commit and push
- Monitor deployment

### Week 3: Advanced
- Add a new feature
- Create a new page
- Integrate a new API
- Optimize performance

## 💡 Pro Tips

1. **Always work in `nextjs_space/`** - The root `src/app/` is just a template
2. **Use `--legacy-peer-deps`** - Required for dependency installation
3. **Check pre-commit hooks** - They run automatically, don't skip them
4. **Use Prisma Studio** - Great for viewing database data
5. **Test on mobile** - Always check responsive design
6. **Monitor Discord** - Notifications show new leads/bookings
7. **Check build output** - Look for warnings/errors before deploying
8. **Use TypeScript** - Catch errors early with type checking

---

**Welcome to the team! 🚀**

For detailed information, see:
- **Quick Reference**: CURSOR_QUICK_REFERENCE.md
- **Workflow Guide**: CURSOR_IDE_WORKFLOW_GUIDE.md
- **Full Documentation**: COMPLETE_DEVELOPER_HANDOVER.md

