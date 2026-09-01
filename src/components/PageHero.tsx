import type { ReactNode } from "react";
import { MagneticButton } from "@/components/MagneticButton";

export function PageHero({
  eyebrow,
  title,
  copy,
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow" data-chars>
          {eyebrow}
        </p>
        <h1 className="display display--page" data-lines>
          {title}
        </h1>
        {copy ? <p className="lede" data-fade>{copy}</p> : null}
        {cta ? <MagneticButton href={cta.href}>{cta.label}</MagneticButton> : null}
      </div>
    </section>
  );
}
