# Project Architecture

## 1. High-Level Overview
This document outlines the technical architecture for the QuantumLeap AI website. The project is a modern, interactive website designed to segment users and showcase a range of AI-powered business services.

## 2. Technology Stack
- **Frontend:** React (using Next.js for Server-Side Rendering) & TypeScript
- **Backend:** Node.js (using Express.js) & TypeScript
- **Database:** MongoDB (using Mongoose ODM)
- **Animation:** Framer Motion, GSAP, Lottie
- **Styling:** Styled Components or Tailwind CSS (Developer's choice, to be consistent)

## 3. Frontend Architecture (React/TypeScript)
The frontend will be built using Next.js to ensure optimal SEO performance and a fast initial page load.

- **Directory Structure:**
/src
├── /app
│   ├── /smb
│   │   └── page.tsx      # SMB Homepage
│   ├── layout.tsx
│   └── page.tsx          # Main Landing Page
├── /components
│   ├── /ui               # Reusable UI (Button, Card, Input)
│   ├── /layout           # (Navbar, Footer, PageWrapper)
│   └── /features         # Complex components (Calculators, Hero)
├── /hooks                # Custom React hooks
└── /lib                  # Helper functions, utils

- **State Management:** Use React's built-in `useState` and `useContext` for local and shared component state.
- **Animation Strategy:**
  - **Framer Motion:** For UI micro-interactions, component enter/exit animations, and page transitions.
  - **GSAP:** For complex, timeline-based programmatic animations like the "Quantum Tunnel".
  - **Lottie:** For vector-based narrative animations (Hero sections).

## 4. Backend Architecture (NodeJS/TypeScript)
The backend will serve as a RESTful API primarily for lead capture.

- **Directory Structure:**
/server
├── /src
│   ├── /api
│   │   ├── /routes       # API routes (e.g., leads.route.ts)
│   │   ├── /controllers  # Business logic (e.g., leads.controller.ts)
│   │   └── /models       # Mongoose schemas (e.g., Lead.model.ts)
│   ├── /config           # DB connection, env variables
│   └── server.ts         # Main server entry point


## 5. Code Style & Quality
- **ESLint & Prettier:** The project MUST use ESLint and Prettier to enforce a consistent code style and prevent common bugs. Config files (`.eslintrc.js`, `.prettierrc`) are provided.
