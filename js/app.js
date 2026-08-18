(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  const card = document.getElementById("loginCard");
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const togglePass = document.getElementById("togglePass");
  const cta = document.getElementById("cta");
  const ctaLabel = document.getElementById("ctaLabel");
  const dock = document.getElementById("dock");
  const dockGlow = document.getElementById("dockGlow");
  const statusLine = document.getElementById("statusLine");
  const lede = document.getElementById("lede");
  const glow = document.getElementById("cursorGlow");
  const toast = document.getElementById("toast");
  const canvas = document.getElementById("particles");

  const emailOk = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const passOk = () => password.value.length >= 8;

  const copy = {
    0: {
      lede: "Welcome back. Two fields stand between you and that button.",
      status: "It will not wait for you.",
    },
    1: {
      lede: "Almost. The dock is still slippery.",
      status: "One to go — it is slowing down.",
    },
    2: {
      lede: "Both fields hold. The button will stay.",
      status: "Ready. Pointer or Enter.",
    },
  };

  function completeness() {
    return Number(emailOk()) + Number(passOk());
  }

  function syncFields() {
    email.closest(".field").classList.toggle("is-valid", emailOk());
    const n = completeness();
    const pack = copy[n];
    lede.textContent = pack.lede;
    statusLine.textContent = pack.status;
    cta.classList.toggle("is-ready", n === 2);
    cta.setAttribute("aria-disabled", n === 2 ? "false" : "true");
  }

  email.addEventListener("input", syncFields);
  password.addEventListener("input", syncFields);
  email.addEventListener("blur", syncFields);
  password.addEventListener("blur", syncFields);

  togglePass.addEventListener("click", () => {
    const show = password.type === "password";
    password.type = show ? "text" : "password";
    togglePass.classList.toggle("is-on", show);
    togglePass.setAttribute("aria-pressed", String(show));
    togglePass.setAttribute("aria-label", show ? "Hide password" : "Show password");
  });

  function flash(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(flash._t);
    flash._t = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  document.getElementById("forgotBtn").addEventListener("click", () => {
    flash("Reset link drafted — check ada@lumen.co");
  });
  document.getElementById("createBtn").addEventListener("click", () => {
    flash("Create-account is a demo surface.");
  });

  let pointer = { x: innerWidth / 2, y: innerHeight / 2 };
  let tx = 0;
  let ty = 0;
  let x = 0;
  let y = 0;
  let r = 0;
  let scale = 1;
  let cardTx = 0;
  let cardTy = 0;
  let cardRx = 0;
  let cardRy = 0;
  let busy = false;

  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.classList.add("on");
    },
    { passive: true }
  );

  function maxTravel() {
    const dockW = dock.clientWidth;
    const btnW = cta.offsetWidth;
    return Math.max(24, (dockW - btnW) / 2 - 10);
  }

  function tick() {
    const rect = cta.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = pointer.x - cx;
    const dy = pointer.y - cy;
    const dist = Math.hypot(dx, dy);
    const done = completeness();
    const travel = maxTravel();

    if (!reduced && finePointer && !busy) {
      if (done < 2) {
        const radius = 170 - done * 36;
        if (dist < radius) {
          const force = (1 - dist / radius) * (1 - done * 0.42) * travel;
          const nx = dx / (dist || 1);
          tx = clamp(-nx * force * 1.15, -travel, travel);
          ty = clamp(-(dy / (dist || 1)) * force * 0.12, -6, 6);
          r = clamp(-nx * 7, -8, 8);
        } else {
          tx += (0 - tx) * 0.08;
          ty += (0 - ty) * 0.08;
          r += (0 - r) * 0.08;
        }
        scale += (1 - scale) * 0.12;
      } else {
        const mag = dist < 130 ? 1 - dist / 130 : 0;
        tx = clamp(dx * 0.12 * mag, -18, 18);
        ty = clamp(dy * 0.08 * mag, -7, 7);
        r = clamp(dx * 0.02 * mag, -4, 4);
        scale += ((1 + mag * 0.035) - scale) * 0.14;
      }
    } else {
      tx = 0;
      ty = 0;
      r = 0;
      scale = 1;
    }

    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    cta.style.setProperty("--x", `${x}px`);
    cta.style.setProperty("--y", `${y}px`);
    cta.style.setProperty("--r", `${r}deg`);
    cta.style.setProperty("--s", String(scale));
    dockGlow.style.transform = `translate(${x * 0.35}px, -50%)`;

    if (!reduced && card) {
      const cr = card.getBoundingClientRect();
      const px = (pointer.x - (cr.left + cr.width / 2)) / cr.width;
      const py = (pointer.y - (cr.top + cr.height / 2)) / cr.height;
      const near =
        pointer.x > cr.left - 80 &&
        pointer.x < cr.right + 80 &&
        pointer.y > cr.top - 80 &&
        pointer.y < cr.bottom + 80;
      const aimX = near ? clamp(px * 10, -8, 8) : 0;
      const aimY = near ? clamp(py * 8, -6, 6) : 0;
      cardTx += (aimX - cardTx) * 0.08;
      cardTy += (aimY - cardTy) * 0.08;
      cardRy += (clamp(px * 4, -3.2, 3.2) - cardRy) * 0.08;
      cardRx += (clamp(-py * 3.4, -2.6, 2.6) - cardRx) * 0.08;
      card.style.setProperty("--tx", `${cardTx * 0.35}px`);
      card.style.setProperty("--ty", `${cardTy * 0.25}px`);
      card.style.setProperty("--rx", `${cardRx}deg`);
      card.style.setProperty("--ry", `${cardRy}deg`);
      card.style.setProperty("--sx", `${50 + px * 30}%`);
      card.style.setProperty("--sy", `${18 + py * 20}%`);
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  cta.addEventListener("pointerdown", () => {
    if (completeness() === 2) cta.classList.add("is-press");
  });
  window.addEventListener("pointerup", () => cta.classList.remove("is-press"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (busy) return;
    if (completeness() < 2) {
      statusLine.textContent = "Fill both fields — or use Tab, then Enter.";
      form.reportValidity();
      return;
    }

    busy = true;
    cta.classList.add("is-busy", "is-press");
    ctaLabel.textContent = "Signing in…";
    await wait(720);
    cta.classList.remove("is-press");
    cta.classList.add("is-done", "is-ready");
    ctaLabel.innerHTML = "<span aria-hidden='true'>✓</span> Logged in";
    statusLine.textContent = "Session held. Welcome back.";
    flash("Authenticated — demo only.");
    await wait(1600);
    busy = false;
    cta.classList.remove("is-busy", "is-done");
    ctaLabel.textContent = "Log in";
    syncFields();
  });

  function spawnParticles() {
    if (reduced || !canvas) return;
    const ctx = canvas.getContext("2d");
    const dots = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      v: Math.random() * 0.00025 + 0.00008,
      a: Math.random() * 0.35 + 0.08,
    }));

    function resize() {
      canvas.width = innerWidth * devicePixelRatio;
      canvas.height = innerHeight * devicePixelRatio;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(58,239,210,1)";
      for (const d of dots) {
        d.y -= d.v;
        if (d.y < 0) d.y = 1;
        ctx.globalAlpha = d.a;
        ctx.beginPath();
        ctx.arc(d.x * canvas.width, d.y * canvas.height, d.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  spawnParticles();
  syncFields();

  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }
  function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
})();
