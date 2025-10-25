
# 🌳 GitHub Branch Structure - Enterprise & SMB Versions

**Repository**: https://github.com/AICyberSecurity911/WBsite  
**Date**: October 25, 2025

---

## 📊 Branch Overview

### 🏢 Enterprise Development Branch
**Branch Name**: `enterprise-development`  
**Purpose**: Ongoing enterprise version development  
**Link**: https://github.com/AICyberSecurity911/WBsite/tree/enterprise-development

**Current State:**
- Contains all enterprise service pages (5 pages)
- Blog posts (6 articles)
- Download pages (5 gated resources)
- Interactive calculators (4 calculators)
- Full SEO optimization
- Cinematic design with animated backgrounds

---

### 🏪 SMB Development Branch (NEW!)
**Branch Name**: `smb-development`  
**Purpose**: Small business version development  
**Link**: https://github.com/AICyberSecurity911/WBsite/tree/smb-development

**Current State:**
- SMB foundation: color scheme (teal, blue, orange)
- SMB database schema (separate lead tables)
- Test page: `/smb/ai-workforce`
- Clean white background design
- Ready for SMB service page development

**Starting Point:**
- Branched from: `enterprise-development`
- Base commit: `7379b04` - "Enterprise backed up to GitHub"
- Includes: All enterprise pages + SMB foundation

---

### 🔖 Tagged Versions

#### Pure Enterprise v1.0
**Tag Name**: `pure-enterprise-v1.0`  
**Commit**: `573b13c`  
**Link**: https://github.com/AICyberSecurity911/WBsite/releases/tag/pure-enterprise-v1.0

**Purpose**: Clean enterprise version before any SMB work  
**Contents**: 27 enterprise routes, no SMB code

---

## 🔀 Branch Relationships

```
main (original)
│
├── enterprise-development
│   ├── Latest: 7379b04 "Enterprise backed up to GitHub"
│   ├── Tag: pure-enterprise-v1.0 (at 573b13c)
│   └── Contains: Enterprise + SMB foundation
│
└── smb-development (NEW!)
    ├── Branched from: enterprise-development (7379b04)
    ├── Latest: 7379b04 "Enterprise backed up to GitHub"
    └── Will contain: SMB-specific development
```

---

## 🎯 Working Strategy

### For SMB Development (Current Focus)
```bash
# You're already on this branch!
git checkout smb-development
git pull origin smb-development

# Make changes, commit, and push
git add .
git commit -m "Your commit message"
git push origin smb-development
```

### For Enterprise Updates
```bash
# Switch to enterprise branch
git checkout enterprise-development
git pull origin enterprise-development

# Make changes, commit, and push
git add .
git commit -m "Your commit message"
git push origin enterprise-development
```

### To View Pure Enterprise Version
```bash
# Checkout the tagged version
git checkout pure-enterprise-v1.0

# Or create a new branch from it
git checkout -b enterprise-only pure-enterprise-v1.0
```

---

## 📂 What Each Branch Contains

### Enterprise Development Branch
✅ **Service Pages:**
- AI Workforce (`/ai-workforce`)
- Process Intelligence (`/process-intelligence`)
- Cyber Intelligence (`/cyber-intelligence`)
- Beyond Background Checks (`/beyond-background-checks`)
- Enterprise Transformation (`/enterprise-transformation`)

✅ **Blog Posts:** 6 articles
✅ **Download Pages:** 5 gated resources
✅ **Calculators:** 4 interactive tools
✅ **Components:** All enterprise UI components
✅ **SMB Foundation:** Color scheme and database schema

---

### SMB Development Branch (Current)
✅ **Starting Point:** Same as enterprise-development
✅ **SMB Foundation:**
- Color scheme: Teal (#14b8a6), Blue (#3b82f6), Orange (#ff6b35)
- Database: `SmbAiWorkforceLead`, `SmbCyberRiskResult` tables
- Test page: `/smb/ai-workforce`

🚧 **Ready to Add:**
- Complete SMB AI Workforce page
- SMB Process Intelligence page
- SMB Cyber Intelligence page
- SMB Beyond Background Checks page
- SMB Business Transformation page
- Common landing page for routing

---

## 🔄 Sync Strategy

### Option 1: Keep Branches Separate (Recommended)
- Develop SMB features in `smb-development` branch
- Develop enterprise features in `enterprise-development` branch
- Each branch maintains its own identity
- Easier to deploy separately

### Option 2: Selective Merging
If you want to share specific features:
```bash
# From smb-development, cherry-pick specific commits
git cherry-pick <commit-hash>

# Or merge specific files
git checkout enterprise-development -- path/to/file
```

---

## 🚀 Deployment Strategy

### Option A: Separate Deployments
- Deploy `enterprise-development` to: `quantumleap.ai` or `enterprise.quantumleap.ai`
- Deploy `smb-development` to: `smb.quantumleap.ai` or `business.quantumleap.ai`

### Option B: Unified Deployment with Routing
- Deploy either branch with both `/enterprise/*` and `/smb/*` routes
- Add common landing page at root `/`
- Route users based on their choice

---

## 📝 Current Status

✅ **Enterprise Branch**: Stable, backed up, tagged  
✅ **SMB Branch**: Created, pushed, ready for development  
✅ **Pure Enterprise Tag**: Available for rollback/reference  
✅ **Working Branch**: `smb-development` (current)

---

## 🎨 Visual Differences

| Feature | Enterprise | SMB |
|---------|-----------|-----|
| **Background** | Dark, cinematic | Clean white |
| **Colors** | Purple, gold, orange | Teal, blue, orange |
| **Design** | McKinsey-style, premium | Friendly, accessible |
| **Messaging** | Fortune 500, executive | Small business owners |
| **Stats** | $170M+, NASA-recognized | Affordable, scalable |
| **Case Studies** | Large enterprises | Small businesses |

---

## 🔐 Branch Protection

### Recommended Settings (on GitHub):
1. Require pull request reviews before merging
2. Require status checks to pass
3. Require branches to be up to date before merging
4. Include administrators in restrictions

---

## 📌 Quick Links

**Main Repository**: https://github.com/AICyberSecurity911/WBsite

**Branches:**
- Enterprise: https://github.com/AICyberSecurity911/WBsite/tree/enterprise-development
- SMB: https://github.com/AICyberSecurity911/WBsite/tree/smb-development

**Tags:**
- Pure Enterprise v1.0: https://github.com/AICyberSecurity911/WBsite/releases/tag/pure-enterprise-v1.0

---

## ✅ Next Steps

Now working on `smb-development` branch. Ready to:

1. Build complete SMB AI Workforce page
2. Create other SMB service pages
3. Build common landing page
4. Deploy SMB version separately

**All enterprise code is safe in its own branch!** 🎉
