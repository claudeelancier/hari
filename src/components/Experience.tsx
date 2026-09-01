"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";
import { initSmoothScroll, type SmoothHandle } from "@/animations/smoothScroll";
import { bindTextReveals } from "@/animations/textReveal";
import { clipReveal, floatEls, parallaxImage } from "@/animations/parallax";
import { initCursor, magneticButton } from "@/animations/cursor";
import { counterAnimation, marquee } from "@/animations/marquee";
import { portfolioScroll } from "@/animations/portfolioScroll";
import { footerReveal, headerState, processScroll } from "@/animations/processScroll";
import { registerGsap } from "@/animations/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Experience({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const smooth = useRef<SmoothHandle | null>(null);

  useEffect(() => {
    registerGsap();
    smooth.current = initSmoothScroll();
    const unCursor = initCursor();
    const unHeader = headerState();
    return () => {
      unCursor?.();
      unHeader?.();
      smooth.current?.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    const id = requestAnimationFrame(() => {
      bindTextReveals(document);
      clipReveal(document);
      floatEls(document);
      parallaxImage(document);
      magneticButton(document);
      marquee(document);
      counterAnimation(document);
      processScroll(document);
      portfolioScroll(document);
      footerReveal(document);
      ScrollTrigger.refresh();
      smooth.current?.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
