import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MagneticButton } from "@/components/MagneticButton";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Elancier Solutions in Madurai. A studio for designers and engineers who want to ship web and mobile products.",
  alternates: { canonical: "/careers" },
};

const reasons = [
  {
    t: "Work that ships",
    d: "Websites, apps and commerce products for real businesses — not speculative mockups.",
  },
  {
    t: "Modern craft",
    d: "Flutter, React, Node, PHP, .NET and design systems depending on the product.",
  },
  {
    t: "A creative room",
    d: "The culture is described internally as bustling with creativity and continual innovation — with room to grow a design or programming career.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the
            <br />
            future with us.
          </>
        }
        copy="We look for designers and engineers who can turn a requirement into software people finish using. Share a résumé even when a role is not listed."
      />

      <section className="editorial">
        <div className="container editorial__grid">
          <h2 className="display" data-lines>
            Culture
          </h2>
          <p data-fade>
            Elancier is constantly looking to bring quality professionals on board. Fun,
            enthusiasm and continual innovation are treated as essential parts of a web
            development career here — with a work environment built around making things, not
            around theatre.
          </p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <p className="eyebrow">Why join</p>
          <div className="values__grid">
            {reasons.map((r) => (
              <article key={r.t} data-fade>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roles">
        <div className="container">
          <p className="eyebrow">Open roles</p>
          <h2 className="display">No openings at this time.</h2>
          <p className="lede">
            The careers page currently lists no live vacancies. When roles open, they appear here.
            Until then, send a résumé and a short note to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <div className="hero__cta">
            <MagneticButton href={`mailto:${site.email}`}>Send your résumé</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Talk to us
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
