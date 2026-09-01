"use client";

import { useEffect, useRef } from "react";
import { MagneticButton } from "../MagneticButton";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const graphic = el.querySelector<HTMLElement>(".final-cta__graphic");
    if (!graphic) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      graphic.style.transform = `translate3d(${x * 28}px, ${y * 20}px, 0)`;
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="final-cta" ref={ref}>
      <div className="final-cta__graphic" aria-hidden />
      <div className="container">
        <h2 className="display display--xl" data-lines>
          Let&apos;s build
          <br />
          something
          <br />
          remarkable.
        </h2>
        <p data-fade>
          Tell us what you&apos;re building and we&apos;ll help you turn it into a scalable digital
          product.
        </p>
        <div className="hero__cta">
          <MagneticButton href="/contact">Start a Conversation</MagneticButton>
          <MagneticButton href="/request-quote" variant="ghost">
            Request a Quote
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
