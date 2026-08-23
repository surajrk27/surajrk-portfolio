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
