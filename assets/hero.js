(() => {
  const slidesRoot = document.getElementById("slides");
  const cards = [...document.querySelectorAll(".card")];
  const hero = document.getElementById("hero");
  const stage = document.querySelector("[data-tilt]");
  const canvas = document.getElementById("petals");
  const cursor = document.getElementById("cursor");
  const intro = document.getElementById("intro");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  for (let i = 0; i < 4; i += 1) {
    const el = document.createElement("div");
    el.className = `slide${i === 0 ? " is-on" : ""}`;
    slidesRoot.appendChild(el);
  }
  const slides = [...slidesRoot.children];

  const goldLine = document.querySelector(".headline .gold");
  if (goldLine && !reduce) {
    const text = goldLine.textContent;
    goldLine.textContent = "";
    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      span.style.animationDelay = `${2.28 + i * 0.05}s`;
      goldLine.appendChild(span);
    });
  }

  let slide = 0;
  let card = 0;
  const cycle = () => {
    slides[slide].classList.remove("is-on");
    slide = (slide + 1) % slides.length;
    slides[slide].classList.add("is-on");
    cards.forEach((node, i) => {
      node.classList.toggle("is-active", i === card);
      node.classList.toggle("is-prev", i === (card + cards.length - 1) % cards.length);
    });
    card = (card + 1) % cards.length;
  };
  setInterval(cycle, 4000);

  if (!reduce && canvas) {
    const ctx = canvas.getContext("2d");
    const bits = [];
    const palette = ["#f0c35a", "#ffd2a8", "#7ad4ce", "#ffffff", "#e07a3d"];
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);
    for (let i = 0; i < 48; i += 1) {
      bits.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 4 + 1.2,
        s: Math.random() * 0.45 + 0.15,
        a: Math.random() * Math.PI * 2,
        c: palette[i % palette.length]
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bits.forEach((p) => {
        p.y -= p.s;
        p.x += Math.sin(p.a) * 0.35;
        p.a += 0.02;
        if (p.y < -10) p.y = canvas.height + 10;
        ctx.beginPath();
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.45;
        ctx.ellipse(p.x, p.y, p.r, p.r * 0.55, p.a, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  let tx = 0;
  let ty = 0;
  let cx = 0;
  let cy = 0;
  if (!reduce && stage) {
    hero.addEventListener("pointermove", (event) => {
      tx = (event.clientX / innerWidth - 0.5) * 10;
      ty = (event.clientY / innerHeight - 0.5) * 7;
    });
    hero.addEventListener("pointerleave", () => {
      tx = 0;
      ty = 0;
    });
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      stage.style.transform = `perspective(1400px) rotateY(${cx * 0.45}deg) rotateX(${-cy * 0.4}deg)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("pointermove", (event) => {
      const box = btn.getBoundingClientRect();
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });

  if (cursor && matchMedia("(pointer:fine)").matches) {
    document.body.style.cursor = "none";
    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let ox = mx;
    let oy = my;
    addEventListener("pointermove", (event) => {
      mx = event.clientX;
      my = event.clientY;
    });
    const follow = () => {
      ox += (mx - ox) * 0.18;
      oy += (my - oy) * 0.18;
      cursor.style.left = `${ox}px`;
      cursor.style.top = `${oy}px`;
      requestAnimationFrame(follow);
    };
    follow();
    document.querySelectorAll("a, button, input, select").forEach((el) => {
      el.addEventListener("pointerenter", () => cursor.classList.add("is-hot"));
      el.addEventListener("pointerleave", () => cursor.classList.remove("is-hot"));
    });
  } else if (cursor) {
    cursor.remove();
  }

  const counters = document.querySelectorAll("[data-count]");
  const playCount = () => {
    counters.forEach((node) => {
      const end = Number(node.dataset.count);
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - (1 - t) ** 3;
        node.textContent = `${Math.round(end * eased)}${end >= 40 ? "+" : ""}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  setTimeout(playCount, 2100);
  setTimeout(() => intro?.setAttribute("aria-hidden", "true"), 2800);
})();
