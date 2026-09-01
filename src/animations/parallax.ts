import gsap from "gsap";
import { prefersReducedMotion } from "./utils";

export function parallaxImage(root: ParentNode | Document = document) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax ?? 40);
    gsap.fromTo(
      el,
      { y: -speed * 0.2 },
      {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

export function clipReveal(root: ParentNode | Document = document) {
  root.querySelectorAll<HTMLElement>("[data-clip]").forEach((el) => {
    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
      return;
    }
    gsap.fromTo(
      el,
      { clipPath: "inset(12% 12% 12% 12%)", scale: 1.08 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });
}

export function floatEls(root: ParentNode | Document = document) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-float]").forEach((el, i) => {
    gsap.to(el, {
      y: i % 2 === 0 ? -14 : 12,
      rotate: i % 2 === 0 ? 1.4 : -1.2,
      duration: 3.6 + (i % 3) * 0.4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  });
}
