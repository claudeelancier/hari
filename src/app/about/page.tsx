import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/home/FinalCTA";
import { StatsBand } from "@/components/home/StatsBand";
import { timeline, values } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elancier Solutions is a Madurai web and mobile studio founded in 2013. We design, develop and support digital products with a quality-first culture.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The studio"
        title={
          <>
            A Madurai studio
            <br />
            for serious
            <br />
            digital products.
          </>
        }
        copy="Elancier Solutions is a creative web and mobile development company. We help businesses grow by designing relationships through software — websites, applications and digital systems that people can actually use."
      />

      <section className="editorial">
        <div className="container editorial__grid">
          <h2 className="display" data-lines>
            Story
          </h2>
          <div>
            <p data-fade>
              We started in 2013 with a simple operating idea: quality of the project is the
              strategy. That still guides how we staff work, how we choose stacks, and how we
              stay in the product after launch.
            </p>
            <p data-fade>
              The team is small by design. Designers and engineers work close to the brief —
              Android and iOS, web platforms, ecommerce, identity and the marketing systems that
              keep a brand visible.
            </p>
          </div>
        </div>
      </section>

      <section className="split-band">
        <div className="container split-band__grid">
          <article data-fade>
            <p className="eyebrow">Mission</p>
            <h2>Turn ambitious ideas into products that can scale.</h2>
            <p>
              Understand the business, design with users in mind, then engineer with the
              technologies the product needs — not the ones that merely look current.
            </p>
          </article>
          <article data-fade>
            <p className="eyebrow">Vision</p>
            <h2>Be the studio businesses trust for web and mobile work.</h2>
            <p>
              Local roots in Madurai, digital reach wherever the product needs to go. Long-term
              relationships over one-off deliveries.
            </p>
          </article>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <p className="eyebrow" data-chars>
            Values
          </p>
          <h2 className="display" data-lines>
            How we behave
            <br />
            when it counts.
          </h2>
          <div className="values__grid">
            {values.map((v) => (
              <article key={v.title} data-fade>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <p className="eyebrow" data-chars>
            Milestones
          </p>
          <h2 className="display" data-lines>
            Thirteen years
            <br />
            of shipping.
          </h2>
          <ol>
            {timeline.map((t) => (
              <li key={t.year} data-fade>
                <span>{t.year}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="editorial">
        <div className="container editorial__grid">
          <h2 className="display" data-lines>
            Team
            <br />
            philosophy
          </h2>
          <p data-fade>
            Experienced people, object-oriented engineering, and a customer-oriented culture.
            We look for designers and developers who can translate a business requirement into
            something a user can finish. Fun, enthusiasm and continual learning are part of how
            the studio works — without treating the website as a playground.
          </p>
        </div>
      </section>

      <StatsBand />
      <FinalCTA />
    </>
  );
}
