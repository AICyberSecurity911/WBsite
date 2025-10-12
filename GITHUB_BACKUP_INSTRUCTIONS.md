
# GitHub Backup Instructions for QuantumLeap Enterprise Website

## Your Git Repository Status
✅ Git is initialized and configured
✅ All files are committed (working tree clean)
✅ Proper .gitignore is in place
✅ Commit history includes all major features

## Recent Commits:
1. Add Executive Due Diligence page with risk calculator
2. Process Intelligence page complete
3. QuantumLeap AI enterprise landing page complete

---

## Step-by-Step Guide to Push to GitHub

### Option 1: Using GitHub Web Interface (Recommended)

1. **Create a New Repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `quantumleap-enterprise` (or your preferred name)
   - Description: "QuantumLeap AI Enterprise Website - Executive Due Diligence & Process Intelligence Platform"
   - Choose: Private (recommended) or Public
   - **IMPORTANT**: Do NOT initialize with README, .gitignore, or license (your repo already has these)
   - Click "Create repository"

2. **Connect Your Local Repository to GitHub**
   
   After creating the repository, GitHub will show you commands. Run these in your terminal:
   
   ```bash
   cd /home/ubuntu/quantumleap_enterprise
   git remote add origin https://github.com/YOUR_USERNAME/quantumleap-enterprise.git
   git branch -M main
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` with your actual GitHub username.

3. **Authentication**
   
   When prompted for credentials:
   - Username: Your GitHub username
   - Password: Use a **Personal Access Token** (NOT your GitHub password)
   
   To create a Personal Access Token:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name: "QuantumLeap Backup"
   - Select scopes: `repo` (Full control of private repositories)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)
   - Use this token as your password when pushing

### Option 2: Using SSH (Alternative)

1. **Generate SSH Key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   cat ~/.ssh/id_ed25519.pub
   ```

2. **Add SSH Key to GitHub**:
   - Copy the output from the cat command
   - Go to https://github.com/settings/ssh/new
   - Paste your key and save

3. **Connect and Push**:
   ```bash
   cd /home/ubuntu/quantumleap_enterprise
   git remote add origin git@github.com:YOUR_USERNAME/quantumleap-enterprise.git
   git branch -M main
   git push -u origin main
   ```

---

## Future Updates

After the initial push, to backup future changes:

```bash
cd /home/ubuntu/quantumleap_enterprise
git add .
git commit -m "Description of your changes"
git push origin main
```

---

## Important Notes

⚠️ **Security**: The .env file is automatically excluded from Git (it's in .gitignore), so your sensitive environment variables are safe.

⚠️ **Files Excluded** (automatically by .gitignore):
- node_modules
- .next
- .env
- .logs
- Build artifacts

✅ **Files Included** (will be backed up):
- All source code in nextjs_space/
- Components, pages, API routes
- Media assets (images, videos)
- Database schema (prisma/schema.prisma)
- Configuration files
- Public assets

---

## Need Help?

If you encounter any issues, common solutions:

1. **Authentication Failed**: Make sure you're using a Personal Access Token, not your password
2. **Remote Already Exists**: Run `git remote remove origin` first, then add it again
3. **Branch Name**: If you prefer "master" instead of "main", skip the `git branch -M main` command
