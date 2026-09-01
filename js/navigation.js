(function () {
  const header = document.querySelector(".site-header");
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const scrollTop = document.querySelector(".scroll-top");

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    if (scrollTop) {
      if (window.scrollY > 400) scrollTop.classList.add("show");
      else scrollTop.classList.remove("show");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      const open = !mobileNav.classList.contains("open");
      mobileNav.classList.toggle("open", open);
      hamburger.classList.toggle("active", open);
      hamburger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });
  }

  document.querySelectorAll(".mobile-acc-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("aria-controls");
      const panel = id ? document.getElementById(id) : btn.nextElementSibling;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".mobile-acc-btn").forEach(function (other) {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          const oid = other.getAttribute("aria-controls");
          const op = oid ? document.getElementById(oid) : other.nextElementSibling;
          if (op) op.classList.remove("open");
        }
      });
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.classList.toggle("open", !expanded);
    });
  });

  if (scrollTop) {
    scrollTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav && mobileNav.classList.contains("open")) {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
})();
