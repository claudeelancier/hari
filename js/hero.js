(function () {
  "use strict";

  var hero = document.getElementById("hero");
  var canvas = document.getElementById("hero-canvas");
  if (!hero || !canvas) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d");
  var pointer = { x: 0.62, y: 0.42 };
  var smooth = { x: 0.62, y: 0.42 };
  var width = 0;
  var height = 0;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var start = performance.now();

  function resize() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function ribbon(t, offset, amp, hueShift) {
    var steps = 48;
    var originX = width * (0.42 + smooth.x * 0.08);
    var originY = height * (0.08 + offset);
    ctx.beginPath();
    var i;
    for (i = 0; i <= steps; i += 1) {
      var p = i / steps;
      var x = originX + p * width * 0.72;
      var y =
        originY +
        Math.sin(p * 6.2 + t * 1.15 + offset * 8) * amp +
        Math.sin(p * 11.4 - t * 0.85) * (amp * 0.38) +
        Math.sin(p * 3.1 + t * 0.4) * 18 +
        (smooth.y - 0.5) * 70 * p;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    for (i = steps; i >= 0; i -= 1) {
      var q = i / steps;
      var x2 = originX + q * width * 0.72 - 10;
      var y2 =
        originY +
        140 +
        Math.sin(q * 6.2 + t * 1.15 + offset * 8 + 0.4) * amp +
        Math.sin(q * 9.1 - t * 0.7) * (amp * 0.3) +
        (smooth.y - 0.5) * 40 * q;
      ctx.lineTo(x2, y2);
    }
    ctx.closePath();

    var g = ctx.createLinearGradient(originX, originY, width, height);
    g.addColorStop(0, "rgba(255, 248, 236, 0.18)");
    g.addColorStop(0.35 + hueShift, "rgba(232, 188, 118, 0.55)");
    g.addColorStop(0.62, "rgba(196, 92, 38, 0.42)");
    g.addColorStop(1, "rgba(154, 196, 188, 0.28)");
    ctx.fillStyle = g;
    ctx.fill();
  }

  function motes(t) {
    var n = 36;
    var i;
    for (i = 0; i < n; i += 1) {
      var seed = i * 17.17;
      var x = ((seed * 13) % width) + Math.sin(t * 0.35 + i) * 24;
      var y = height - ((t * 18 + seed * 21) % (height + 80));
      ctx.beginPath();
      ctx.fillStyle = "rgba(176, 141, 87," + (0.18 + (i % 5) * 0.06) + ")";
      ctx.arc(x, y, 1.6 + (i % 3), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function tick(now) {
    var t = (now - start) / 1000;
    smooth.x += (pointer.x - smooth.x) * 0.06;
    smooth.y += (pointer.y - smooth.y) * 0.06;
    ctx.clearRect(0, 0, width, height);
    if (!reduceMotion) {
      ribbon(t, 0.08, 54, 0);
      ribbon(t * 0.92 + 1.2, 0.22, 70, 0.08);
      ribbon(t * 1.08 + 2.4, 0.38, 46, -0.05);
      motes(t);
    }
    requestAnimationFrame(tick);
  }

  hero.addEventListener("pointermove", function (event) {
    var rect = hero.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / Math.max(rect.width, 1);
    pointer.y = (event.clientY - rect.top) / Math.max(rect.height, 1);
    hero.style.setProperty("--mx", pointer.x);
    hero.style.setProperty("--my", pointer.y);
  });

  function setupCursor() {
    var root = document.querySelector(".cursor");
    var ring = document.querySelector(".cursor__ring");
    var dot = document.querySelector(".cursor__dot");
    if (!root || !ring || !dot) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("has-cursor");
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var rx = x;
    var ry = y;
    window.addEventListener("pointermove", function (event) {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
    });
    var links = document.querySelectorAll("a");
    var i;
    for (i = 0; i < links.length; i += 1) {
      links[i].addEventListener("pointerenter", function () {
        root.classList.add("is-hot");
      });
      links[i].addEventListener("pointerleave", function () {
        root.classList.remove("is-hot");
      });
    }
    function follow() {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(follow);
    }
    follow();
  }

  resize();
  window.addEventListener("resize", resize);
  setupCursor();
  requestAnimationFrame(tick);
})();
