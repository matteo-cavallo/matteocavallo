# matteocavallo.com

Personal site — hand-crafted with [Astro](https://astro.build), plain CSS design
tokens, and MDX content. Made slowly in Paris.

## Commands

| Command        | Action                                   |
| :------------- | :--------------------------------------- |
| `pnpm dev`     | Start the dev server at `localhost:4321` |
| `pnpm build`   | Build the production site to `./dist/`   |
| `pnpm preview` | Preview the build locally                |
| `pnpm check`   | Type-check with `astro check`            |
| `pnpm format`  | Format with Prettier                     |

## Structure

- `src/content/writings/` — articles (`.md`/`.mdx`), schema in `src/content.config.ts`
- `src/data/site.ts` — central site metadata, experience, and work data
- `src/styles/global.css` — design tokens, resets, prose styles, view-transition keyframes
- `src/components/` — scoped-style Astro components
- `src/scripts/intro.ts` — GSAP intro curtain animation
