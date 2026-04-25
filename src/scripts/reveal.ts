import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

gsap.from("[data-reveal]", {
  scrollTrigger: "[data-reveal]",
  y: 20,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  ease: "power2.out",
})
