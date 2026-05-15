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

  const split = SplitText.create("#curtain-text", { type: "words" })
  const splitHero = SplitText.create("#hero-text", { type: "words" })

  curtain.style.display = "flex"
  document.documentElement.style.overflow = "hidden"

  gsap
    .timeline({
      delay: 0.1,
      onComplete: () => {
        document.documentElement.style.overflow = ""
        sessionStorage.setItem(SESSION_KEY, "1")
      },
    })
    // 1. curtain text words fade in
    .from(split.words, {
      opacity: 0,
      y: 12,
      duration: 0.75,
      stagger: 0.08,
      ease: "power3.out",
    })
    // 2. signature draws (after text completes)
    .from("path", {
      drawSVG: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "expo.out",
    })
    // 3. curtain slides up
    .to(curtain, { y: "-100%", duration: 0.85, ease: "power2.inOut" })
    // 4. hero text fades in (overlapping with curtain exit)
    .from(
      splitHero.words,
      { opacity: 0, y: 12, duration: 0.75, stagger: 0.055, ease: "power3.out" },
      "-=0.45",
    )
})
