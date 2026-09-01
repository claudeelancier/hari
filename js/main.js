(function () {
  function animateCounters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    const run = function (el) {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const target = parseFloat(el.getAttribute("data-count"));
      const decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const duration = 1600;
      const start = performance.now();
      function frame(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = prefix + val.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    };
    if (!("IntersectionObserver" in window)) {
      nums.forEach(run);
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          run(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  }

  function faq() {
    document.querySelectorAll(".faq-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const item = btn.closest(".faq-item");
        const group = item.parentElement;
        group.querySelectorAll(".faq-item").forEach(function (other) {
          if (other !== item) {
            other.classList.remove("open");
            const ob = other.querySelector(".faq-btn");
            if (ob) ob.setAttribute("aria-expanded", "false");
          }
        });
        const open = !item.classList.contains("open");
        item.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function pricing() {
    const toggle = document.querySelector(".switch");
    if (!toggle) return;
    const monthly = { starter: 19, pro: 39, biz: 79 };
    const yearly = { starter: 15, pro: 31, biz: 63 };
    toggle.addEventListener("click", function () {
      const yearlyOn = !toggle.classList.contains("yearly");
      toggle.classList.toggle("yearly", yearlyOn);
      toggle.setAttribute("aria-pressed", String(yearlyOn));
      document.querySelectorAll("[data-price]").forEach(function (el) {
        const key = el.getAttribute("data-price");
        const map = yearlyOn ? yearly : monthly;
        el.textContent = map[key];
      });
      document.querySelectorAll("[data-period]").forEach(function (el) {
        el.textContent = yearlyOn ? "/mo billed yearly" : "/month";
      });
    });
  }

  function tabs() {
    const tabRoot = document.querySelector("[data-tabs]");
    if (!tabRoot) return;
    const buttons = tabRoot.querySelectorAll("[data-tab]");
    const panels = document.querySelectorAll("[data-tab-panel]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-tab");
        buttons.forEach(function (b) { b.classList.toggle("active", b === btn); });
        panels.forEach(function (p) {
          p.classList.toggle("hidden", p.getAttribute("data-tab-panel") !== id);
        });
      });
    });
  }

  function filters() {
    document.querySelectorAll("[data-filter-group]").forEach(function (group) {
      const buttons = group.querySelectorAll("[data-filter]");
      const items = document.querySelectorAll("[data-cat]");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const val = btn.getAttribute("data-filter");
          buttons.forEach(function (b) { b.classList.toggle("active", b === btn); });
          items.forEach(function (item) {
            const cats = item.getAttribute("data-cat") || "";
            const show = val === "all" || cats.split(" ").indexOf(val) !== -1;
            item.classList.toggle("hidden", !show);
          });
        });
      });
    });
  }

  function forms() {
    function validEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    document.querySelectorAll("form[data-validate]").forEach(function (form) {
      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const msg = form.querySelector(".form-msg") || form.parentElement.querySelector(".form-msg");
        const email = form.querySelector("input[type='email']");
        const required = form.querySelectorAll("[required]");
        let ok = true;
        required.forEach(function (el) {
          if (!el.value.trim() || (el.type === "checkbox" && !el.checked)) ok = false;
        });
        if (email && !validEmail(email.value.trim())) ok = false;
        if (!ok) {
          if (msg) {
            msg.textContent = "Please check the highlighted fields and try again.";
            msg.className = "form-msg err";
          }
          return;
        }
        if (msg) {
          msg.textContent = "Thanks — we received your request.";
          msg.className = "form-msg ok";
        }
        form.reset();
      });
    });
  }

  animateCounters();
  faq();
  pricing();
  tabs();
  filters();
  forms();
})();
