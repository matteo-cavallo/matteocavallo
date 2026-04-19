export const MOTION = {
  ease: "power3.out",
  short: 0.6,
  medium: 0.65,
  scrollTo: 1.2,
  lenis: 1.1,
  /**
   * Duration of the SVG signature draw animation in seconds.
   * Equals: (signaturePathCount - 1) * stagger + drawDuration
   * where stagger = 0.25s, drawDuration = 0.5s, pathCount = 6.
   * Shared between Curtain.astro (timeline reservation) and
   * Signature.astro (playing-guard total duration).
   * If the path count in Signature.astro changes, update this value.
   */
  signatureDraw: 1.75,
  /**
   * Default ease for the entry sequence and one-shot UI fades.
   * Shared between Home.astro (timeline defaults) and KeyboardHint.astro.
   */
  entryEase: "sine.out",
  nav: {
    lineActive: 26,
    lineInactive: 10,
    labelShiftX: -4,
    labelTrackingActive: "0.32em",
    labelTrackingInactive: "0.28em",
    wheelAngle: 22,
    wheelRadius: 130,
    wheelPerspective: 400,
    wheelDuration: 1.2,
    dockRadius: 400,
    dockScale: 0.98,
    dockPull: 23,
    dockDuration: 0.45,
    flattenThreshold: 160,
    flattenDuration: 0.5,
    flatSpacing: 40,
  },
} as const

export type MotionConfig = typeof MOTION
