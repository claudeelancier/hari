import Image from "next/image";
import { clients } from "@/data/content";

export function ClientExperience() {
  const sample = clients.slice(0, 12);
  return (
    <section className="experience">
      <div className="container">
        <p className="eyebrow" data-chars>
          Client experience
        </p>
        <h2 className="display" data-lines>
          Partnerships
          <br />
          built in product.
        </h2>
        <p className="lede" data-fade>
          Public testimonials are not published on the current Elancier site. Until those quotes
          are confirmed, we present the clients and categories we actually work with.
        </p>
        <p className="placeholder-note">Testimonial quotes — replace when verified.</p>
        <ul className="experience__logos">
          {sample.map((c) => (
            <li key={c.name}>
              <Image src={c.logo} alt={c.name} width={120} height={48} />
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
