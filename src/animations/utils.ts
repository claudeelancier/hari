import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
}

let registered = false;
export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function splitWords(el: HTMLElement) {
  if (el.dataset.split === "words") return Array.from(el.querySelectorAll<HTMLElement>(".word"));
  const text = el.textContent ?? "";
  el.innerHTML = "";
  const words = text.trim().split(/\s+/);
  const nodes: HTMLElement[] = [];
  words.forEach((word, i) => {
    const wrap = document.createElement("span");
    wrap.className = "word-wrap";
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = word;
    wrap.appendChild(span);
    el.appendChild(wrap);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    nodes.push(span);
  });
  el.dataset.split = "words";
  return nodes;
}

export function splitLines(el: HTMLElement) {
  if (el.dataset.split === "lines") return Array.from(el.querySelectorAll<HTMLElement>(".line-inner"));
  const html = el.innerHTML;
  const parts = html
    .split(/<br\s*\/?>/i)
    .map((p) => p.trim())
    .filter(Boolean);
  el.innerHTML = "";
  const inners: HTMLElement[] = [];
  parts.forEach((part) => {
    const line = document.createElement("span");
    line.className = "line";
    const inner = document.createElement("span");
    inner.className = "line-inner";
    inner.innerHTML = part;
    line.appendChild(inner);
    el.appendChild(line);
    inners.push(inner);
  });
  el.dataset.split = "lines";
  return inners;
}

export function splitChars(el: HTMLElement) {
  if (el.dataset.split === "chars") return Array.from(el.querySelectorAll<HTMLElement>(".char"));
  const text = el.textContent ?? "";
  el.innerHTML = "";
  const nodes: HTMLElement[] = [];
  Array.from(text).forEach((ch) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = ch === " " ? "\u00A0" : ch;
    el.appendChild(span);
    nodes.push(span);
  });
  el.dataset.split = "chars";
  return nodes;
}
