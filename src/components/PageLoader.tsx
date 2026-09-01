"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { prefersReducedMotion, splitChars } from "@/animations/utils";

export function PageLoader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".loader");
    if (!root) {
      setGone(true);
      return;
    }
    const word = root.querySelector<HTMLElement>(".loader__word");
    const bar = root.querySelector<HTMLElement>(".loader__bar-fill");
    const pct = root.querySelector<HTMLElement>(".loader__pct");
    if (!word) return;

    const chars = splitChars(word);
    const reduced = prefersReducedMotion();

    if (reduced) {
      root.style.display = "none";
      document.documentElement.classList.add("is-loaded");
      setGone(true);
      return;
    }

    const obj = { n: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.add("is-loaded");
        setTimeout(() => setGone(true), 700);
      },
    });

    tl.fromTo(
      chars,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.55, ease: "power3.out" }
    )
      .to(
        obj,
        {
          n: 100,
          duration: 1.15,
          ease: "power2.inOut",
          onUpdate: () => {
            if (pct) pct.textContent = `${Math.round(obj.n)}`;
            if (bar) bar.style.transform = `scaleX(${obj.n / 100})`;
          },
        },
        0.2
      )
      .to(root, { yPercent: -100, duration: 0.85, ease: "power3.inOut" }, "+=0.12");

    return () => {
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div className="loader" role="status" aria-label="Loading Elancier">
      <div className="loader__inner">
        <p className="loader__word">ELANCIER</p>
        <div className="loader__bar">
          <span className="loader__bar-fill" />
        </div>
        <p className="loader__pct">0</p>
      </div>
    </div>
  );
}
