(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;
  var wide = window.matchMedia("(min-width: 1024px)").matches;
  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  var mobile = document.getElementById("mobile-nav");
  var progress = document.getElementById("scroll-progress");

  function setNav(open) {
    document.body.classList.toggle("is-nav-open", open);
    if (mobile) {
      mobile.classList.toggle("is-open", open);
      mobile.setAttribute("aria-hidden", open ? "false" : "true");
    }
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setNav(!document.body.classList.contains("is-nav-open"));
    });
  }
  if (mobile) {
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setNav(false); });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });

  function onScroll() {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 16);
    if (progress) {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      progress.style.width = p + "%";
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var hero = document.querySelector(".hero-enter");
  if (hero) requestAnimationFrame(function () { hero.classList.add("is-ready"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        if (entry.target.classList.contains("statement")) entry.target.classList.add("is-lit");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal], [data-stagger], .statement").forEach(function (el) {
      if (reduce) el.classList.add("is-in", "is-lit");
      else io.observe(el);
    });

    var countIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        countIo.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      if (reduce) el.textContent = el.getAttribute("data-count");
      else countIo.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal], [data-stagger], .statement").forEach(function (el) {
      el.classList.add("is-in", "is-lit");
    });
  }

  function animateCount(el) {
    var end = parseFloat(el.getAttribute("data-count")) || 0;
    var dur = 900;
    var start = performance.now();
    function frame(now) {
      var t = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(end * eased);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var stage = document.querySelector("[data-tilt]");
  if (stage && fine && !reduce && wide) {
    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform = "rotateY(" + (x * 8) + "deg) rotateX(" + (-y * 6) + "deg)";
    });
    stage.addEventListener("pointerleave", function () { stage.style.transform = ""; });
  }

  document.querySelectorAll(".svc-item").forEach(function (item) {
    item.addEventListener("mouseenter", activateSvc);
    item.addEventListener("focus", activateSvc);
    item.addEventListener("click", activateSvc);
  });
  function activateSvc(e) {
    var item = e.currentTarget;
    var id = item.getAttribute("data-visual");
    document.querySelectorAll(".svc-item").forEach(function (n) { n.classList.toggle("is-active", n === item); });
    document.querySelectorAll(".svc-visual img").forEach(function (img) {
      img.classList.toggle("is-on", img.getAttribute("data-visual") === id);
    });
  }

  document.querySelectorAll(".industry-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".industry-btn").forEach(function (b) { b.classList.remove("is-on"); });
      btn.classList.add("is-on");
      var panel = document.querySelector(".industry-panel");
      if (panel) {
        panel.querySelector("h3").textContent = btn.textContent;
        panel.querySelector("p").textContent = btn.getAttribute("data-copy") || "";
      }
    });
  });

  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var buttons = group.querySelectorAll("[data-filter]");
    var items = document.querySelectorAll(group.getAttribute("data-filter-group"));
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-on", "is-checked"); });
        btn.classList.add("is-on", "is-checked");
        var f = btn.getAttribute("data-filter");
        items.forEach(function (item) {
          var show = f === "*" || item.classList.contains(f.replace(".", ""));
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  });

  if (fine && !reduce && window.innerWidth >= 1024) {
    var cur = document.createElement("div");
    cur.className = "cursor";
    document.body.appendChild(cur);
    document.addEventListener("pointermove", function (e) {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
    });
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("a, button, .work-card, .svc-item");
      cur.classList.toggle("is-hover", !!t);
      cur.classList.toggle("is-view", !!(t && t.classList.contains("work-card")));
    });
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.12;
        var y = (e.clientY - r.top - r.height / 2) * 0.12;
        btn.style.transform = "translate(" + x + "px," + y + "px)";
      });
      btn.addEventListener("pointerleave", function () { btn.style.transform = ""; });
    });
  }

  document.querySelectorAll('a[href$=".php"], a[href^="index"], a[href^="about"], a[href^="contact"]').forEach(function (a) {
    var href = a.getAttribute("href") || "";
    if (href.indexOf("#") === 0 || href.indexOf("javascript:") === 0 || a.target === "_blank") return;
    if (!/\.php|index|about|contact|career|client|web-|mobile|creative|online|portfolio/.test(href)) return;
    a.addEventListener("click", function () {
      if (a.hostname && a.hostname !== location.hostname) return;
      document.body.classList.add("is-leaving");
    });
  });
})();
