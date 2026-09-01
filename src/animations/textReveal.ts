import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion, splitChars, splitLines, splitWords } from "./utils";

export function revealWords(el: HTMLElement, opts?: { delay?: number; stagger?: number }) {
  const words = splitWords(el);
  if (prefersReducedMotion()) {
    gsap.set(words, { y: 0, opacity: 1 });
    return;
  }
  gsap.fromTo(
    words,
    { y: "110%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: opts?.stagger ?? 0.035,
      delay: opts?.delay ?? 0,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    }
  );
}

export function revealLines(el: HTMLElement, opts?: { delay?: number }) {
  const lines = splitLines(el);
  if (prefersReducedMotion()) {
    gsap.set(lines, { y: 0 });
    return;
  }
  gsap.fromTo(
    lines,
    { y: "115%" },
    {
      y: "0%",
      duration: 1.05,
      ease: "power3.out",
      stagger: 0.1,
      delay: opts?.delay ?? 0,
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
        once: true,
      },
    }
  );
}

export function revealChars(el: HTMLElement) {
  const chars = splitChars(el);
  if (prefersReducedMotion()) {
    gsap.set(chars, { opacity: 1, y: 0 });
    return;
  }
  gsap.fromTo(
    chars,
    { y: 18, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    }
  );
}

export function fadeUp(root: ParentNode | Document = document) {
  const nodes = root.querySelectorAll<HTMLElement>("[data-fade]");
  nodes.forEach((el) => {
    if (el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    const y = Number(el.dataset.y ?? 60);
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: Number(el.dataset.delay ?? 0),
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      }
    );
  });
}

export function drawRules(root: ParentNode | Document = document) {
  root.querySelectorAll<HTMLElement>("[data-rule]").forEach((el) => {
    if (el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    if (prefersReducedMotion()) {
      gsap.set(el, { scaleX: 1 });
      return;
    }
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      }
    );
  });
}

export function bindTextReveals(root: ParentNode | Document = document) {
  root.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
    if (el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    revealWords(el);
  });
  root.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
    if (el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    revealLines(el);
  });
  root.querySelectorAll<HTMLElement>("[data-chars]").forEach((el) => {
    if (el.dataset.animated === "1") return;
    el.dataset.animated = "1";
    revealChars(el);
  });
  fadeUp(root);
  drawRules(root);
}

export function killPageTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
