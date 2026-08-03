import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText, DrawSVGPlugin)

const SESSION_KEY = "curtain-shown"

// astro:page-load fires on initial load AND after every client-side navigation
document.addEventListener("astro:page-load", () => {
  const curtain = document.getElementById("curtain")

  if (!curtain) {
    // not on homepage — nothing to do
    return
  }

  if (sessionStorage.getItem(SESSION_KEY)) {
    // already played — hide immediately (covers both hard reload and client-side nav)
    curtain.style.display = "none"
    return
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // honor reduced motion — skip the reveal entirely
    curtain.style.display = "none"
    sessionStorage.setItem(SESSION_KEY, "1")
    return
  }

  const split = SplitText.create("#curtain-text", { type: "words" })
  // #hero-text only exists on the homepage; the curtain runs on any first-visit page
  const heroEl = document.getElementById("hero-text")
  const splitHero = heroEl ? SplitText.create(heroEl, { type: "words" }) : null

  // Synchronously set "from" states before any paint — prevents flash of
  // unstyled curtain content between DOM render and when GSAP runs.
  gsap.set(split.words, { opacity: 0, y: 12 })
  gsap.set("#curtain-text", { opacity: 1 })
  gsap.set("#curtain path", { drawSVG: "0%" })
  gsap.set("#curtain svg", { opacity: 1 })

  document.documentElement.style.overflow = "hidden"

  const tl = gsap
    .timeline({
      delay: 0.1,
      onComplete: () => {
        document.documentElement.style.overflow = ""
        sessionStorage.setItem(SESSION_KEY, "1")
      },
    })
    // 1. curtain text words fade in
    .to(split.words, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: "power3.out",
    })
    // 2. signature draws (after text completes)
    .to("#curtain path", {
      drawSVG: "100%",
      duration: 0.5,
      stagger: 0.2,
      ease: "expo.out",
    })
    // 3. curtain slides up (starts just after the signature finishes drawing)
    .to(curtain, { y: "-100%", duration: 0.85, ease: "power2.inOut" }, "-=0.1")

  // 4. hero text fades in (overlapping with curtain exit) — homepage only
  if (splitHero) {
    tl.from(
      splitHero.words,
      { opacity: 0, y: 12, duration: 0.75, stagger: 0.055, ease: "power3.out" },
      "-=0.45",
    )
  }
})
