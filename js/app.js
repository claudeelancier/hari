(() => {
  const header = document.getElementById("site-header");
  const progress = document.querySelector(".scroll-progress");
  const megaBtn = document.getElementById("mega-btn");
  const megaItem = megaBtn && megaBtn.closest(".has-mega");
  const menuBtn = document.querySelector(".menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  const drawerClose = document.querySelector(".drawer-close");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 12);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = max > 0 ? `${(y / max) * 100}%` : "0%";
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const hero = document.querySelector(".hero");
  if (hero) requestAnimationFrame(() => hero.classList.add("is-ready"));

  if (megaBtn && megaItem) {
    megaBtn.addEventListener("click", () => {
      const open = megaItem.classList.toggle("is-open");
      megaBtn.setAttribute("aria-expanded", String(open));
    });
    megaBtn.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        megaItem.classList.remove("is-open");
        megaBtn.setAttribute("aria-expanded", "false");
        megaBtn.focus();
      }
    });
    document.addEventListener("click", (e) => {
      if (!megaItem.contains(e.target)) {
        megaItem.classList.remove("is-open");
        megaBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  const setDrawer = (open) => {
    if (!drawer || !menuBtn) return;
    drawer.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn && menuBtn.addEventListener("click", () => setDrawer(true));
  drawerClose && drawerClose.addEventListener("click", () => setDrawer(false));
  drawer && drawer.addEventListener("click", (e) => {
    if (e.target === drawer) setDrawer(false);
  });
  drawer && drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setDrawer(false)));

  if (!reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add("in");
          io.unobserve(el.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((n) => n.classList.add("in"));
  }

  const stage = document.querySelector(".hero-stage");
  const glow = document.querySelector(".hero-glow");
  if (stage && !reduce && finePointer) {
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stage.querySelectorAll(".float-card").forEach((card, i) => {
        const d = (i + 1) * 8;
        card.style.transform = `translate3d(${x * d}px, ${y * d}px, 0) rotateX(${-y * 6}deg) rotateY(${x * 8}deg)`;
      });
    });
  }
  if (glow && !reduce && finePointer) {
    document.addEventListener("pointermove", (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY - window.scrollY}px`;
    }, { passive: true });
  }

  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const run = (el) => {
      const end = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduce) { el.textContent = `${end}${suffix}`; return; }
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(end * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          run(en.target);
          cio.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => cio.observe(c));
  }

  document.querySelectorAll(".magnetic").forEach((btn) => {
    if (!finePointer || reduce) return;
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });
    btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
  });

  const cursor = document.querySelector(".cursor");
  const label = document.querySelector(".cursor-label");
  if (cursor && label && finePointer && window.innerWidth > 1024 && !reduce) {
    cursor.hidden = false;
    window.addEventListener("pointermove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      label.style.left = `${e.clientX}px`;
      label.style.top = `${e.clientY - 28}px`;
    });
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("pointerenter", () => {
        label.hidden = false;
        label.textContent = el.dataset.cursor || "View";
        label.style.opacity = "1";
        label.style.transform = "translate(-50%, -50%) scale(1)";
      });
      el.addEventListener("pointerleave", () => {
        label.style.opacity = "0";
        label.style.transform = "translate(-50%, -50%) scale(0)";
      });
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    const status = document.getElementById("formStatus");
    const submit = form.querySelector('[type="submit"]');
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const required = ["name", "email", "mobile", "subject", "message"];
      for (const key of required) {
        if (!String(data[key] || "").trim()) {
          status.className = "form-status err";
          status.textContent = "Please complete every field before sending.";
          return;
        }
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        status.className = "form-status err";
        status.textContent = "Please enter a valid email address.";
        return;
      }
      submit.disabled = true;
      status.className = "form-status";
      status.textContent = "Sending…";
      try {
        const res = await fetch("api/contact.php", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok || !json.ok) throw new Error(json.error || "Unable to send");
        status.className = "form-status ok";
        status.textContent = "Thank you. We received your message and will reply during business hours.";
        form.reset();
      } catch (err) {
        status.className = "form-status err";
        status.textContent = "Something went wrong. Please email admin@elancier.com or call us.";
      } finally {
        submit.disabled = false;
      }
    });
  }
})();
