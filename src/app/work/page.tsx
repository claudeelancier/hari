"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects, type ProjectCategory } from "@/data/content";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "brand", label: "Brand / UI" },
  { id: "apps", label: "Business Apps" },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-chars>
            Archive
          </p>
          <h1 className="display display--page" data-lines>
            Selected
            <br />
            work.
          </h1>
          <p className="lede" data-fade>
            A cross-section of websites, mobile products and business applications delivered for
            Elancier clients. Years are shown only where published.
          </p>
        </div>
      </section>
      <section className="archive">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Project categories">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={filter === f.id ? "is-on" : ""}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="masonry">
            {list.map((p, i) => (
              <article
                key={p.name + p.image}
                className={`masonry__item ${i % 5 === 0 ? "is-wide" : ""}`}
                data-cursor="view"
                data-fade
              >
                <div className="masonry__media">
                  <Image src={p.image} alt={`${p.name} — ${p.services}`} width={900} height={700} />
                </div>
                <div className="masonry__meta">
                  <h2>{p.name}</h2>
                  <p>
                    {p.industry} · {p.services}
                  </p>
                </div>
              </article>
            ))}
          </div>
          {list.length === 0 ? (
            <p className="lede">No published projects in this category yet.</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
