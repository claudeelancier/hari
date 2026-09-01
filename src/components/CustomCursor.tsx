"use client";

export function CustomCursor() {
  return (
    <div className="c-cursor" data-state="default" aria-hidden>
      <div className="c-cursor__dot" />
      <span className="c-cursor__label" />
    </div>
  );
}
