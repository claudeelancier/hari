(function () {
  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("mobile-drawer");
  var backdrop = document.getElementById("drawer-backdrop");
  var closeBtn = document.querySelector(".drawer-close");

  function setOpen(open) {
    if (!drawer || !backdrop || !toggle) return;
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    backdrop.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle) toggle.addEventListener("click", function () { setOpen(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
  if (backdrop) backdrop.addEventListener("click", function () { setOpen(false); });
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
  }

  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 12);
  }, { passive: true });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".in-view").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".in-view").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
