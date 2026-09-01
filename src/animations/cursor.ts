import gsap from "gsap";
import { isTouchDevice, prefersReducedMotion } from "./utils";

export function initCursor() {
  if (isTouchDevice() || prefersReducedMotion()) return () => {};

  const cursor = document.querySelector<HTMLElement>(".c-cursor");
  const label = document.querySelector<HTMLElement>(".c-cursor__label");
  if (!cursor || !label) return () => {};

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };

  const onMove = (e: PointerEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const tick = () => {
    pos.x += (mouse.x - pos.x) * 0.22;
    pos.y += (mouse.y - pos.y) * 0.22;
    cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  };

  gsap.ticker.add(tick);
  window.addEventListener("pointermove", onMove);

  const setState = (state: string, text = "") => {
    cursor.dataset.state = state;
    label.textContent = text;
  };

  const onOver = (e: Event) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
    if (!t) return;
    const mode = t.dataset.cursor ?? "link";
    if (mode === "view") setState("view", "VIEW");
    else if (mode === "project") setState("view", "VIEW PROJECT");
    else if (mode === "drag") setState("drag", "DRAG");
    else if (mode === "btn") setState("btn", "");
    else setState("link", "");
  };
  const onOut = (e: Event) => {
    const t = (e.target as HTMLElement).closest("[data-cursor]");
    if (t) setState("default", "");
  };

  document.addEventListener("pointerover", onOver);
  document.addEventListener("pointerout", onOut);
  document.documentElement.classList.add("has-cursor");

  return () => {
    gsap.ticker.remove(tick);
    window.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerover", onOver);
    document.removeEventListener("pointerout", onOut);
    document.documentElement.classList.remove("has-cursor");
  };
}

export function magneticButton(root: ParentNode | Document = document) {
  if (isTouchDevice() || prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
    const strength = Number(btn.dataset.magnetic ?? 18);
    const onMove = (e: PointerEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(btn, { x: x * 0.28, y: y * 0.28, duration: 0.35, ease: "power3.out" });
      const inner = btn.querySelector<HTMLElement>(".btn__inner");
      if (inner) gsap.to(inner, { x: x * 0.12, y: y * 0.12, duration: 0.35, ease: "power3.out" });
      void strength;
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: "power3.out" });
      const inner = btn.querySelector<HTMLElement>(".btn__inner");
      if (inner) gsap.to(inner, { x: 0, y: 0, duration: 0.55, ease: "power3.out" });
    };
    btn.addEventListener("pointermove", onMove);
    btn.addEventListener("pointerleave", onLeave);
  });
}
