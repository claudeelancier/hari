import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/content";

export function PortfolioSection() {
  return (
    <section className="work-section" data-portfolio-pin>
      <div className="container work-section__head">
        <p className="eyebrow" data-chars>
          Selected work
        </p>
        <h2 className="display" data-lines>
          Work that
          <br />
          creates impact.
        </h2>
      </div>
      <div className="work-track">
        {featuredProjects.map((p) => (
          <article key={p.name} className="work-card" data-cursor="project">
            <Link href="/work" className="work-card__link">
              <div className="work-card__media">
                <Image src={p.image} alt={`${p.name} project`} width={900} height={640} />
              </div>
              <div className="work-card__meta">
                <h3>{p.name}</h3>
                <p>
                  {p.industry} · {p.services}
                </p>
                <span>View case study</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
