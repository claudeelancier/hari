import { principles } from "@/data/content";

export function WhyElancier() {
  return (
    <section className="why">
      <div className="container why__grid">
        <div>
          <p className="eyebrow" data-chars>
            Why us
          </p>
          <h2 className="display" data-lines>
            A smaller team.
            <br />
            A bigger
            <br />
            obsession with
            <br />
            quality.
          </h2>
        </div>
        <div className="why__list">
          {principles.map((p) => (
            <article key={p.id} data-fade>
              <span className="why__line" data-rule />
              <h3>
                <em>{p.id}</em> {p.title}
              </h3>
              <p>{p.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
