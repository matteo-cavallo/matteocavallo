import type { Options } from "rehype-autolink-headings"

export const autolinkConfig: Options = {
  behavior: "append",
  properties: {
    className: ["heading-anchor"],
    "aria-hidden": "true",
    tabIndex: -1,
  },
  content: { type: "text", value: "#" },
}
