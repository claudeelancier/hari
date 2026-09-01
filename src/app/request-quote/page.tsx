"use client";

import { FormEvent, useState } from "react";
import { quoteBudgets, quoteNeeds, quoteTimelines, site } from "@/data/content";

const steps = ["Need", "Budget", "Timeline", "Project", "Contact"];

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    need: "",
    budget: "",
    timeline: "",
    project: "",
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  function next() {
    if (step === 0 && !data.need) return setError("Select what you need.");
    if (step === 1 && !data.budget) return setError("Choose a budget range.");
    if (step === 2 && !data.timeline) return setError("Choose a timeline.");
    if (step === 3 && data.project.trim().length < 12)
      return setError("Add a short project description.");
    setError("");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!data.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Add a valid name and email.");
      return;
    }
    setDone(true);
  }

  return (
    <section className="quote">
      <div className="container quote__wrap">
        <p className="eyebrow">Request a quote</p>
        <h1 className="display display--page">Tell us what you&apos;re building.</h1>
        <div className="quote__progress" aria-hidden>
          <span style={{ transform: `scaleX(${(step + (done ? 1 : 0)) / steps.length})` }} />
        </div>
        <ol className="quote__steps">
          {steps.map((s, i) => (
            <li key={s} className={i === step ? "is-on" : i < step ? "is-done" : ""}>
              0{i + 1} {s}
            </li>
          ))}
        </ol>

        {done ? (
          <div className="quote__done">
            <h2>Received.</h2>
            <p>
              {data.name}, we have your {data.need.toLowerCase()} enquiry. Write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phones[0].display} to
              continue the conversation. This demo form does not send to a server.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="quote__form">
            {step === 0 && (
              <fieldset>
                <legend>What do you need?</legend>
                <div className="choice-grid">
                  {quoteNeeds.map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={data.need === n ? "is-on" : ""}
                      onClick={() => setData({ ...data, need: n })}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}
            {step === 1 && (
              <fieldset>
                <legend>Budget</legend>
                <div className="choice-grid">
                  {quoteBudgets.map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={data.budget === n ? "is-on" : ""}
                      onClick={() => setData({ ...data, budget: n })}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}
            {step === 2 && (
              <fieldset>
                <legend>Timeline</legend>
                <div className="choice-grid">
                  {quoteTimelines.map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={data.timeline === n ? "is-on" : ""}
                      onClick={() => setData({ ...data, timeline: n })}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}
            {step === 3 && (
              <label className="field field--area">
                <textarea
                  rows={6}
                  value={data.project}
                  onChange={(e) => setData({ ...data, project: e.target.value })}
                  placeholder=" "
                />
                <span>Project information</span>
              </label>
            )}
            {step === 4 && (
              <>
                <label className="field">
                  <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder=" "
                  />
                  <span>Name</span>
                </label>
                <label className="field">
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    placeholder=" "
                  />
                  <span>Email</span>
                </label>
                <label className="field">
                  <input
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    placeholder=" "
                  />
                  <span>Phone</span>
                </label>
              </>
            )}
            {error ? (
              <p className="form__err" role="alert">
                {error}
              </p>
            ) : null}
            <div className="quote__nav">
              {step > 0 ? (
                <button type="button" className="btn btn--ghost" onClick={() => setStep(step - 1)}>
                  <span className="btn__inner">Back</span>
                </button>
              ) : null}
              {step < steps.length - 1 ? (
                <button type="button" className="btn btn--primary" onClick={next}>
                  <span className="btn__inner">
                    Continue <span className="btn__arrow">→</span>
                  </span>
                </button>
              ) : (
                <button type="submit" className="btn btn--primary">
                  <span className="btn__inner">
                    Submit enquiry <span className="btn__arrow">↗</span>
                  </span>
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
