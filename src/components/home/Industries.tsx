"use client";

import { useState } from "react";
import { industries } from "@/data/content";

export function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section className="industries">
      <div className="container">
        <p className="eyebrow" data-chars>
          Industries
        </p>
        <h2 className="display" data-lines>
          Built for
          <br />
          real businesses.
        </h2>
      </div>
      <div className="industry-matrix">
        <div className={`industry-scene is-${active}`} aria-hidden />
        <ul>
          {industries.map((ind, i) => (
            <li key={ind.name}>
              <button
                type="button"
                className={i === active ? "is-on" : ""}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                data-cursor="link"
              >
                <span>{ind.name}</span>
                <em>{ind.note}</em>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
