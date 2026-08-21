import Reveal from './ui/Reveal.jsx'
import { industries } from '../data/landingData.js'

export default function IndustriesSection() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Built for businesses,
            <br />
            not just HR
            <br />
            departments.
          </h2>
        </Reveal>
        <div className="industry-grid">
          {industries.map((item) => (
            <article key={item.id} className="industry-card">
              <img src={item.image} alt={`${item.title} workplace`} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
