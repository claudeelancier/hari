(() => {
  const slidesRoot = document.getElementById("slides");
  const cards = [...document.querySelectorAll(".card")];
  const hero = document.getElementById("hero");
  const stage = document.querySelector("[data-tilt]");
  const canvas = document.getElementById("stars");
  const cursor = document.getElementById("cursor");
  const intro = document.getElementById("intro");

  for (let i = 0; i < 4; i += 1) {
    const el = document.createElement("div");
    el.className = `slide${i === 0 ? " is-on" : ""}`;
    slidesRoot.appendChild(el);
  }
  const slides = [...slidesRoot.children];

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
  setInterval(cycle, 4200);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && canvas) {
    const ctx = canvas.getContext("2d");
    const stars = [];
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);
    for (let i = 0; i < 90; i += 1) {
      stars.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.4 + 0.2,
        s: Math.random() * 0.35 + 0.05,
        a: Math.random()
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.x += star.s;
        star.a += 0.01;
        if (star.x > canvas.width) star.x = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(243,222,154,${0.25 + Math.sin(star.a) * 0.35})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  if (!reduce && stage) {
    hero.addEventListener("pointermove", (event) => {
      const x = (event.clientX / innerWidth - 0.5) * 12;
      const y = (event.clientY / innerHeight - 0.5) * 8;
      stage.style.transform = `perspective(1200px) rotateY(${x * 0.4}deg) rotateX(${-y * 0.35}deg) scale(1.02)`;
    });
    hero.addEventListener("pointerleave", () => {
      stage.style.transform = "";
    });
  }

  if (cursor && matchMedia("(pointer:fine)").matches) {
    document.body.style.cursor = "none";
    addEventListener("pointermove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
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
  setTimeout(playCount, 2200);
  setTimeout(() => intro?.setAttribute("aria-hidden", "true"), 2800);
})();
