(() => {
  const hero = document.getElementById("hero");
  const canvas = document.getElementById("petals");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const effects = ["circle", "wipe", "rise", "zoom", "flip"];

  const looks = [
    {
      kicker: "Temple city",
      title: "Madurai Meenakshi",
      lede: "Begin at home — Meenakshi’s gopuram, then Rameshwaram, Kanyakumari and the Tamil Nadu temple trail with SMTA’s own escorts.",
    },
    {
      kicker: "Pilgrimage",
      title: "Rameshwaram corridor",
      lede: "Madurai–Rameshwaram packages from ₹5,500, plus longer circuits to Kanyakumari, Tanjore and Trichy on fixed departures.",
    },
    {
      kicker: "Cruise & ferry",
      title: "Sri Lanka 5 days",
      lede: "Special offer: Sri Lanka ferry tour, last seats — call 9791848265. Also exclusive Sri Lanka holidays from ₹54,990.",
    },
    {
      kicker: "International",
      title: "Dubai & Abu Dhabi",
      lede: "IATA-authorised outbound holidays — Dubai from ₹79,990, plus Singapore, Malaysia, Egypt, Europe and more.",
    },
    {
      kicker: "North India",
      title: "Kasi & Ayodhya",
      lede: "Train and flight pilgrimages to Kasi, Ayodhya, Shirdi, Badrinath–Kedarnath — lakhs of travellers since 1985.",
    },
  ];

  const slides = [...document.querySelectorAll("#slides img")];
  const phrases = [...document.querySelectorAll("#phrase span")];
  const buttons = [...document.querySelectorAll("[data-look]")];
  const lede = document.getElementById("lede");
  const kicker = document.getElementById("look-kicker");
  const title = document.getElementById("look-title");
  const badge = document.getElementById("look-badge");
  const frame = document.querySelector("[data-tilt]");

  let index = 0;
  let timer;

  const activate = (nodes, i) => {
    nodes.forEach((node, n) => node.classList.toggle("is-active", n === i));
  };

  const show = (next) => {
    index = (next + looks.length) % looks.length;
    hero.dataset.fx = effects[index];
    const look = looks[index];
    activate(slides, index);
    activate(phrases, index);
    buttons.forEach((btn) => btn.classList.toggle("is-active", Number(btn.dataset.look) === index));
    lede.classList.add("is-swap");
    window.setTimeout(() => {
      lede.textContent = look.lede;
      kicker.textContent = look.kicker;
      title.textContent = look.title;
      badge.textContent = String(index + 1).padStart(2, "0");
      lede.classList.remove("is-swap");
    }, 180);
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => show(index + 1), 4200);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      show(Number(btn.dataset.look));
      play();
    });
  });

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      el.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.2}px, ${(event.clientY - rect.top - rect.height / 2) * 0.25}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0)";
    });
  });

  window.addEventListener("pointermove", (event) => {
    const mx = (event.clientX / window.innerWidth - 0.5) * 16;
    const my = (event.clientY / window.innerHeight - 0.5) * 12;
    document.querySelector(".clouds").style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
  });

  document.querySelectorAll("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count);
    if (reduced) {
      el.textContent = String(end);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1400);
      el.textContent = String(Math.round(end * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  const ctx = canvas.getContext("2d");
  const bits = [];
  const colors = ["#f97316", "#14b8a6", "#eab308", "#fb7185", "#38bdf8"];

  const resize = () => {
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
  };

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -12;
      this.r = Math.random() * 5 + 2;
      this.s = Math.random() * 0.9 + 0.35;
      this.w = (Math.random() - 0.5) * 0.8;
      this.c = colors[Math.floor(Math.random() * colors.length)];
      this.a = Math.random() * 0.45 + 0.25;
    }

    update() {
      this.y += this.s;
      this.x += Math.sin(this.y / 30) * 0.6 + this.w;
      if (this.y > canvas.height + 10) this.reset(false);
    }

    draw() {
      ctx.fillStyle = this.c;
      ctx.globalAlpha = this.a;
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.r, this.r * 0.6, this.y / 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  const init = () => {
    bits.length = 0;
    for (let i = 0; i < 55; i += 1) bits.push(new Petal());
  };

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bits.forEach((bit) => {
      bit.update();
      bit.draw();
    });
    requestAnimationFrame(render);
  };

  resize();
  init();
  if (!reduced) render();
  play();
  window.addEventListener("resize", () => {
    resize();
    init();
  });
})();
