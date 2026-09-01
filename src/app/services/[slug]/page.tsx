import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProcessStory } from "@/components/home/ProcessStory";
import { FinalCTA } from "@/components/home/FinalCTA";
import { projects, serviceFaqs, services } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

const slugs = [
  "web-development",
  "ecommerce-development",
  "mobile-app-development",
  "ui-ux-design",
  "digital-marketing",
] as const;

type Slug = (typeof slugs)[number];

const serviceBySlug: Record<Slug, (typeof services)[number]> = {
  "web-development": services[0],
  "ecommerce-development": services[1],
  "mobile-app-development": services[2],
  "ui-ux-design": services[3],
  "digital-marketing": services[4],
};

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = serviceBySlug[params.slug as Slug];
  if (!s) return {};
  return {
    title: s.title,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

const relatedMap: Record<Slug, string[]> = {
  "web-development": ["Dforth Technologies", "NBB", "PHD Prime", "Bengaluru North University"],
  "ecommerce-development": ["Zoppey", "Vhave Shopping", "Rehaan Furnishing"],
  "mobile-app-development": ["Zoppey", "emplix", "Now Way", "Talk Mate"],
  "ui-ux-design": ["Jaksi Cinema", "Vasantham & Co", "Non Stop"],
  "digital-marketing": ["PHD Prime", "Talk New"],
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug as Slug;
  const service = serviceBySlug[slug];
  if (!service) notFound();

  const related = projects.filter((p) => relatedMap[slug]?.includes(p.name));
  const faq = serviceFaqs[slug] ?? [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@type": "Organization", name: "Elancier Solutions" },
    description: service.description,
    areaServed: "IN",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={`Service ${service.id}`}
        title={
          <>
            {service.title.split(" ").slice(0, 2).join(" ")}
            <br />
            {service.title.split(" ").slice(2).join(" ")}
          </>
        }
        copy={service.description}
        cta={{ href: "/request-quote", label: "Start this project" }}
      />

      <section className="editorial">
        <div className="container editorial__grid">
          <h2 className="display" data-lines>
            Overview
          </h2>
          <p data-fade>{service.summary}</p>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <ul className="cap-list">
            {service.capabilities.map((c) => (
              <li key={c} data-fade>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stack">
        <div className="container">
          <p className="eyebrow">Technology</p>
          <h2 className="display">The tools we actually use.</h2>
          <ul className="stack__pills">
            {service.techs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessStory />

      {related.length > 0 ? (
        <section className="related">
          <div className="container">
            <p className="eyebrow">Relevant work</p>
            <div className="related__grid">
              {related.map((p) => (
                <Link href="/work" key={p.name} className="related__card" data-cursor="project">
                  <div className="related__media">
                    <Image src={p.image} alt={p.name} width={640} height={420} />
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.services}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="faq">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <div className="faq__list">
            {faq.map((f) => (
              <details key={f.q}>
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
