# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting without writing
```

No test suite is configured.

## Architecture

Personal portfolio site built with **Astro 5**, **Tailwind CSS 4**, **GSAP**, and **Lenis**.

### Key Files

- `src/data/site.ts` — All content data (bio, social links)
- `src/lib/motion.ts` — Centralized animation constants (durations, easings, stagger values)
- `src/lib/runtime.ts` — Shared client-side utilities: media queries and Astro lifecycle helpers
- `src/env.d.ts` — Ambient types (`astro/client` + `Window.lenisInstance`)
- `src/styles/global.css` — Tailwind theme, custom CSS vars (`--font-serif`, `--font-sans`, `--text-nav`)
- `src/layouts/Layout.astro` — Root template; imports SEO, SmoothScroll, Curtain, Reveal
- `src/pages/index.astro` — Single page entry; imports Home component

### Component Hierarchy

```
Layout.astro
└── Home.astro
    ├── Curtain.astro       (full-screen intro overlay)
    ├── Hero.astro
    ├── Vision.astro
    ├── About.astro
    ├── SectionNav.astro    (desktop-only 3D wheel nav)
    ├── Footer.astro
    └── Signature.astro
```

### Animation System

Entry animation is a coordinated sequence:

1. **Curtain** waits for `document.fonts.ready`, then reveals a quote, then exits
2. **Hero** text reveals with word-level stagger on `curtain:exit-start`
3. **Chrome** (header/footer) fades in synchronized with hero

Cross-component coordination uses window custom events:

- `curtain:exit-start` — curtain begins sliding away (Home.astro listens to start hero entry)
- `curtain:done` — curtain animation complete (fallback trigger for Home's entry)

All timing lives in `motion.ts` — edit that file to tune rhythm globally.

### Scroll & Navigation

- **Desktop**: Lenis smooth scroll on a fixed viewport container; 3D perspective wheel nav (`SectionNav`)
- **Mobile**: Native scroll; linear nav with keyboard hints (keys 1–3)
- **Breakpoint**: `md` (768px) separates the two behaviors
- `window.lenisInstance` is set globally after Lenis initializes

### Responsive Pattern

Most components handle both modes in a single file using Tailwind's `md:` prefix and inline JS checks (`window.innerWidth`). `SectionNav` and proximity/magnetic effects are desktop-only.

### Accessibility

Respects `prefers-reduced-motion` — check existing components for the pattern before adding new animations. Curtain skips on repeat visits via `sessionStorage`.
