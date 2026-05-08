// @ts-check
import { defineConfig } from "astro/config"
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import mdx from "@astrojs/mdx"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { autolinkConfig } from "./plugins/rehype-autolink-config.mjs"

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, autolinkConfig],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
