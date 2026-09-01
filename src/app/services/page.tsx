import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/home/ServiceList";
import { ProcessStory } from "@/components/home/ProcessStory";
import { TechMarquee } from "@/components/home/TechMarquee";
import { FinalCTA } from "@/components/home/FinalCTA";
import { faqs, principles } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, ecommerce, mobile apps, UI/UX and digital marketing from Elancier Solutions in Madurai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={
          <>
            One studio.
            <br />
            The stack your
            <br />
            business needs.
          </>
        }
        copy="Integrated services across web, ecommerce, mobile, design and marketing — planned as a product, not a pile of disconnected deliverables."
      />
      <ServiceList />
      <section className="benefits">
        <div className="container">
          <p className="eyebrow">Why this model</p>
          <h2 className="display" data-lines>
            Design, develop,
            <br />
            deploy, support.
          </h2>
          <div className="values__grid">
            {principles.map((p) => (
              <article key={p.id} data-fade>
                <h3>
                  {p.id} {p.title}
                </h3>
                <p>{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TechMarquee />
      <ProcessStory />
      <section className="faq">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2 className="display">Questions, answered.</h2>
          <div className="faq__list">
            {faqs.map((f) => (
              <details key={f.q} data-fade>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
