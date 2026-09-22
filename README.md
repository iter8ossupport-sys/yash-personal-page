# Yash Tyagi Portfolio

React + Vite portfolio site configured for local development and Vercel static deployment.

## Local Development

Prerequisites: Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Production Check

```bash
npm run lint
npm run build
npm run preview
```

The production preview runs at `http://localhost:4173`.

## Vercel Deployment

This repo includes `vercel.json` with the expected Vite settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite: all routes serve `index.html`

No environment variables are required for the current portfolio build.
