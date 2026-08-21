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

  const reveal = document.querySelectorAll(".js-animate");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add("in-view"); });
  }

  document.querySelectorAll("[data-prompt]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const log = document.getElementById("ai-log");
      if (!log) return;
      const user = document.createElement("div");
      user.className = "msg user";
      user.textContent = btn.getAttribute("data-prompt");
      const bot = document.createElement("div");
      bot.className = "msg bot";
      bot.textContent = btn.getAttribute("data-reply") || "Done. I prepared a summary in VeltroHR.";
      log.appendChild(user);
      log.appendChild(bot);
    });
  });
})();
