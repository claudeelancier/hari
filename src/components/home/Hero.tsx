import { MagneticButton } from "../MagneticButton";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__grid-bg" aria-hidden />
      <div className="hero__orb hero__orb--a" data-parallax="20" />
      <div className="hero__orb hero__orb--b" data-parallax="50" />

      <div className="container hero__layout">
        <p className="eyebrow" data-chars>
          Innovation · Design · Engineering
        </p>
        <h1 className="hero__title" data-lines>
          We build
          <br />
          digital experiences
          <br />
          that <em>move business.</em>
        </h1>
        <p className="hero__copy" data-fade data-delay="0.15">
          Elancier creates high-performance websites, mobile applications and digital products
          that turn ambitious ideas into scalable business experiences.
        </p>
        <div className="hero__cta" data-fade data-delay="0.25">
          <MagneticButton href="/request-quote">Start Your Project</MagneticButton>
          <MagneticButton href="/work" variant="ghost">
            Explore Our Work
          </MagneticButton>
        </div>
      </div>

      <div className="hero__stage" aria-hidden>
        <div className="layer layer--back" data-parallax="18">
          <div className="ui-card ui-card--dash" data-float>
            <header>
              <span />
              <span />
              <span />
              <b>analytics.board</b>
            </header>
            <div className="dash-bars">
              <i style={{ height: "42%" }} />
              <i style={{ height: "68%" }} />
              <i style={{ height: "51%" }} />
              <i style={{ height: "86%" }} />
              <i style={{ height: "37%" }} />
              <i style={{ height: "74%" }} />
            </div>
          </div>
        </div>
        <div className="layer layer--mid" data-parallax="40">
          <div className="ui-card ui-card--code" data-float>
            <pre>
              {`function ship() {
  return design
    .compose(stack)
    .launch();
}`}
            </pre>
          </div>
          <div className="ui-card ui-card--browser" data-float>
            <header>
              <span />
              <span />
              <span />
              <b>elancier.app</b>
            </header>
            <div className="browser-body">
              <div className="browser-hero" />
              <div className="browser-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
        <div className="layer layer--front" data-parallax="70">
          <div className="phone" data-float>
            <div className="phone__notch" />
            <div className="phone__screen">
              <small>PRODUCT</small>
              <strong>Live dashboard</strong>
              <div className="phone__chart" />
              <div className="phone__pills">
                <em />
                <em />
              </div>
            </div>
          </div>
          <span className="chip chip--a">React</span>
          <span className="chip chip--b">iOS / Android</span>
          <span className="chip chip--c">Next.js</span>
        </div>
      </div>
    </section>
  );
}
