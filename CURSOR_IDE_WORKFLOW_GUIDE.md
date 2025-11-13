# Cursor IDE Workflow Guide - QuantumLeap AI Website

## 📋 Overview

This guide documents the key issues encountered and resolved while setting up the project, plus instructions for working effectively in Cursor IDE.

## 🎯 Project Structure

**Important**: The actual website implementation is in `nextjs_space/`, NOT in `src/app/`.

- **Root `src/app/`**: Default Next.js template (not used)
- **`nextjs_space/`**: Actual production website implementation
- **Working Directory**: Always work in `nextjs_space/` for development

## 🔧 Key Configurations Established

### 1. ESLint Configuration

**File**: `nextjs_space/.eslintrc.json`

```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
  }
}
```

**Why**: Narrowed the `react/no-unescaped-entities` rule to only forbid `>` and `}` to avoid excessive warnings on apostrophes and quotes in content.

### 2. Dependency Installation

**Always use**: `npm install --legacy-peer-deps`

**Why**: Resolves peer dependency conflicts between packages (e.g., `react-hook-form` and `@hookform/resolvers`).

### 3. Prisma Setup

**Post-install**: Prisma client auto-generates via `postinstall` script in `package.json`.

**Manual generation**: `npx prisma generate` (if needed)

### 4. Git Hooks (Husky + lint-staged)

**Pre-commit**: Runs ESLint + Prettier on staged files automatically.

**Pre-push**: Runs `lint`, `typecheck`, and `build` from `nextjs_space/` before allowing push.

## 🚀 Daily Workflow in Cursor IDE

### Initial Setup (First Time)

```bash
# 1. Navigate to the project directory
cd "C:\Users\email\OneDrive\Desktop\Website Cursor"

# 2. Ensure you're on the correct branch
git checkout semi-final

# 3. Navigate to the actual project
cd nextjs_space

# 4. Install dependencies
npm install --legacy-peer-deps

# 5. Generate Prisma client (if needed)
npx prisma generate

# 6. Verify setup
npm run lint -- --no-cache
npm run typecheck
npm run build
```

### Starting Development Server

```bash
# From nextjs_space directory
cd nextjs_space
npm run dev
```

**Note**: The dev server runs from `nextjs_space/`, not from the root. The website will be available at `http://localhost:3000`.

### Before Committing Changes

The pre-commit hook will automatically:
1. Run ESLint on staged files
2. Run Prettier to format code
3. Fix auto-fixable issues

**Manual check** (optional):
```bash
cd nextjs_space
npm run lint -- --no-cache
npm run typecheck
```

### Before Pushing

The pre-push hook will automatically:
1. Run `npm run lint`
2. Run `npm run typecheck`
3. Run `npm run build`

**Manual check** (optional):
```bash
cd nextjs_space
npm run lint -- --no-cache --max-warnings=0
npm run typecheck
npm run build
```

## 🐛 Common Issues & Solutions

### Issue 1: "next: not found" Error

**Problem**: Running `npm run lint` fails with "next: not found"

**Solution**:
```bash
cd nextjs_space
npm install --legacy-peer-deps
npx prisma generate
```

### Issue 2: ESLint Interactive Prompt

**Problem**: ESLint asks for configuration interactively

**Solution**: The `.eslintrc.json` file should already exist. If not, create it with:
```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
  }
}
```

### Issue 3: Peer Dependency Conflicts

**Problem**: `npm install` fails with ERESOLVE errors

**Solution**: Always use:
```bash
npm install --legacy-peer-deps
```

### Issue 4: Dynamic Server Usage Warnings

**Problem**: Build shows warnings about dynamic server usage for admin API routes

**Solution**: Admin API routes should have `export const dynamic = 'force-dynamic'` at the top. This is already implemented for all admin routes.

### Issue 5: React Hook Dependency Warnings

**Problem**: ESLint warns about missing dependencies in `useEffect` or `useCallback`

**Solution**: Add missing dependencies to the dependency array, or use `useCallback` to memoize functions used in effects.

**Example** (from advisory-board-section.tsx):
```typescript
const handleNext = React.useCallback(() => {
  // ... function body
}, [totalPages]); // Include all dependencies

useEffect(() => {
  // ... effect that uses handleNext
}, [handleNext]); // Include handleNext in dependencies
```

## 📝 Available Scripts

From `nextjs_space/` directory:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint -- --no-cache` - Run ESLint without cache
- `npm run lint -- --max-warnings=0` - Fail on warnings
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🔍 CI/CD Pipeline

**GitHub Actions Workflow**: `.github/workflows/quality.yml`

**Triggers**: 
- Push to `semi-final` branch
- Pull requests

**Steps**:
1. Checkout code
2. Setup Node.js 18 with npm cache
3. Install dependencies (`npm ci --legacy-peer-deps`)
4. Generate Prisma client
5. Run lint (with `--max-warnings=0`)
6. Run typecheck
7. Run build

**Status Badge**: See README.md for the Quality badge.

## ⚠️ Important Notes

1. **Always work in `nextjs_space/`**: The root `src/app/` is just the default template.

2. **Use `--legacy-peer-deps`**: Always install dependencies with this flag.

3. **Git Hooks are Active**: Pre-commit and pre-push hooks will run automatically. Don't skip them.

4. **Node Version**: Project requires Node.js >=18 <21. Current CI uses Node 18.

5. **Admin API Routes**: All admin routes under `app/api/admin/**/route.ts` should have `export const dynamic = 'force-dynamic'` to silence build warnings.

6. **ESLint Rule**: The `react/no-unescaped-entities` rule is narrowed to only forbid `>` and `}` to avoid excessive warnings on content.

## 🎯 Quick Reference Commands

```bash
# Navigate to project
cd "C:\Users\email\OneDrive\Desktop\Website Cursor\nextjs_space"

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Run quality checks
npm run lint -- --no-cache
npm run typecheck
npm run build

# Format code
npm run format

# Generate Prisma client
npx prisma generate
```

## 📚 Additional Resources

- **ESLint Config**: `nextjs_space/.eslintrc.json`
- **ESLint Ignore**: `nextjs_space/.eslintignore`
- **CI Workflow**: `.github/workflows/quality.yml`
- **Package Scripts**: `nextjs_space/package.json`

---

**Last Updated**: Based on chat history resolving ESLint, dependency, CI/CD, and git hooks setup issues.

