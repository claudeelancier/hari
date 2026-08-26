(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const modal = document.getElementById("demo-modal");
  const closeBtn = document.querySelector(".modal-close");
  const form = document.getElementById("demo-form");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  const onScroll = () => {
    header?.classList.toggle("scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  const openModal = () => {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector("input")?.focus();
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-open-demo]").forEach((btn) => {
    btn.addEventListener("click", openModal);
  });
  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = form.querySelector(".form-ok");
    if (ok) ok.hidden = false;
    form.reset();
  });

  document.querySelectorAll(".chips button").forEach((chip) => {
    chip.addEventListener("click", () => {
      const user = document.querySelector(".chat .user");
      if (user) user.textContent = chip.textContent;
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
