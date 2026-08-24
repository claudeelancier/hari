(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const DESTINATIONS = [
    {
      ta: "காசி",
      en: "Kasi · Ayodhya",
      price: "INR 24,990 onwards · Ex Madurai",
      image:
        "https://images.unsplash.com/photo-1765138734178-42765e148bfe?auto=format&fit=crop&w=1400&q=80",
    },
    {
      ta: "மதுரை",
      en: "Meenakshi · Home",
      price: "Where every yatra begins",
      image:
        "https://images.unsplash.com/photo-1646056385288-46b2ce4ca4f8?auto=format&fit=crop&w=1400&q=80",
    },
    {
      ta: "துபாய்",
      en: "Dubai · Abu Dhabi",
      price: "INR 79,990 onwards",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      ta: "கேரளா",
      en: "Alappuzha · Munnar",
      price: "Train tour from INR 16,000",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80",
    },
    {
      ta: "காஷ்மீர்",
      en: "Gulmarg · Dal Lake",
      price: "INR 44,990 onwards",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      ta: "சிங்கப்பூர்",
      en: "Singapore · Malaysia",
      price: "INR 74,990 onwards",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const canvas = document.getElementById("kolam");
  const ctx = canvas.getContext("2d", { alpha: true });
  const dawn = document.getElementById("dawn");
  const film = document.getElementById("film");
  const nameTa = document.getElementById("nameTa");
  const nameEn = document.getElementById("nameEn");
  const price = document.getElementById("price");
  const idx = document.getElementById("idx");
  const cursor = document.getElementById("cursor");
  const chariot = document.getElementById("chariot");

  const pointer = { x: innerWidth * 0.62, y: innerHeight * 0.5, tx: 0.62, ty: 0.5 };
  let active = 0;
  let weave = 0;
  let emberT = 0;
  let lastSwitch = 0;
  let hoverNode = -1;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function origin() {
    const mobile = innerWidth < 980;
    return {
      x: mobile ? innerWidth * 0.5 : innerWidth * 0.62,
      y: innerHeight * 0.52,
      s: Math.min(innerWidth, innerHeight) * (mobile ? 0.38 : 0.42),
    };
  }

  /* Continuous sikku-kolam: rice-flour loops around a pulli lattice */
  function sikku(t) {
    const a = t * Math.PI * 2;
    const loop = 0.34 + 0.07 * Math.cos(8 * a) + 0.03 * Math.sin(3 * a);
    const diamond = 1 + 0.16 * Math.cos(4 * a);
    const mango = 0.035 * Math.sin(2 * a) * Math.cos(6 * a);
    return {
      x: Math.cos(a) * loop * diamond + mango,
      y: Math.sin(a) * loop * diamond,
    };
  }

  function lotus(t) {
    const a = t * Math.PI * 2;
    const r = 0.13 * (1.05 + 0.22 * Math.cos(6 * a));
    return { x: Math.cos(a) * r, y: Math.sin(a) * r };
  }

  function innerSquare(t) {
    const a = t * Math.PI * 2 + Math.PI / 4;
    const r = 0.2 / (Math.abs(Math.cos(a)) + Math.abs(Math.sin(a)));
    const round = r * 0.92;
    return { x: Math.cos(a) * round, y: Math.sin(a) * round };
  }

  function samplePath(fn, n) {
    const pts = [];
    for (let i = 0; i < n; i++) pts.push(fn(i / n));
    return pts;
  }

  const paths = {
    sikku: samplePath(sikku, 720),
    lotus: samplePath(lotus, 220),
    square: samplePath(innerSquare, 200),
  };

  const PULLI = [];
  for (let y = -3; y <= 3; y++) {
    for (let x = -3; x <= 3; x++) {
      if (Math.abs(x) + Math.abs(y) > 5) continue;
      PULLI.push({ x: x * 0.11, y: y * 0.11 });
    }
  }

  const NODES = DESTINATIONS.map((_, i) => {
    const a = (i / DESTINATIONS.length) * Math.PI * 2 - Math.PI / 2;
    return { x: Math.cos(a) * 0.36, y: Math.sin(a) * 0.36, i };
  });

  const grains = [];
  function seedGrains() {
    grains.length = 0;
    const count = innerWidth < 800 ? 700 : 1600;
    for (let i = 0; i < count; i++) {
      const kind = i % 11 === 0 ? "lotus" : i % 7 === 0 ? "square" : "sikku";
      const pts = paths[kind];
      const p = pts[i % pts.length];
      grains.push({
        hx: p.x,
        hy: p.y,
        x: (Math.random() - 0.5) * 2.4,
        y: -1.4 - Math.random() * 1.2,
        vx: 0,
        vy: 0,
        kind,
        born: Math.random(),
      });
    }
  }

  function assembleTitle() {
    document.querySelectorAll("[data-assemble]").forEach((el) => {
      const text = el.dataset.assemble;
      el.textContent = "";
      const words = text.split(" ");
      let delay = 0.35;
      words.forEach((word, wi) => {
        const wrap = document.createElement("span");
        wrap.className = "word";
        [...word].forEach((ch) => {
          const span = document.createElement("span");
          span.className = "glyph";
          span.textContent = ch;
          const ang = delay * 2.1;
          const dist = 80 + (delay % 1) * 140;
          span.style.setProperty("--ox", `${Math.cos(ang) * dist}px`);
          span.style.setProperty("--oy", `${Math.sin(ang) * dist}px`);
          span.style.setProperty("--or", `${((delay * 37) % 50) - 25}deg`);
          span.style.setProperty("--d", `${delay}s`);
          wrap.appendChild(span);
          delay += 0.045;
        });
        el.appendChild(wrap);
        if (wi < words.length - 1) {
          const gap = document.createElement("span");
          gap.className = "glyph";
          gap.textContent = "\u00a0";
          gap.style.setProperty("--ox", "0px");
          gap.style.setProperty("--oy", "12px");
          gap.style.setProperty("--or", "0deg");
          gap.style.setProperty("--d", `${delay}s`);
          el.appendChild(gap);
        }
      });
    });
  }

  function setDestination(i, fromUser) {
    active = (i + DESTINATIONS.length) % DESTINATIONS.length;
    const d = DESTINATIONS[active];
    film.style.animation = "none";
    film.offsetHeight;
    film.style.backgroundImage = `url("${d.image}")`;
    film.style.animation = "develop 1.1s cubic-bezier(0.22, 1, 0.36, 1)";
    nameTa.textContent = d.ta;
    nameEn.textContent = d.en;
    price.textContent = d.price;
    idx.textContent = String(active + 1).padStart(2, "0");
    if (fromUser) lastSwitch = performance.now();
  }

  function buildChariot() {
    chariot.innerHTML = "";
    DESTINATIONS.forEach((d, i) => {
      const el = document.createElement("div");
      el.className = "seal";
      const a = (i / DESTINATIONS.length) * 360 - 90;
      el.style.setProperty("--a", `${a}deg`);
      el.style.setProperty("--r", "210px");
      el.style.setProperty("--ad", `${-i * 0.4}s`);
      el.innerHTML = `<span class="ph" style="background:url('${d.image}') center/cover"></span><b>${d.en.split("·")[0]}</b>`;
      chariot.appendChild(el);
    });
  }

  function nearestNode(nx, ny) {
    let best = -1;
    let dmin = 0.085;
    for (const n of NODES) {
      const d = (n.x - nx) ** 2 + (n.y - ny) ** 2;
      if (d < dmin) {
        dmin = d;
        best = n.i;
      }
    }
    return best;
  }

  addEventListener("pointermove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.tx = e.clientX / innerWidth;
    pointer.ty = e.clientY / innerHeight;
    cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 4}px) rotate(-18deg)`;
    const o = origin();
    const nx = (e.clientX - o.x) / o.s;
    const ny = (e.clientY - o.y) / o.s;
    hoverNode = nearestNode(nx, ny);
    cursor.classList.toggle("is-hot", hoverNode >= 0);
    if (hoverNode >= 0 && hoverNode !== active) setDestination(hoverNode, true);
    const hour = 0.25 + pointer.tx * 0.7;
    dawn.style.filter = `hue-rotate(${(hour - 0.5) * 40}deg) brightness(${0.85 + hour * 0.35})`;
  });

  addEventListener("pointerleave", () => {
    cursor.style.transform = "translate(-999px,-999px)";
  });

  function step(now) {
    const o = origin();
    const w = innerWidth;
    const h = innerHeight;
    ctx.clearRect(0, 0, w, h);

    if (!reduced) weave = Math.min(1, weave + 0.0045);
    else weave = 1;

    const mx = (pointer.x - o.x) / o.s;
    const my = (pointer.y - o.y) / o.s;

    /* Courtyard wash */
    const g = ctx.createRadialGradient(o.x, o.y, 20, o.x, o.y, o.s * 1.6);
    g.addColorStop(0, "rgba(242, 228, 196, 0.07)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    /* Pulli appear first, like rice dots placed by hand */
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.scale(o.s, o.s);
    PULLI.forEach((p, i) => {
      const appear = Math.min(1, Math.max(0, weave * 3.2 - i * 0.06));
      if (appear <= 0) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 0.012 * appear, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244,236,218,${0.75 * appear})`;
      ctx.fill();
    });
    ctx.restore();

    /* Grains seek the sikku path after pulli are down */
    const settle = Math.max(0, weave - 0.22);
    for (const grain of grains) {
      if (grain.born > settle * 1.4) continue;
      let ax = (grain.hx - grain.x) * 0.055;
      let ay = (grain.hy - grain.y) * 0.055;
      const dx = grain.x - mx;
      const dy = grain.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.0008;
      if (dist < 0.22) {
        const f = (0.22 - dist) / 0.22;
        ax += (dx / dist) * f * 0.08;
        ay += (dy / dist) * f * 0.08;
      }
      grain.vx = grain.vx * 0.82 + ax;
      grain.vy = grain.vy * 0.82 + ay;
      grain.x += grain.vx;
      grain.y += grain.vy;

      const px = o.x + grain.x * o.s;
      const py = o.y + grain.y * o.s;
      const nearActive =
        (grain.hx - NODES[active].x) ** 2 + (grain.hy - NODES[active].y) ** 2 < 0.04;
      ctx.fillStyle = nearActive ? "rgba(226, 90, 42, 0.92)" : "rgba(244, 236, 218, 0.82)";
      ctx.fillRect(px, py, grain.kind === "lotus" ? 1.8 : 1.15, grain.kind === "lotus" ? 1.8 : 1.15);
    }

    /* Destination pulli — vermillion bindis */
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.scale(o.s, o.s);
    NODES.forEach((n, i) => {
      const on = i === active;
      const pulse = on ? 1 + Math.sin(now * 0.006) * 0.12 : 1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, (on ? 0.028 : 0.018) * pulse, 0, Math.PI * 2);
      ctx.fillStyle = on ? "#c43a1c" : "rgba(215,164,65,0.85)";
      ctx.fill();
      if (on) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 0.055 + Math.sin(now * 0.005) * 0.01, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(196,58,28,0.45)";
        ctx.lineWidth = 0.006;
        ctx.stroke();
      }
    });
    ctx.restore();

    /* Yatra ember travels the sikku without lifting the hand */
    emberT = (emberT + 0.0018) % 1;
    const e = sikku(emberT);
    const ex = o.x + e.x * o.s;
    const ey = o.y + e.y * o.s;
    const glow = ctx.createRadialGradient(ex, ey, 0, ex, ey, 28);
    glow.addColorStop(0, "rgba(255, 207, 122, 0.95)");
    glow.addColorStop(0.35, "rgba(196, 58, 28, 0.55)");
    glow.addColorStop(1, "rgba(196, 58, 28, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(ex, ey, 28, 0, Math.PI * 2);
    ctx.fill();

    /* Stream of sparks from active node toward the oracle lens */
    const n = NODES[active];
    const sx = o.x + n.x * o.s;
    const sy = o.y + n.y * o.s;
    const lx = innerWidth < 980 ? innerWidth * 0.5 : innerWidth * 0.78;
    const ly = innerHeight * 0.48;
    for (let k = 0; k < 14; k++) {
      const u = (k / 14 + now * 0.00035) % 1;
      const px = sx + (lx - sx) * u;
      const py = sy + (ly - sy) * u + Math.sin(u * 8 + now * 0.004) * 10;
      ctx.fillStyle = `rgba(215,164,65,${1 - u})`;
      ctx.fillRect(px, py, 2, 2);
    }

    if (!reduced && now - lastSwitch > 4200) {
      setDestination(active + 1, false);
      lastSwitch = now;
    }

    requestAnimationFrame(step);
  }

  addEventListener("resize", () => {
    resize();
    seedGrains();
  });

  assembleTitle();
  buildChariot();
  resize();
  seedGrains();
  setDestination(0, true);
  lastSwitch = performance.now();
  if (reduced) weave = 1;
  requestAnimationFrame(step);
})();
