import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const elements = document.querySelectorAll("[data-reveal]")

elements.forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
    },
    y: 20,
    opacity: 0,
    duration: 2,
    ease: "expo.out",
  })
})
