![Dmytro Platov — Senior Frontend Engineer](public/banner.svg)

# Developer Portfolio

Personal portfolio of **Dmytro Platov** — Senior Frontend Engineer (React / TypeScript). A single-page, responsive, animated site.

**Live:** https://platov-portfolio.vercel.app

> Want a real screenshot at the top instead of the brand banner? Drop a PNG into `public/` and swap the image link above.

## Tech stack

- **Framework:** Next.js 13 (Pages Router) · React 18 · TypeScript
- **Styling:** TailwindCSS · custom scrollbar
- **Motion:** Framer Motion
- **Forms:** react-hook-form (contact form posts to a Telegram bot)
- **UI bits:** Swiper (projects carousel), react-social-icons, react-simple-typewriter, Heroicons
- **Hosting:** Vercel

## Features

- Typed, hardcoded content (projects, experience, skills) — no CMS, no runtime fetch
- Animated section transitions and a hero typewriter
- Keyboard-accessible navigation, skills and project carousel
- Responsive, mobile-first layout
- SEO ready: Open Graph + Twitter meta, `robots.txt`, `sitemap.xml`
- Working contact form

## Tech & decisions

Why this stack for a small, content-light personal site:

- **Next.js 13 (Pages Router) + Vercel** — statically rendered HTML out of the box gives fast first paint and clean SEO (real `<title>`/meta in the markup, not injected client-side), and Vercel deploys straight from Git with zero config. The Pages Router is intentional: the App Router adds complexity (server components, new data-fetching model) that a single static page does not need.
- **TypeScript** — the content lives in typed data files (`*_data.ts` against interfaces in `typings.d.ts`). Typing the data catches shape mismatches at build time and documents the schema for each section.
- **Content as typed data, not a CMS** — for a single-author portfolio a CMS is overhead: another service, runtime fetches, and a failure mode. Hardcoded typed data ships as static HTML, stays version-controlled, and is trivial to edit in a PR.
- **TailwindCSS** — utility classes keep styling co-located with markup and enforce a consistent scale (spacing, colour, type) without a separate stylesheet to drift out of sync.
- **Framer Motion** — declarative `initial`/`whileInView` animations are far easier to reason about than imperative timelines, and `viewport={{ once: true }}` keeps scroll animations cheap.
- **Swiper** — a battle-tested, touch- and keyboard-accessible carousel, so the projects section works on mobile without custom gesture code.
- **react-hook-form** — uncontrolled inputs mean fewer re-renders and a tiny, dependency-light contact form.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

The contact form posts to a Telegram bot. To enable it locally, create `.env.local`:

```
NEXT_PUBLIC_TELEGRAM_TOKEN=your-bot-token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-chat-id
```

The rest of the site renders without any environment variables.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Lint |
