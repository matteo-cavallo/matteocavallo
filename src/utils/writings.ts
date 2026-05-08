import { getCollection } from "astro:content"

export async function getPublishedWritings() {
  const writings = await getCollection("writings", ({ data }) => !data.draft)
  return writings.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}
