import gsap from "gsap";
import { isTouchDevice, prefersReducedMotion } from "./utils";

export function portfolioScroll(root: ParentNode | Document = document) {
  const section = root.querySelector<HTMLElement>("[data-portfolio-pin]");
  if (!section) return;
  const track = section.querySelector<HTMLElement>(".work-track");
  const cards = section.querySelectorAll<HTMLElement>(".work-card");
  if (!track || !cards.length) return;

  if (prefersReducedMotion() || isTouchDevice() || window.innerWidth < 1024) {
    gsap.set(cards, { scale: 1 });
    return;
  }

  const getDistance = () => track.scrollWidth - window.innerWidth + 80;

  gsap.to(track, {
    x: () => -getDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${getDistance()}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  cards.forEach((card) => {
    const media = card.querySelector(".work-card__media img, .work-card__media");
    if (!media) return;
    gsap.fromTo(
      media,
      { scale: 0.88 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          containerAnimation: undefined,
          start: "left 80%",
          end: "left 20%",
          scrub: true,
          horizontal: false,
        },
      }
    );
  });
}
