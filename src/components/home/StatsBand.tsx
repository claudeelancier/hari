import { stats } from "@/data/content";

export function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-band__grid">
        {stats.map((m) => (
          <div key={m.label}>
            <p className="stats-band__n">
              <span data-count={m.value}>0</span>
              <span>{m.suffix}</span>
            </p>
            <p>{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
