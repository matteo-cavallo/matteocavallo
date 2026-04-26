import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText, DrawSVGPlugin)

const SESSION_KEY = "curtain-shown"

if (!sessionStorage.getItem(SESSION_KEY)) {
  const curtain = document.getElementById("curtain")!
  const split = SplitText.create("#curtain-text", { type: "words" })
  const splitHero = SplitText.create("#hero-text", { type: "words" })

  document.documentElement.style.overflow = "hidden"

  gsap
    .timeline({
      delay: 0.6,
      onComplete: () => {
        document.documentElement.style.overflow = ""
        sessionStorage.setItem(SESSION_KEY, "1")
      },
    })
    .from(split.words, {
      opacity: 0,
      y: 15,
      duration: 1.5,
      stagger: 0.1,
      ease: "power3.out",
    })
    .from(
      "path",
      { drawSVG: 0, duration: 0.6, stagger: 0.3, ease: "expo.out" },
      "<",
    )
    .to(curtain, { y: "-100%", duration: 1.2, ease: "power2.in" })
    .from(
      splitHero.words,
      { opacity: 0, y: 15, duration: 1.5, stagger: 0.07, ease: "power3.out" },
      "-=0.5",
    )
    .from("header div>*", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "expo.out",
      stagger: 0.2,
    })
}
