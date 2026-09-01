import { clients } from "@/data/content";
import Image from "next/image";

export function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="trust" aria-label="Clients">
      <p className="trust__label" data-chars>
        Trusted by ambitious businesses
      </p>
      <div className="marquee" data-marquee data-speed="55" data-dir="left">
        <div className="marquee__track">
          {row.map((c, i) => (
            <div className="trust__item" key={`${c.name}-${i}`}>
              <Image src={c.logo} alt={c.name} width={140} height={56} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
