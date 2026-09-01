import { techsMarquee } from "@/data/content";

function Row({ dir }: { dir: "left" | "right" }) {
  const items = [...techsMarquee, ...techsMarquee];
  return (
    <div className="marquee tech-marquee" data-marquee data-dir={dir} data-speed="48">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span key={`${t}-${i}`}>
            {t} <em>—</em>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="tech" aria-label="Technologies">
      <Row dir="left" />
      <Row dir="right" />
    </section>
  );
}
