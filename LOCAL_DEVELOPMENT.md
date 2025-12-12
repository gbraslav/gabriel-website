# Local Development Guide

This project consists of two separate applications:
1. **Main website** (Gabriel's website) - Vite + React
2. **Stephanie website** - Create React App

## Quick Start

### Option 1: Run Both Separately (Simplest)

1. **Start the main website:**
   ```bash
   # From the root directory
   pnpm install  # if you haven't already
   pnpm dev
   ```
   Main site will be available at: http://localhost:5173

2. **Start the stephanie-website (in a separate terminal):**
   ```bash
   # Navigate to stephanie-website directory
   cd stephanie/stephanie-website
   npm install  # if you haven't already
   npm start
   ```
   Stephanie website will be available at: http://localhost:3000

### Option 2: Access Stephanie at `/stephanie` (Like Vercel)

To access the stephanie-website at `http://localhost:5173/stephanie` (matching Vercel behavior):

1. **Build the stephanie-website first** (if not already built):
   ```bash
   cd stephanie/stephanie-website
   npm install
   npm run build
   ```
   This creates the production build that will be served.

2. **Start the main website:**
   ```bash
   # From the root directory
   pnpm dev
   ```
   Main site will be at http://localhost:5173

3. **Access stephanie-website:**
   - Go to http://localhost:5173/stephanie
   - The built stephanie-website will be served directly (no dev server needed)

**Note:** This approach serves the **built** stephanie-website files, not the dev server. This matches how Vercel serves it in production. If you make changes to stephanie-website, you'll need to rebuild it (`npm run build`) to see the changes.

## Troubleshooting

- **Proxy not working?** Make sure:
  1. Both servers are running (main site on 5173, stephanie on 3000)
  2. You're accessing `http://localhost:5173/stephanie` (not just `/stephanie`)
  3. Check the browser console and terminal for errors
  
- If you get port conflicts, you can change the stephanie-website port by setting `PORT=3001` before running `npm start`, then update `vite.config.js` proxy target to `http://localhost:3001`

- **For best dev experience:** Access stephanie-website directly at `http://localhost:3000` instead of using the proxy. The proxy setup is mainly for production-like testing.

- The stephanie-website uses `homepage: "/stephanie"` in package.json, which is important for production builds but doesn't fully work in dev mode

