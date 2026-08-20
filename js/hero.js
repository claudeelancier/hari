(() => {
  const destinations = [
    {
      src: "./assets/smta-meenakshi.png",
      kicker: "Temple city · 01",
      title: "Meenakshi",
      sub: "where every yatra begins",
      tamil: "மீனாட்சி · மதுரை",
      lede: "Start under the gopuram. SMTA runs pilgrimage, leisure and world tours by road, rail, flight and cruise from Madurai since 1985.",
      price: "From ₹5,500",
      accent: "#ea580c",
      wash: "#ffe0b8",
      spin: "rotateY(-28deg)",
    },
    {
      src: "./assets/smta-rameshwaram.png",
      kicker: "Pilgrimage · 02",
      title: "Rameswaram",
      sub: "pillars, sea, darshan",
      tamil: "ராமேஸ்வரம்",
      lede: "Madurai–Rameshwaram from ₹5,500, plus Kanyakumari, Tanjore and Trichy on fixed departures.",
      price: "From ₹5,500",
      accent: "#0f766e",
      wash: "#ccfbf1",
      spin: "rotateX(28deg)",
    },
    {
      src: "./assets/smta-srilanka.png",
      kicker: "Ferry · 03",
      title: "Sri Lanka",
      sub: "last seats on the ship",
      tamil: "இலங்கை படகு",
      lede: "Sri Lanka ferry special — call 9791848265. Exclusive island holidays also from ₹54,990.",
      price: "From ₹43,000",
      accent: "#0284c7",
      wash: "#e0f2fe",
      spin: "rotateZ(-12deg)",
    },
    {
      src: "./assets/smta-dubai.png",
      kicker: "IATA outbound · 04",
      title: "Dubai",
      sub: "Abu Dhabi beside it",
      tamil: "துபாய் · அபுதாபி",
      lede: "Dubai / Abu Dhabi from ₹79,990, plus Singapore, Malaysia, Egypt and Europe.",
      price: "From ₹79,990",
      accent: "#d97706",
      wash: "#fef3c7",
      spin: "rotateY(32deg) rotateX(-8deg)",
    },
    {
      src: "./assets/smta-kasi.png",
      kicker: "North India · 05",
      title: "Kasi",
      sub: "Ayodhya on the same path",
      tamil: "காசி · அயோத்தி",
      lede: "Kasi, Ayodhya, Shirdi and Char Dham by train and flight. Lakhs of travellers have gone with SMTA.",
      price: "From ₹24,990",
      accent: "#e11d48",
      wash: "#ffe4e6",
      spin: "rotateX(-30deg) rotateZ(6deg)",
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.getElementById("hero");
  const deck = document.getElementById("deck");
  const canvas = document.getElementById("sparks");
  let index = 0;
  let timer;
  let busy = false;

  const split = (text) =>
    [...text].map((ch, n) => `<span class="ch" style="animation-delay:${n * 38}ms">${ch === " " ? "&nbsp;" : ch}</span>`).join("");

  destinations.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = `card${i === 0 ? " is-hero" : ""}`;
    card.style.setProperty("--accent", item.accent);
    card.style.setProperty("--wash", item.wash);
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}">
      <div class="wash"></div>
      <div class="shine"></div>
      <span class="tag">${item.title}</span>
      <div class="copy">
        <p class="kicker">${item.kicker}</p>
        <h2>${split(item.title)}<em>${split(item.sub)}</em></h2>
        <p class="tamil">${item.tamil}</p>
        <p class="lede">${item.lede}</p>
        <div class="cta">
          <a href="https://www.srimurugantravel.com/">Book this journey</a>
          <span>${item.price}</span>
        </div>
      </div>`;
    card.addEventListener("click", (event) => {
      if (card.classList.contains("is-hero")) return;
      event.preventDefault();
      go(i, true);
    });
    card.addEventListener("pointermove", (event) => {
      if (card.classList.contains("is-hero") || reduced) return;
      const r = card.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - 0.5;
      const y = (event.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateY(${x * 16}deg) rotateX(${-y * 10}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      if (!card.classList.contains("is-hero")) card.style.transform = "";
    });
    deck.appendChild(card);
  });

  const cards = [...deck.querySelectorAll(".card")];

  const restartTimer = () => {
    const bar = document.querySelector(".timer");
    bar.replaceWith(bar.cloneNode(true));
  };

  const placeThumbs = () => {
    const thumbs = cards.filter((_, i) => i !== index);
    const gap = 1.1;
    const width = 16.5;
    const total = thumbs.length * width + (thumbs.length - 1) * gap;
    const start = Math.max(4, (100 - total) / 2);
    thumbs.forEach((card, t) => {
      card.style.left = `${start + t * (width + gap)}vw`;
      card.style.right = "auto";
      card.style.top = "auto";
      card.style.transform = "";
    });
  };

  const move = (card, first, spin, expand) => {
    const last = card.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / Math.max(last.width, 1);
    const sy = first.height / Math.max(last.height, 1);
    card.classList.add("is-moving");
    const start = {
      transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy}) ${expand ? spin : ""}`,
      borderRadius: expand ? "1.15rem" : "0px",
    };
    const mid = {
      transform: `translate(${dx * 0.42}px, ${dy * 0.42}px) scale(${sx * 0.55 + 0.45}, ${sy * 0.55 + 0.45}) ${spin}`,
      offset: 0.46,
    };
    const end = { transform: "none", borderRadius: expand ? "0px" : "1.15rem" };
    const anim = card.animate([start, mid, end], {
      duration: reduced ? 1 : 980,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
    anim.finished.then(() => card.classList.remove("is-moving"));
  };

  const go = (next, user) => {
    if (busy || next === index) return;
    busy = true;
    const outgoing = cards[index];
    const incoming = cards[next];
    const first = incoming.getBoundingClientRect();
    const outFirst = outgoing.getBoundingClientRect();
    const inSpin = destinations[next].spin;
    const outSpin = destinations[index].spin;
    index = next;
    outgoing.classList.remove("is-hero");
    incoming.classList.add("is-hero");
    incoming.style.left = "";
    incoming.style.top = "";
    incoming.style.transform = "";
    placeThumbs();
    move(incoming, first, inSpin, true);
    move(outgoing, outFirst, outSpin, false);
    restartTimer();
    window.setTimeout(() => {
      busy = false;
    }, 1000);
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    hero.classList.add("is-playing");
    timer = window.setInterval(() => go((index + 1) % cards.length, false), 5200);
  };

  const ctx = canvas.getContext("2d");
  const bits = [];
  const colors = ["#f97316", "#14b8a6", "#eab308", "#fb7185"];
  const resize = () => {
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
  };
  class Spark {
    constructor() {
      this.reset(true);
    }
    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 6;
      this.r = Math.random() * 2.4 + 0.6;
      this.s = Math.random() * 0.45 + 0.12;
      this.c = colors[Math.floor(Math.random() * colors.length)];
      this.a = Math.random() * 0.4 + 0.2;
    }
    update() {
      this.y -= this.s;
      this.x += Math.sin(this.y / 40) * 0.35;
      if (this.y < -8) {
        this.reset(false);
        this.y = canvas.height + 6;
      }
    }
    draw() {
      ctx.globalAlpha = this.a;
      ctx.fillStyle = this.c;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
  resize();
  for (let i = 0; i < 42; i += 1) bits.push(new Spark());
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bits.forEach((bit) => {
      bit.update();
      bit.draw();
    });
    requestAnimationFrame(render);
  };
  if (!reduced) render();
  window.addEventListener("resize", () => {
    resize();
    placeThumbs();
  });

  placeThumbs();
  play();
})();
