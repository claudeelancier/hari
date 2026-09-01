import { processSteps } from "@/data/content";

export function ProcessStory() {
  return (
    <section className="process" data-process>
      <div className="process__sticky">
        <div className="container process__layout">
          <div className="process__left">
            <p className="eyebrow">How we work</p>
            <h2 className="display">
              From idea
              <br />
              to digital
              <br />
              reality.
            </h2>
            <p className="process__num">01</p>
            <div className="process__bar">
              <span className="process__bar-fill" />
            </div>
          </div>
          <div className="process__right">
            {processSteps.map((step) => (
              <article key={step.id} className="process-step" data-step={step.id}>
                <span>{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <ul>
                  {step.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
