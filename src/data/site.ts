export const site = {
  title: "Matteo Cavallo",
  description:
    "Web engineer crafting meaningful digital experiences with care, clarity and intention. Building interfaces for purpose-driven people who want to leave things better than they found them.",
  url: "https://matteocavallo.com",
  locale: "en_US",
  keywords:
    "frontend engineer, web engineer, UI developer, React, React Native, design systems, digital experiences, Paris, France",
  tagline: "Made slowly in Paris.",
  author: {
    name: "Matteo Cavallo",
    email: "mc@matteocavallo.com",
    location: "Paris, France",
    address: {
      locality: "Paris",
      country: "France",
    },
    jobTitle: "Senior Web Engineer",
    employer: "Qonto",
  },
  social: {
    medium: "https://medium.com/@m.cavallo1011",
    github: "https://github.com/matteocavallo",
    instagram: "https://www.instagram.com/mattecavallo/",
    linkedin: "https://www.linkedin.com/in/cavallomatteo/",
    arena: "https://www.are.na/matteo-cavallo/channels",
  },
}

export const principles = [
  {
    title: "Good work can change things.",
    description: "For people, for communities, for the world around us.",
  },
  {
    title: "Clarity matters.",
    description: "I believe in quiet design, in beauty as a form of truth.",
  },
  {
    title: "Purpose over performance.",
    description:
      "What we make should leave the world &mdash; even slightly &mdash; better.",
  },
  {
    title: "People first.",
    description: "The quiet power of collaboration, empathy, and care.",
  },
]

export const experience = [
  {
    role: "Senior Web Engineer",
    company: "Qonto",
    period: "2024—Present",
    description:
      "Building at the scale of a fintech platform used by hundreds of thousands of businesses. Leading a large migration from Ember to React, and building developer tooling that makes the work lighter for the whole team.",
  },
  {
    role: "Mobile Engineer",
    company: "Soldo",
    period: "2020—2024",
    description:
      "Four years building a React Native design system from its first component to a mature, team-wide foundation. Learned that good systems are as much about trust and communication as they are about code.",
  },
]

export type Principle = (typeof principles)[number]
export type Experience = (typeof experience)[number]

export const work = [
  {
    title: "Building an Open Source React UI Library",
    href: "https://medium.com/@m.cavallo1011/list/building-an-open-source-react-ui-library-8d39ebd5c402",
    type: "Article Series",
    year: "2024",
    description:
      "A deep dive into creating accessible, thoughtfully designed components from scratch. I wanted to understand every layer — from TypeScript patterns to API design choices — and share what I learned.",
  },
  {
    title: "Soldo React Native UI Kit",
    href: "https://medium.com/@m.cavallo1011/list/soldo-react-native-ui-kit-3a290da16f10",
    type: "Article Series",
    year: "2024",
    description:
      "Reflecting on four years of building and maintaining a design system for mobile. The technical decisions, the tradeoffs, and what I'd do differently knowing what I know now.",
  },
  {
    title: "Accademia dei Pugni",
    href: "https://open.spotify.com/show/2kzDycMHhUhgs8WMVsmLsX?si=27ee50885f4241de",
    type: "Podcast",
    year: "2021",
    description:
      "A weekly podcast I co-created during university with Lorenzo. We talked about work, learning, and life from a student's perspective. Ten episodes of conversations, ideas, and not taking ourselves too seriously.",
    image: "/work/accademia-dei-pugni.jpeg",
    imageAlt: "Accademia dei Pugni podcast cover",
  },
]

export type Work = {
  title: string
  href: string
  type: string
  year: string
  description: string
  image?: string
  imageAlt?: string
}
