(function () {
  var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hero = document.querySelector(".hero");
  var media = document.querySelector(".hero__media");

  if (!hero || !media || mediaQuery.matches || window.matchMedia("(max-width: 1023px)").matches) {
    return;
  }

  var rafId = 0;
  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;

  function onMove(event) {
    var rect = hero.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width - 0.5;
    var y = (event.clientY - rect.top) / rect.height - 0.5;
    targetX = x;
    targetY = y;
    if (!rafId) {
      rafId = requestAnimationFrame(tick);
    }
  }

  function tick() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    media.style.transform =
      "translate3d(" + (currentX * -12) + "px, " + (currentY * -8) + "px, 0)";

    if (
      Math.abs(targetX - currentX) > 0.001 ||
      Math.abs(targetY - currentY) > 0.001
    ) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = 0;
    }
  }

  hero.addEventListener("mousemove", onMove, { passive: true });
})();
