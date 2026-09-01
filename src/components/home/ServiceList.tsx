import Link from "next/link";
import { services } from "@/data/content";

export function ServiceList() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="eyebrow" data-chars>
          What we do
        </p>
        <h2 className="display" data-lines>
          Technology built
          <br />
          around your business.
        </h2>
      </div>
      <div className="service-rows">
        {services.map((s) => (
          <Link
            key={s.id + s.title}
            href={s.href}
            className="service-row"
            data-fade
            data-cursor="view"
          >
            <span className="service-row__rule" data-rule />
            <div className="service-row__inner">
              <span className="service-row__id">{s.id}</span>
              <div className="service-row__copy">
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <ul>
                  {s.techs.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <span className="service-row__arrow" aria-hidden>
                →
              </span>
              <div className="service-row__preview" aria-hidden>
                <div className={`preview preview--${s.id}`} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
