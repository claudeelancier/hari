(() => {
  const hero = document.getElementById("hero");
  const canvas = document.getElementById("particles");
  const spotlight = document.getElementById("spotlight");
  const cursor = document.querySelector(".cursor");
  const ring = document.querySelector(".cursor__ring");
  const dot = document.querySelector(".cursor__dot");
  const tiltEl = document.querySelector("[data-tilt]");
  const words = document.querySelectorAll(".hero__word");

  words.forEach((word) => {
    word.style.setProperty("--d", word.dataset.delay || "0");
  });

  const magnetic = document.querySelectorAll("[data-magnetic]");
  magnetic.forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });

  let pointerX = window.innerWidth * 0.7;
  let pointerY = window.innerHeight * 0.4;
  let ringX = pointerX;
  let ringY = pointerY;

  const moveSpotlight = () => {
    spotlight.style.left = `${pointerX}px`;
    spotlight.style.top = `${pointerY}px`;
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    moveSpotlight();

    if (tiltEl) {
      const rect = tiltEl.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      tiltEl.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
    }

    const target = event.target.closest("a, button");
    cursor.classList.toggle("is-hover", Boolean(target));
  });

  hero.addEventListener("pointerleave", () => {
    if (tiltEl) tiltEl.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

  const animateCursor = () => {
    ringX += (pointerX - ringX) * 0.18;
    ringY += (pointerY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    dot.style.left = `${pointerX}px`;
    dot.style.top = `${pointerY}px`;
    requestAnimationFrame(animateCursor);
  };

  const ctx = canvas.getContext("2d");
  const particles = [];
  const count = 70;

  const resize = () => {
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
  };

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 8;
      this.size = Math.random() * 1.6 + 0.3;
      this.speed = Math.random() * 0.35 + 0.08;
      this.drift = (Math.random() - 0.5) * 0.25;
      this.alpha = Math.random() * 0.45 + 0.15;
    }

    update() {
      this.y -= this.speed;
      this.x += this.drift;
      if (this.y < -6) this.reset(false);
    }

    draw() {
      ctx.fillStyle = `rgba(232, 211, 162, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const initParticles = () => {
    particles.length = 0;
    for (let i = 0; i < count; i += 1) particles.push(new Particle());
  };

  const renderParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(renderParticles);
  };

  resize();
  initParticles();
  renderParticles();
  animateCursor();
  window.addEventListener("resize", () => {
    resize();
    initParticles();
  });
})();
