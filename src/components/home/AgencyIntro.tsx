import { extraStats, stats } from "@/data/content";
import { MagneticButton } from "../MagneticButton";

export function AgencyIntro() {
  const metrics = [...stats, extraStats[0]];
  return (
    <section className="intro">
      <div className="container intro__grid">
        <div>
          <p className="eyebrow" data-chars>
            We are Elancier
          </p>
          <h2 className="display" data-lines>
            We turn ideas
            <br />
            into digital
            <br />
            products people
            <br />
            remember.
          </h2>
        </div>
        <div className="intro__copy">
          <p data-fade>
            Elancier Solutions is a creative web and mobile studio helping businesses ship
            websites, applications and digital products that feel modern, useful and built to last.
          </p>
          <p data-fade data-delay="0.08">
            Founded in Madurai in 2013, we stay close to the brief: understand the business,
            design with care, then engineer with the stack the product actually needs — from PHP
            and .NET to React, Node.js, Android and iOS.
          </p>
          <MagneticButton href="/about" variant="ghost">
            Our story
          </MagneticButton>
        </div>
      </div>
      <div className="container intro__metrics">
        {metrics.map((m) => (
          <div key={m.label} className="metric" data-fade>
            <p className="metric__n">
              <span data-count={m.value}>0</span>
              <span>{m.suffix}</span>
            </p>
            <p className="metric__l">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
