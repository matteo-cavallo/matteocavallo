import { defineConfig } from "astro/config"
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import mdx from "@astrojs/mdx"
import icon from "astro-icon"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { autolinkConfig } from "./plugins/rehype-autolink-config"

export default defineConfig({
  integrations: [icon(), mdx()],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, autolinkConfig],
    ],
  },
})
