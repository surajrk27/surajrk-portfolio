# Suraj Khandbale — Portfolio

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Folder structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, SEO metadata, fonts, JSON-LD, ThemeProvider
│   ├── page.tsx         # Assembles all sections
│   ├── globals.css      # Design tokens (CSS variables), a11y defaults
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots.txt
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── sections/         # Page-level sections (Hero, Projects, Experience, Skills, Contact, Nav)
│   └── ui/                # Reusable primitives (ProjectCard, SkeletonCard, ThemeToggle, GridOverlayToggle)
└── lib/
    ├── data.ts            # All resume content, single source of truth
    └── utils.ts           # cn() class merge helper
```

## Talking points for an interview

- **Skeleton loading**: `Projects` simulates a network fetch with `useState`/`useEffect`
  and renders `SkeletonCard` until data resolves — swap the `setTimeout` for a real
  fetch/TanStack Query call with zero other changes, since the loading contract
  (`data === null`) stays the same.
- **Theming**: `next-themes` + a `class` strategy on `<html>`, tokens defined once as
  CSS variables in `globals.css` and consumed through Tailwind's `rgb(var(--x))`
  pattern — so every component just uses `bg-surface`/`text-ink`/etc. and gets both
  themes for free.
- **Accessibility**: skip link, semantic landmarks (`header`, `main`, `section`),
  visible focus rings via `:focus-visible`, `aria-live`/`aria-busy` on the loading
  grid, `prefers-reduced-motion` respected globally.
- **Performance**: `next/font` self-hosts and subsets Google Fonts (no render-blocking
  request), no client JS beyond what's interactive, animations are GPU-friendly
  (`transform`/`opacity` only).
- **SEO**: per-page `metadata` export, Open Graph/Twitter tags, `Person` JSON-LD,
  generated `sitemap.xml` and `robots.txt`.
- **Signature interaction**: the grid-overlay toggle in the nav drops a 12-column
  baseline grid over the page — a literal callback to checking Figma/Zeplin handoff
  against the built UI.

## Before deploying

- Replace `https://surajkhandbale.dev` in `layout.tsx`, `sitemap.ts`, and `robots.ts`
  with your real domain.
- Add a real Open Graph image and favicon under `public/`.
- Update `profile.linkedin` in `src/lib/data.ts` with your actual LinkedIn URL.
