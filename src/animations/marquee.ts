import gsap from "gsap";
import { prefersReducedMotion } from "./utils";

export function marquee(root: ParentNode | Document = document) {
  if (prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-marquee]").forEach((el) => {
    const track = el.querySelector<HTMLElement>(".marquee__track");
    if (!track) return;
    const dir = el.dataset.dir === "right" ? 1 : -1;
    const dur = Number(el.dataset.speed ?? 40);
    const tween = gsap.to(track, {
      xPercent: dir * 50,
      duration: dur,
      ease: "none",
      repeat: -1,
    });
    el.addEventListener("pointerenter", () => tween.timeScale(0.35));
    el.addEventListener("pointerleave", () => tween.timeScale(1));
  });
}

export function counterAnimation(root: ParentNode | Document = document) {
  if (prefersReducedMotion()) {
    root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      el.textContent = el.dataset.count ?? "0";
    });
    return;
  }
  root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count ?? 0);
    const obj = { val: 0 };
    gsap.to(obj, {
      val: end,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toString();
      },
    });
  });
}
