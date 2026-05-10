import { config, fields, collection } from "@keystatic/core"

export default config({
  storage: { kind: "local" },

  collections: {
    writings: collection({
      label: "Writings",
      slugField: "title",
      path: "src/content/writings/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        date: fields.date({ label: "Date" }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        image: fields.text({
          label: "Cover Image",
          description: "Filename from src/content/writings/assets/ (e.g. photo.jpeg)",
        }),
        imageCaption: fields.text({ label: "Image Caption" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
})
