import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const writings = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/writings",
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, ""),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    image: image().optional(),
  }),
})

export const collections = { writings }
