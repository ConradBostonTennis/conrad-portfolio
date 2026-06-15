# Conrad H. Williams — Portfolio Site

A React + Vite portfolio site built for the Senior Mechanical Engineer job
search. Design direction: technical drawing / spec-sheet aesthetic (title
blocks, mono data labels, hairline rules) on a clean paper background.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

Easiest path — Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts (framework: Vite)
vercel --prod # promote to production
```

Or connect this folder as a GitHub repo and import it in the Vercel
dashboard (vercel.com/new) — Vercel auto-detects Vite, no config needed
beyond the included `vercel.json` (handles client-side routing if you add
more pages later).

## Before deploying — swap in real images

Replace the placeholder files in `public/images/` with real assets:

- hero-sequoia-2550px.jpg
- workstation-wide.jpg
- workstation-employee-hardhat.jpg
- workstation-closeup.jpg
- cardinal-arm-action.jpg
- valve_render.png

Source Amazon images from aboutamazon.com press resources and keep the
"Image courtesy of Amazon" credit lines as-is (in `src/App.jsx`).

## Structure

- `src/App.jsx` — all page content/sections
- `src/index.css` — design tokens, layout, styling
- `public/images/` — image assets (currently placeholders)

## Open items from the content brief

- Empirical Innovation "Project C" — slot open for any additional project
- Custom domain (conradwilliams.com / empiricalinnovation.com /
  conradhwilliams.com) — can be added in Vercel project settings later
