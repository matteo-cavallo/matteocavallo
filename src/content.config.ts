import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const writings = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: "./src/content/writings",
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, ""),
  }),
  schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional().default(false),
      featured: z.boolean().optional().default(false),
      image: z.string().optional(),
      imageCaption: z.string().optional(),
    }),
})

export const collections = { writings }
