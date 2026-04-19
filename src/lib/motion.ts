export const MOTION = {
  ease: "power3.out",
  short: 0.6,
  medium: 0.65,
  scrollTo: 1.2,
  lenis: 1.1,
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
}

export type MotionConfig = typeof MOTION
