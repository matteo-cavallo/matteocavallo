/// <reference types="astro/client" />

import type Lenis from "lenis"

declare global {
  interface Window {
    lenisInstance?: Lenis
  }
}

export {}
