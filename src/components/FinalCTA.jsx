import Reveal from './ui/Reveal.jsx'
import { PrimaryButton } from './ui/Buttons.jsx'

export default function FinalCTA({ onDemo }) {
  return (
    <section className="final-cta">
      <div className="container cta-row">
        <Reveal>
          <h2 className="display compact">
            Make HR
            <br />
            easier to manage.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="cta-side">
          <p>
            Configure it for your business.
            <br />
            Manage it from one place.
            <br />
            Grow with it.
          </p>
          <PrimaryButton onClick={onDemo}>Book a Demo</PrimaryButton>
        </Reveal>
        <div className="cta-rings" aria-hidden="true" />
      </div>
    </section>
  )
}
