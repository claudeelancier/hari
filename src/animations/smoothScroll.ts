import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion, registerGsap } from "./utils";

export type SmoothHandle = {
  lenis: Lenis | null;
  destroy: () => void;
  refresh: () => void;
};

export function initSmoothScroll(): SmoothHandle {
  registerGsap();
  if (prefersReducedMotion()) {
    ScrollTrigger.refresh();
    return { lenis: null, destroy: () => {}, refresh: () => ScrollTrigger.refresh() };
  }

  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.92,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const ticker = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(ticker);
  gsap.ticker.lagSmoothing(0);

  const onResize = () => ScrollTrigger.refresh();
  window.addEventListener("resize", onResize);

  return {
    lenis,
    refresh: () => {
      lenis.resize();
      ScrollTrigger.refresh();
    },
    destroy: () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("resize", onResize);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    },
  };
}
