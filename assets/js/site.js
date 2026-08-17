(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content;
  }

  var NAV = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["destinations.html", "Destinations"],
    ["packages.html", "Tour Packages"],
    ["international.html", "International Tours"],
    ["domestic.html", "Domestic Tours"],
    ["contact.html", "Contact"]
  ];

  function currentFile() {
    var p = location.pathname.split("/").pop() || "index.html";
    if (!p.endsWith(".html")) p = "index.html";
    return p;
  }

  function navLinks(mobile) {
    var file = currentFile();
    return NAV.map(function (item) {
      var cur = item[0] === file ? ' aria-current="page"' : "";
      return '<a href="' + item[0] + '"' + cur + ">" + item[1] + "</a>";
    }).join(mobile ? "" : "");
  }

  function renderHeader() {
    var mount = document.getElementById("site-header");
    if (!mount) return;
    var isHome = currentFile() === "index.html";
    mount.className = "site-header" + (isHome ? "" : " inner-solid is-solid");
    mount.innerHTML =
      '<div class="header-inner">' +
        '<a class="logo" href="index.html" aria-label="Srimurugan Travel home">' +
          '<span class="logo-mark">SM</span>' +
          '<span class="logo-text"><strong>Srimurugan Travel</strong><span>Since 1985 · IATA</span></span>' +
        "</a>" +
        '<nav class="nav" aria-label="Primary">' + navLinks(false) +
          '<a class="btn btn-gold" href="enquire.html">Enquiry</a>' +
        "</nav>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu"><span></span><span></span><span></span></button>' +
      "</div>" +
      '<div class="mobile-panel" id="mobile-nav">' + navLinks(true) +
        '<a class="btn btn-gold" href="enquire.html">Enquiry</a>' +
      "</div>";
  }

  function renderFooter() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;
    mount.className = "site-footer";
    mount.innerHTML =
      '<div class="container footer-grid">' +
        "<div>" +
          '<a class="logo" href="index.html"><span class="logo-mark">SM</span><span class="logo-text"><strong>Srimurugan Travel</strong><span>Sri Murugan Travel Agency</span></span></a>' +
          '<p style="margin-top:16px;max-width:36ch">Established in 1985 in Madurai. IATA authorised and recognised as an Approved Tour Operator by the Department of Tourism, Government of India. Pilgrimage, leisure, education and honeymoon journeys by road, rail, flight and cruise.</p>' +
          '<a class="btn btn-gold" style="margin-top:18px" href="enquire.html">Plan my trip</a>' +
        "</div>" +
        "<div><h4>Quick links</h4>" +
          '<a href="about.html">About us</a><a href="packages.html">Tour packages</a>' +
          '<a href="international.html">International</a><a href="domestic.html">Domestic</a>' +
          '<a href="train.html">Train tours</a><a href="customize.html">Customise a tour</a>' +
        "</div>" +
        "<div><h4>Destinations</h4>" +
          '<a href="international.html#maldives">Maldives</a><a href="international.html#dubai">Dubai</a>' +
          '<a href="international.html#singapore">Singapore</a><a href="domestic.html#kashmir">Kashmir</a>' +
          '<a href="domestic.html#kerala">Kerala</a><a href="domestic.html#goa">Goa</a>' +
        "</div>" +
        "<div><h4>Contact</h4>" +
          "<p>10, North Avani Moola Street,<br>Near Meenakshi Temple,<br>Madurai, Tamil Nadu 625001</p>" +
          '<p style="margin-top:10px"><a href="tel:+919791848265">+91 97918 48265</a>' +
          '<a href="tel:+919842117473">+91 98421 17473</a>' +
          '<a href="mailto:info@srimurugantravel.com">info@srimurugantravel.com</a></p>' +
          '<p style="margin-top:10px"><a href="https://wa.me/919842117473" rel="noopener" target="_blank">WhatsApp</a></p>' +
        "</div>" +
      "</div>" +
      '<div class="container footer-bottom">' +
        "<span>© 2026 Sri Murugan Travel Agency. All rights reserved.</span>" +
        '<span><a href="privacy.html">Privacy policy</a> · <a href="terms.html">Terms</a> · <a href="contact.html">Contact</a></span>' +
      "</div>";
  }

  function headerScroll() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var onHome = currentFile() === "index.html";
    function update() {
      if (!onHome) {
        header.classList.add("is-solid", "inner-solid");
        return;
      }
      header.classList.toggle("is-solid", window.scrollY > 24);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function mobileNav() {
    var btn = document.querySelector(".nav-toggle");
    var panel = document.getElementById("mobile-nav");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  function heroSlider() {
    var root = document.querySelector("[data-hero]");
    if (!root || !window.SMT) return;
    var slides = SMT.heroSlides;
    var stage = root.querySelector(".hero-slides");
    var copyLabel = root.querySelector("[data-hero-label]");
    var copyTitle = root.querySelector("[data-hero-title]");
    var copySub = root.querySelector("[data-hero-sub]");
    var copyCta = root.querySelector("[data-hero-cta]");
    var dotsWrap = root.querySelector(".hero-dots");
    var i = 0;
    var timer;
    var interval = 5000;

    slides.forEach(function (s, idx) {
      var d = document.createElement("div");
      d.className = "hero-slide" + (idx === 0 ? " is-active" : "");
      d.setAttribute("data-index", String(idx));
      var img = document.createElement("img");
      img.src = s.image;
      img.alt = s.title + " — " + s.subtitle;
      img.decoding = "async";
      if (idx === 0) img.setAttribute("fetchpriority", "high");
      else img.loading = "lazy";
      d.appendChild(img);
      stage.appendChild(d);
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Show slide " + (idx + 1) + ": " + s.title);
      if (idx === 0) b.className = "is-active";
      b.addEventListener("click", function () { go(idx, true); });
      dotsWrap.appendChild(b);
    });

    function preload(n) {
      var s = slides[n];
      if (!s) return;
      var im = new Image();
      im.src = s.image;
    }

    function setCopy(s) {
      copyLabel.textContent = s.label;
      copyTitle.textContent = s.title;
      copySub.textContent = s.subtitle;
      copyCta.textContent = s.cta;
      copyCta.href = s.href;
    }

    function go(n, user) {
      var nodes = stage.querySelectorAll(".hero-slide");
      var dots = dotsWrap.querySelectorAll("button");
      nodes[i].classList.remove("is-active");
      dots[i].classList.remove("is-active");
      i = (n + slides.length) % slides.length;
      nodes[i].classList.add("is-active");
      dots[i].classList.add("is-active");
      setCopy(slides[i]);
      preload((i + 1) % slides.length);
      if (user) restart();
    }

    function restart() {
      clearInterval(timer);
      if (!reduce) timer = setInterval(function () { go(i + 1); }, interval);
    }

    setCopy(slides[0]);
    preload(1);
    if (!reduce) timer = setInterval(function () { go(i + 1); }, interval);

    root.querySelector("[data-hero-prev]").addEventListener("click", function () { go(i - 1, true); });
    root.querySelector("[data-hero-next]").addEventListener("click", function () { go(i + 1, true); });

    root.addEventListener("mouseenter", function () { clearInterval(timer); });
    root.addEventListener("mouseleave", restart);

    document.addEventListener("keydown", function (e) {
      if (!root.contains(document.activeElement) && document.activeElement !== document.body) return;
      if (e.key === "ArrowLeft") go(i - 1, true);
      if (e.key === "ArrowRight") go(i + 1, true);
    });

    var sx = 0;
    root.addEventListener("touchstart", function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1, true);
    });
  }

  function card(item, badge) {
    return (
      '<article class="pkg-card">' +
        '<div class="pkg-media"><a href="' + item.href + '">' +
          '<img src="' + item.image + '" alt="' + item.title + " in " + item.dest + '" loading="lazy">' +
          '<span class="chip">' + badge + "</span>" +
          '<span class="chip right">' + item.days + "</span></a></div>" +
        '<div class="pkg-body">' +
          "<h3>" + item.title + "</h3>" +
          '<div class="pkg-meta"><span>' + item.dest + " · " + item.code + '</span><span class="stars">★ 4.8</span></div>' +
          '<div class="highlights">' + item.highlights.join(" · ") + "</div>" +
          '<div class="pkg-meta"><span class="price">₹' + item.price + "*</span><span>Starting</span></div>" +
          '<div class="pkg-actions">' +
            '<a class="btn btn-navy" href="' + item.href + '">View details</a>' +
            '<a class="btn btn-outline" href="enquire.html?tour=' + encodeURIComponent(item.title) + '">Enquire</a>' +
          "</div></div></article>"
    );
  }

  function fillTrack(selector, list, badge) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = list.map(function (item) { return card(item, badge); }).join("");
  }

  function sliders() {
    document.querySelectorAll("[data-slider]").forEach(function (wrap) {
      var track = wrap.querySelector(".track");
      var prev = wrap.querySelector(".prev");
      var next = wrap.querySelector(".next");
      if (!track) return;
      function move(dir) {
        track.scrollBy({ left: dir * (track.clientWidth * 0.8), behavior: reduce ? "auto" : "smooth" });
      }
      if (prev) prev.addEventListener("click", function () { move(-1); });
      if (next) next.addEventListener("click", function () { move(1); });
    });
  }

  function destinations() {
    var grid = document.querySelector("[data-destinations]");
    if (!grid || !window.SMT) return;
    grid.innerHTML = SMT.destinations.map(function (d) {
      return (
        '<a class="dest-card" href="' + d.href + '">' +
          '<img src="' + d.image + '" alt="' + d.name + ", " + d.region + '" loading="lazy">' +
          '<div class="meta"><small>' + d.region + " · " + d.tours + "</small><h3>" + d.name + "</h3><p>" + d.desc + "</p></div>" +
        "</a>"
      );
    }).join("");
  }

  function gallery() {
    var g = document.querySelector("[data-gallery]");
    if (!g || !window.SMT) return;
    g.innerHTML = SMT.gallery.map(function (item) {
      return '<a href="' + item.image + '" data-lite><img src="' + item.image + '" alt="' + item.alt + '" loading="lazy"></a>';
    }).join("");
    var box = document.querySelector(".lightbox");
    if (!box) return;
    var img = box.querySelector("img");
    g.addEventListener("click", function (e) {
      var a = e.target.closest("a[data-lite]");
      if (!a) return;
      e.preventDefault();
      img.src = a.href;
      img.alt = a.querySelector("img").alt;
      box.classList.add("open");
    });
    box.querySelector("button").addEventListener("click", function () { box.classList.remove("open"); });
    box.addEventListener("click", function (e) { if (e.target === box) box.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") box.classList.remove("open");
    });
  }

  function testimonials() {
    var track = document.querySelector("[data-testimonials]");
    if (!track || !window.SMT) return;
    var list = SMT.testimonials.concat(SMT.testimonials);
    track.innerHTML = SMT.testimonials.map(function (t) {
      return (
        '<article class="t-card">' +
          '<div class="stars">★★★★★</div>' +
          "<p>“" + t.quote + "”</p>" +
          '<div class="person"><div class="avatar" aria-hidden="true">' + t.initial + "</div>" +
          "<div><strong>" + t.name + "</strong><br><span style='color:var(--muted);font-size:.85rem'>" + t.place + "</span></div></div>" +
        "</article>"
      );
    }).join("");
  }

  function packagePages() {
    var intl = document.querySelector("[data-packages='international']");
    var dom = document.querySelector("[data-packages='domestic']");
    var train = document.querySelector("[data-packages='train']");
    var all = document.querySelector("[data-packages='all']");
    if (intl) intl.innerHTML = SMT.internationalTours.map(function (i) { return card(i, "International"); }).join("");
    if (dom) dom.innerHTML = SMT.domesticTours.map(function (i) { return card(i, "Domestic"); }).join("");
    if (train) train.innerHTML = SMT.trainTours.map(function (i) { return card(i, "Train"); }).join("");
    if (all) {
      var merged = SMT.internationalTours.concat(SMT.domesticTours, SMT.trainTours);
      all.innerHTML = merged.map(function (i) {
        var badge = SMT.internationalTours.indexOf(i) >= 0 ? "International" : SMT.trainTours.indexOf(i) >= 0 ? "Train" : "Domestic";
        return card(i, badge);
      }).join("");
    }
  }

  function enquirePrefill() {
    var params = new URLSearchParams(location.search);
    var tour = params.get("tour");
    var dest = document.querySelector('[name="destination"]');
    if (tour && dest) dest.value = tour;
  }

  function forms() {
    document.querySelectorAll("form[data-enquire]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.reportValidity()) return;
        var box = form.querySelector("[data-success]");
        if (box) {
          box.hidden = false;
          form.querySelectorAll("input, select, textarea, button[type=submit]").forEach(function (n) {
            if (n.type !== "hidden") n.disabled = true;
          });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    headerScroll();
    mobileNav();
    heroSlider();
    if (window.SMT) {
      fillTrack("[data-intl-track]", SMT.internationalTours, "International");
      fillTrack("[data-dom-track]", SMT.domesticTours, "Domestic");
      fillTrack("[data-train-track]", SMT.trainTours, "Train");
    }
    sliders();
    destinations();
    gallery();
    testimonials();
    packagePages();
    enquirePrefill();
    forms();
  });
})();
