(function () {
  const header = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const modal = document.getElementById("demo-modal");
  const form = document.getElementById("demo-form");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      const open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-open-demo]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (!modal) return;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      const first = modal.querySelector("input");
      if (first) first.focus();
    });
  });

  document.querySelectorAll("[data-close-demo]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!modal) return;
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    });
  });

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const status = document.getElementById("demo-status");
      if (status) {
        status.textContent = "Thanks. A VeltroHR specialist will contact you shortly.";
      }
      form.reset();
    });
  }
})();
