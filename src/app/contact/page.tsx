"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (!name) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (phone && !/^[0-9+\-\s]{8,}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (!subject) next.subject = "Add a subject.";
    if (message.length < 12) next.message = "Tell us a little more about the project.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("err");
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-chars>
            Contact
          </p>
          <h1 className="display display--page" data-lines>
            Let&apos;s talk.
          </h1>
          <p className="lede" data-fade>
            We&apos;re here to understand the business goal and discuss how we can help grow it
            online.
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="container contact__grid">
          <aside>
            <ul className="contact__facts">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <span>Phone</span>
                  <a href={p.href}>{p.display}</a>
                  <small>{site.hours}</small>
                </li>
              ))}
              <li>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <small>We typically respond within one business day.</small>
              </li>
              <li>
                <span>Office</span>
                <p>
                  {site.address.lines.map((l) => (
                    <span key={l}>
                      {l}
                      <br />
                    </span>
                  ))}
                </p>
                <a href={site.address.map} target="_blank" rel="noreferrer">
                  View on Map
                </a>
              </li>
              <li>
                <span>Hours</span>
                <p>{site.hours}</p>
              </li>
            </ul>
          </aside>
          <form className="form" onSubmit={onSubmit} noValidate>
            {["name", "email", "phone", "subject"].map((field) => (
              <label key={field} className="field">
                <input name={field} type={field === "email" ? "email" : "text"} placeholder=" " />
                <span>{field[0].toUpperCase() + field.slice(1)}</span>
                {errors[field] ? <em>{errors[field]}</em> : null}
              </label>
            ))}
            <label className="field field--area">
              <textarea name="message" rows={5} placeholder=" " />
              <span>Message</span>
              {errors.message ? <em>{errors.message}</em> : null}
            </label>
            {status === "ok" ? (
              <p className="form__ok" role="status">
                Thank you. Your message is ready — please also write to {site.email} if you need an
                immediate reply. This form stores locally in the browser session only.
              </p>
            ) : null}
            {status === "err" ? (
              <p className="form__err" role="alert">
                Please fix the highlighted fields.
              </p>
            ) : null}
            <button type="submit" className="btn btn--primary" data-magnetic="18" data-cursor="btn">
              <span className="btn__inner">
                <span className="btn__label">Send message</span>
                <span className="btn__arrow">↗</span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
