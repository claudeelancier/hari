import { MagneticButton } from "../MagneticButton";

export function DedicatedCTA() {
  return (
    <section className="dev-cta">
      <div className="dev-cta__visual" aria-hidden />
      <div className="container">
        <p className="eyebrow" data-chars>
          Dedicated talent
        </p>
        <h2 className="display" data-lines>
          Need a
          <br />
          dedicated
          <br />
          development team?
        </h2>
        <p data-fade>
          Extend your team with developers focused on your product, technology and delivery goals.
        </p>
        <MagneticButton href="/contact">Hire a Developer</MagneticButton>
      </div>
    </section>
  );
}
