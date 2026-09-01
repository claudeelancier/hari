import gsap from "gsap";
import { isTouchDevice, prefersReducedMotion } from "./utils";

export function processScroll(root: ParentNode | Document = document) {
  const section = root.querySelector<HTMLElement>("[data-process]");
  if (!section) return;
  const steps = Array.from(section.querySelectorAll<HTMLElement>("[data-step]"));
  const num = section.querySelector<HTMLElement>(".process__num");
  const progress = section.querySelector<HTMLElement>(".process__bar-fill");
  if (!steps.length) return;

  if (prefersReducedMotion() || isTouchDevice() || window.innerWidth < 900) {
    steps.forEach((s, i) => s.classList.toggle("is-active", i === 0));
    if (num) num.textContent = steps[0].dataset.step ?? "01";
    return;
  }

  const pin = section.querySelector<HTMLElement>(".process__sticky");

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${steps.length * 90}%`,
      pin: pin ?? section,
      scrub: 0.65,
      anticipatePin: 1,
    },
  });

  steps.forEach((step, i) => {
    st.to(
      {},
      {
        duration: 1,
        onUpdate: function () {},
        onStart: () => {
          steps.forEach((s) => s.classList.remove("is-active"));
          step.classList.add("is-active");
          if (num) num.textContent = step.dataset.step ?? "";
          if (progress) progress.style.transform = `scaleX(${(i + 1) / steps.length})`;
          section.dataset.active = String(i);
        },
      },
      i
    );
  });
}

export function footerReveal(root: ParentNode | Document = document) {
  const word = root.querySelector<HTMLElement>(".footer__giant");
  if (!word || prefersReducedMotion()) return;
  gsap.fromTo(
    word,
    { y: 80 },
    {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: word.closest("footer") ?? word,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
}

export function headerState() {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
