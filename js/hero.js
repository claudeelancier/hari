(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const splitHeadline = () => {
    const el = document.querySelector("[data-split]");
    if (!el) return;
    const html = el.innerHTML;
    el.innerHTML = "";
    let delay = 0;
    html.split(/(<em>.*?<\/em>|<br\s*\/?>|\s+)/).forEach((token) => {
      if (!token) return;
      if (token.startsWith("<em>")) {
        const wrap = document.createElement("em");
        token.replace(/<\/?em>/g, "").split("").forEach((ch) => {
          wrap.appendChild(charNode(ch === " " ? "\u00a0" : ch, delay));
          delay += 0.028;
        });
        el.appendChild(wrap);
        return;
      }
      if (/^\s+$/.test(token)) {
        el.appendChild(document.createTextNode(" "));
        return;
      }
      token.split("").forEach((ch) => {
        el.appendChild(charNode(ch, delay));
        delay += 0.028;
      });
    });
  };

  const charNode = (ch, delay) => {
    const outer = document.createElement("span");
    outer.className = "char";
    const inner = document.createElement("span");
    inner.textContent = ch;
    inner.style.animationDelay = `${0.45 + delay}s`;
    outer.appendChild(inner);
    return outer;
  };

  const preloader = () => {
    const node = document.getElementById("preloader");
    if (!node || reduced) {
      node?.remove();
      return;
    }
    window.setTimeout(() => node.classList.add("is-done"), 700);
    window.setTimeout(() => {
      node.classList.add("is-gone");
      window.setTimeout(() => node.remove(), 600);
    }, 1500);
  };

  const magnetic = () => {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0, 0)";
      });
    });
  };

  const cursor = () => {
    const root = document.querySelector(".cursor");
    if (!root || reduced || window.matchMedia("(pointer: coarse)").matches) {
      document.body.style.cursor = "auto";
      root?.remove();
      return;
    }
    const dot = root.querySelector(".cursor__dot");
    const ring = root.querySelector(".cursor__ring");
    const label = root.querySelector(".cursor__label");
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      label.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    document.querySelectorAll("a, button, .frame").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        root.classList.add("is-hover");
        const text = el.getAttribute("data-cursor");
        if (text) {
          label.textContent = text;
          root.classList.add("has-label");
        }
      });
      el.addEventListener("mouseleave", () => {
        root.classList.remove("is-hover", "has-label");
        label.textContent = "";
      });
    });
  };

  const tilt = () => {
    const stage = document.querySelector("[data-tilt]");
    if (!stage || reduced) return;
    stage.addEventListener("mousemove", (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = `perspective(1200px) rotateY(${px * 8}deg) rotateX(${-py * 6}deg)`;
      stage.querySelectorAll(".frame").forEach((card, i) => {
        const depth = (i + 1) * 6;
        card.style.transform = `translate3d(${px * depth}px, ${py * depth}px, 0)`;
      });
    });
    stage.addEventListener("mouseleave", () => {
      stage.style.transform = "";
      stage.querySelectorAll(".frame").forEach((card) => {
        card.style.transform = "";
      });
    });
  };

  const counters = () => {
    document.querySelectorAll("[data-count]").forEach((node) => {
      const end = Number(node.dataset.count);
      if (reduced) {
        node.textContent = String(end);
        return;
      }
      const start = performance.now();
      const duration = 1400;
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        node.textContent = String(Math.round(end * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      window.setTimeout(() => requestAnimationFrame(step), 1200);
    });
  };

  splitHeadline();
  preloader();
  magnetic();
  cursor();
  tilt();
  counters();
})();
