# API Specification

This document defines the RESTful API endpoints for the QuantumLeap AI backend.

---

### Lead Capture

#### **POST /api/leads**
- **Description:** A single, robust endpoint to capture lead data from all interactive tools and forms on the site.
- **Request Body:**
  ```json
  {
    "email": "string",
    "sourceForm": "string", // e.g., "Time Trap Calculator", "Security Roadmap"
    "formData": {
      // JSON object containing the user's specific inputs
      "adminHours": "number",
      "hourlyValue": "number",
      // ... other fields as relevant
    },
    "calculatedResults": {
      // JSON object containing the results shown to the user
      "totalLoss": "string",
      "annualTimeCost": "string",
      // ... other results as relevant
    }
  }
Success Response:

Code: 201 Created

Body:

JSON

{
  "message": "Lead captured successfully.",
  "leadId": "string"
}
Error Response:

Code: 400 Bad Request

Body:

JSON

{
  "message": "Invalid data provided.",
  "errors": [
    { "field": "email", "message": "A valid email is required." }
  ]
}

---
### **File 4: `.eslintrc.js`**

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Must be the last to override other formatting rules
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add custom rules here if needed
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with Next.js/React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};