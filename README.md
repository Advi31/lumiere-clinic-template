# Lumière Clinic — Premium Landing Page Template

A modern, premium landing page template for aesthetic clinics, spas, and wellness brands. Built with React 19, TanStack Start, Tailwind CSS v4, and shadcn/ui components. Apple/Stripe-level animations and fully responsive across desktop, tablet, and mobile.

## ✨ Features

- ⚡ React 19 + TanStack Start (SSR ready)
- 🎨 Tailwind CSS v4 with semantic design tokens
- 🧩 shadcn/ui component library (Radix primitives)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🪄 Premium scroll reveals & micro-interactions
- 🔍 SEO-ready (meta tags, OpenGraph, semantic HTML)
- 🅰️ Google Fonts (Fraunces + Inter)
- 🚀 Production-optimized build

## 📦 Project Structure

```
.
├── public/                  # Static assets (favicon, icons)
├── src/
│   ├── assets/              # Images (hero, before/after)
│   ├── components/
│   │   ├── landing/         # Landing page sections
│   │   └── ui/              # shadcn/ui components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities
│   ├── routes/              # File-based routes
│   │   ├── __root.tsx       # Root layout (head, fonts)
│   │   └── index.tsx        # Home page
│   ├── router.tsx
│   └── styles.css           # Design tokens + global styles
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Run Locally

Prerequisites: Node.js 20+ and npm (or pnpm/bun).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173
```

Build for production:

```bash
npm run build
npm run preview
```

## ☁️ Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. Visit [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — no configuration needed.
   - Build command: `npm run build`
   - Output directory: `.output/public` (TanStack Start default)
4. Click **Deploy**. Done.

> Also works on Netlify, Cloudflare Pages, and any Node 20+ host.

## ✏️ Editing Content

### Text content
All copy lives in `src/components/landing/*.tsx`. Each section is a self-contained component:
- `Hero.tsx` — main headline + CTA
- `Stats.tsx`, `Trust.tsx` — social proof
- `Services.tsx`, `WhyChooseUs.tsx`, `Process.tsx` — feature blocks
- `BeforeAfter.tsx`, `Results.tsx` — case studies
- `Pricing.tsx`, `LeadForm.tsx`, `FinalCTA.tsx` — conversion sections
- `Footer.tsx`, `Header.tsx` — chrome

### Images
Replace files in `src/assets/` (keep the same filenames) or update the `import` statements in the components.

### Colors & theme
All colors are CSS variables in `src/styles.css` using `oklch()`. Edit the `:root { ... }` block to rebrand:
```css
:root {
  --primary: oklch(...);
  --gold: oklch(...);
  --background: oklch(...);
  /* ... */
}
```
Never hardcode colors in components — always use semantic Tailwind classes (`bg-primary`, `text-foreground`, etc.).

### Fonts
Loaded via Google Fonts in `src/routes/__root.tsx`. Swap the `<link>` URL and update the `font-family` references in `src/styles.css`.

### SEO / Meta tags
Edit the `head()` block in `src/routes/__root.tsx` (title, description, OpenGraph).

## 📄 License

See `LICENSE.txt`. Personal & commercial use allowed. Redistribution / reselling of the template files is not permitted.
update deploy
