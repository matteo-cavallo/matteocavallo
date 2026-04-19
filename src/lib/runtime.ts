/**
 * Shared client-side utilities for Astro hoisted scripts.
 *
 * Import into any <script> that needs media queries or Astro lifecycle hooks.
 * All exports are safe to call at module evaluation time (no SSR execution),
 * because Astro hoisted scripts are bundled as client-only modules.
 */

/** Matches the md breakpoint (768px) — desktop vs mobile mode. */
export const DESKTOP_MQL = window.matchMedia("(min-width: 768px)")

/** Matches the user's reduced-motion OS preference. */
export const REDUCED_MOTION_MQL = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
)

/**
 * Runs `fn` once the DOM is ready — immediately if already parsed,
 * otherwise on DOMContentLoaded.
 */
export function onReady(fn: () => void): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true })
  } else {
    fn()
  }
}

/**
 * Wires setup/teardown to Astro's View Transition lifecycle.
 * Also runs setup once on initial DOMContentLoaded.
 *
 * @param setup   - Called on page ready and after each navigation.
 * @param teardown - Called before each navigation swap.
 */
export function withLifecycle(setup: () => void, teardown: () => void): void {
  onReady(setup)
  document.addEventListener("astro:page-load", setup)
  document.addEventListener("astro:before-swap", teardown)
}
