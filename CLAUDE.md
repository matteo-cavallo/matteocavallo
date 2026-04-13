# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Production build to ./dist/
pnpm preview      # Preview production build
pnpm format       # Format all files with Prettier
pnpm format:check # Check formatting without writing
```

No test or lint commands beyond Prettier formatting.

## Stack

- **Astro 5** — static site generator, single route (`src/pages/index.astro`)
- **Tailwind CSS v4** — integrated via `@tailwindcss/vite` Vite plugin (not the Astro integration)
- **TypeScript** — strict mode via `astro/tsconfigs/strict`
- **Prettier** — with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`; no semicolons

## Architecture

Single-page personal portfolio. `src/pages/index.astro` is a thin orchestrator that composes layout and section components.

### Data layer

`src/data/site.ts` is the single source of truth for all content and metadata:

- `site` — site title, description, URL, locale, keywords, author info (name, email, location, job title, employer), and social links
- `experience` — array of work history entries
- `talks` — array of articles, talks, and podcast entries

Components and layouts import from `src/data/site.ts`; nothing is hardcoded in markup.

### Layout

`src/layouts/BaseLayout.astro` wraps `<html>`, `<head>` (via `SEO.astro`), and `<body>`. It accepts optional `title` and `description` props to override defaults.

### Components

| Component           | Purpose                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `SEO.astro`         | All `<head>` tags — meta, Open Graph, Twitter, JSON-LD, font loading                                                    |
| `Hero.astro`        | Top section — name, bio, location, CTA link, profile image                                                              |
| `Vision.astro`      | Beliefs section — uses `Section.astro`                                                                                  |
| `About.astro`       | Bio text + experience list + talks/writings list — uses `Section.astro` and `ContentItem.astro`                         |
| `Section.astro`     | Reusable sticky-header + content grid (accepts `title`, `subtitle`, optional `bordered` prop)                           |
| `ContentItem.astro` | Single list card shared by experience and talks (accepts `title`, `subtitle`, `period`, `description`, optional `href`) |
| `Footer.astro`      | Site footer — social links sourced from `site.ts`                                                                       |

### Styles

`src/styles/global.css` contains only:

- Tailwind import
- Font theme tokens (`--font-serif`, `--font-sans`)
- Global `p { font-serif }` rule
- Body text rendering smoothing
