import { getCollection } from "astro:content"

export async function getPublishedWritings() {
  const writings = await getCollection("writings", ({ data }) => !data.draft)
  return writings.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getFeaturedWritings(max = 5) {
  const writings = await getPublishedWritings()
  const featured = writings.filter((w) => w.data.featured)
  return featured.slice(0, max)
}
