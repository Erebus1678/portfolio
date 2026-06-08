# Developer Portfolio

Personal portfolio site — single-page, responsive, content-managed.

**Live:** https://platov-portfolio.vercel.app

## Tech stack

- **Framework:** Next.js 13 · React 18 · TypeScript
- **Styling:** TailwindCSS · custom scrollbar
- **Motion:** Framer Motion
- **Content:** Sanity CMS (`next-sanity`, Portable Text, image URL builder)
- **Forms:** react-hook-form
- **UI bits:** Swiper, react-social-icons, react-simple-typewriter, Heroicons
- **Data:** Axios (+ axios-retry)

## Features

- CMS-driven content — projects, experience, skills and contacts editable in Sanity Studio without redeploying
- Animated section transitions and hero typewriter
- Responsive layout, mobile-first
- Working contact form
- Deployed on Vercel

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Create `.env.local` with the Sanity project variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Lint |
