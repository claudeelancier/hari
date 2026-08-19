(() => {
  const hero = document.getElementById("hero");
  const canvas = document.getElementById("particles");
  const spotlight = document.getElementById("spotlight");
  const cursor = document.querySelector(".cursor");
  const ring = document.querySelector(".cursor__ring");
  const dot = document.querySelector(".cursor__dot");
  const tiltEl = document.querySelector("[data-tilt]");
  const media = document.querySelector("[data-parallax]");
  const words = document.querySelectorAll(".hero__word");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  words.forEach((word) => {
    word.style.setProperty("--d", word.dataset.delay || "0");
  });

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
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

  const looks = [
    {
      lede: "Silk, gold leaf, and candlelit marble — a private salon for those who collect atmosphere, not merely objects.",
      look: "Look 07 · Salon Noir",
      fabric: "Champagne silk",
      jewel: "Provenance gold",
      seal: "07",
    },
    {
      lede: "A gilded stair, a held breath, cloth cut so the light itself becomes the garment.",
      look: "Look 12 · Escalier",
      fabric: "Atelier gold",
      jewel: "Palace marble",
      seal: "12",
    },
    {
      lede: "Diamonds against black velvet — provenance worn as quietly as candlelight.",
      look: "Look 18 · Provenance",
      fabric: "Diamond gold",
      jewel: "Night stair",
      seal: "18",
    },
  ];

  const backgrounds = [...document.querySelectorAll(".hero__bg")];
  const portraits = [...document.querySelectorAll(".hero__portrait-stack img")];
  const jewels = [...document.querySelectorAll(".hero__jewel-stack img")];
  const phrases = [...document.querySelectorAll("#phrase span")];
  const lookButtons = [...document.querySelectorAll("[data-look]")];
  const lede = document.getElementById("lede");
  const lookLabel = document.getElementById("look-label");
  const lookFabric = document.getElementById("look-fabric");
  const jewelLabel = document.getElementById("jewel-label");
  const lookSeal = document.getElementById("look-seal");

  let index = 0;
  let timer;

  const activate = (nodes, activeIndex) => {
    nodes.forEach((node, i) => node.classList.toggle("is-active", i === activeIndex));
  };

  const showLook = (next) => {
    index = (next + looks.length) % looks.length;
    const look = looks[index];
    hero.classList.add("is-changing");
    window.setTimeout(() => hero.classList.remove("is-changing"), 900);

    activate(backgrounds, index === 1 ? 1 : 0);
    activate(portraits, index);
    activate(jewels, index);
    activate(phrases, index);
    lookButtons.forEach((btn) => btn.classList.toggle("is-active", Number(btn.dataset.look) === index));

    lede.classList.add("is-swap");
    window.setTimeout(() => {
      lede.textContent = look.lede;
      lookLabel.textContent = look.look;
      lookFabric.textContent = look.fabric;
      jewelLabel.textContent = look.jewel;
      lookSeal.textContent = look.seal;
      lede.classList.remove("is-swap");
    }, 220);
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => showLook(index + 1), 4500);
  };

  lookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showLook(Number(btn.dataset.look));
      play();
    });
  });

  hero.addEventListener("mouseenter", play);
  play();

  let pointerX = window.innerWidth * 0.62;
  let pointerY = window.innerHeight * 0.42;
  let ringX = pointerX;
  let ringY = pointerY;

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    spotlight.style.left = `${pointerX}px`;
    spotlight.style.top = `${pointerY}px`;

    const mx = (event.clientX / window.innerWidth - 0.5) * 22;
    const my = (event.clientY / window.innerHeight - 0.5) * 14;
    if (media) media.style.transform = `translate3d(${mx}px, ${my}px, 0)`;

    if (tiltEl) {
      const rect = tiltEl.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      tiltEl.style.transform = `rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg)`;
    }

    cursor.classList.toggle("is-hover", Boolean(event.target.closest("a, button")));
  });

  hero.addEventListener("pointerleave", () => {
    if (tiltEl) tiltEl.style.transform = "rotateX(0deg) rotateY(0deg)";
    if (media) media.style.transform = "translate3d(0, 0, 0)";
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
      this.size = Math.random() * 1.7 + 0.3;
      this.speed = Math.random() * 0.42 + 0.1;
      this.drift = (Math.random() - 0.5) * 0.32;
      this.alpha = Math.random() * 0.5 + 0.12;
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
    const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 18000));
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
