import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import icon from "astro-icon"
import react from "@astrojs/react"
import keystatic from "@keystatic/astro"

export default defineConfig({
  integrations: [icon(), mdx(), react(), keystatic()],
})
