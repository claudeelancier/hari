(() => {
  const destinations = [
    {
      src: "./assets/smta-meenakshi.png",
      name: "MEENAKSHI",
      tamil: "மீனாட்சி · மதுரை",
      kicker: "Temple city",
      lede: "Start at Meenakshi’s gopuram, then the Tamil Nadu temple trail with SMTA escorts — road, rail, flight and cruise since 1985.",
      fare: 5500,
    },
    {
      src: "./assets/smta-rameshwaram.png",
      name: "RAMESWARAM",
      tamil: "ராமேஸ்வரம்",
      kicker: "Pilgrimage corridor",
      lede: "Madurai–Rameshwaram from ₹5,500, plus Kanyakumari, Tanjore and Trichy on fixed departures from Madurai.",
      fare: 5500,
    },
    {
      src: "./assets/smta-srilanka.png",
      name: "SRI LANKA",
      tamil: "இலங்கை படகு",
      kicker: "Ferry · 5 days",
      lede: "Sri Lanka ferry special — last seats. Call 9791848265. Exclusive island holidays also from ₹54,990.",
      fare: 43000,
    },
    {
      src: "./assets/smta-dubai.png",
      name: "DUBAI",
      tamil: "துபாய் · அபுதாபி",
      kicker: "IATA outbound",
      lede: "Dubai / Abu Dhabi from ₹79,990, plus Singapore, Malaysia, Egypt and Europe — authorised IATA agent.",
      fare: 79990,
    },
    {
      src: "./assets/smta-kasi.png",
      name: "KASI",
      tamil: "காசி · அயோத்தி",
      kicker: "North pilgrimage",
      lede: "Kasi, Ayodhya, Shirdi, Badrinath–Kedarnath by train and flight. Lakhs of travellers with SMTA.",
      fare: 24990,
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cols = window.matchMedia("(max-width: 960px)").matches ? 4 : 6;
  const rows = window.matchMedia("(max-width: 960px)").matches ? 5 : 4;
  const hero = document.getElementById("hero");
  const mosaic = document.getElementById("mosaic");
  const slot = document.getElementById("slot");
  const bars = document.getElementById("bars");
  const polaroids = document.getElementById("polaroids");
  const trail = document.getElementById("trail");
  const kickerEl = document.getElementById("kicker");
  const tamilEl = document.getElementById("tamil");
  const ledeEl = document.getElementById("lede");
  const fareEl = document.getElementById("fare");

  let index = 0;
  let timer;
  let fareValue = destinations[0].fare;
  let typeTimer;

  destinations.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item.name;
    slot.appendChild(span);
  });

  destinations.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = `<span>0${i + 1}</span><i><em></em></i><b>${item.name}</b>`;
    if (i === 0) btn.className = "is-active";
    btn.addEventListener("click", () => go(i, true));
    bars.appendChild(btn);

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<img src="${item.src}" alt="${item.name}"><b>${item.name}</b>`;
    polaroids.appendChild(card);
  });

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.style.transitionDelay = `${(c + r) * 55}ms`;
      const a = document.createElement("div");
      const b = document.createElement("div");
      a.className = "tile__face tile__a";
      b.className = "tile__face tile__b";
      const pos = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;
      [a, b].forEach((face) => {
        face.style.backgroundPosition = pos;
        face.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
      });
      a.style.backgroundImage = `url("${destinations[0].src}")`;
      b.style.backgroundImage = `url("${destinations[1].src}")`;
      tile.append(a, b);
      mosaic.appendChild(tile);
    }
  }

  const tiles = [...document.querySelectorAll(".tile")];
  const cards = [...document.querySelectorAll(".card")];
  const barBtns = [...bars.querySelectorAll("button")];

  const paint = (faceSel, src) => {
    tiles.forEach((tile) => {
      tile.querySelector(faceSel).style.backgroundImage = `url("${src}")`;
    });
  };

  const typeKicker = (text) => {
    window.clearInterval(typeTimer);
    kickerEl.classList.add("is-type");
    kickerEl.textContent = "";
    let i = 0;
    typeTimer = window.setInterval(() => {
      kickerEl.textContent = text.slice(0, i + 1);
      i += 1;
      if (i >= text.length) {
        window.clearInterval(typeTimer);
        kickerEl.classList.remove("is-type");
      }
    }, 38);
  };

  const tickFare = (target) => {
    const from = fareValue;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 650);
      fareValue = Math.round(from + (target - from) * (1 - (1 - t) ** 3));
      fareEl.textContent = fareValue.toLocaleString("en-IN");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const stackCards = () => {
    cards.forEach((card, i) => {
      const d = (i - index + cards.length) % cards.length;
      card.classList.toggle("is-out", false);
      if (d === cards.length - 1 && cards.length > 2) {
        card.style.transform = "translate(9rem, -7rem) rotate(16deg)";
        card.style.opacity = "0";
        card.style.zIndex = "0";
        return;
      }
      const rot = (d - 1) * 7;
      const x = d * 10;
      const y = d * -12;
      card.style.zIndex = String(10 - d);
      card.style.opacity = d > 2 ? "0" : "1";
      card.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
    });
  };

  const go = (next, user) => {
    const from = index;
    index = (next + destinations.length) % destinations.length;
    const item = destinations[index];
    const hidden = tiles[0].classList.contains("is-flip") ? ".tile__a" : ".tile__b";
    paint(hidden, item.src);
    tiles.forEach((tile) => tile.classList.toggle("is-flip"));
    slot.style.transform = `translateY(${-index * 0.92}em)`;
    barBtns.forEach((btn, i) => btn.classList.toggle("is-active", i === index));
    typeKicker(item.kicker);
    tamilEl.textContent = item.tamil;
    ledeEl.textContent = item.lede;
    tickFare(item.fare);
    const flying = cards[from];
    flying.classList.add("is-out");
    window.setTimeout(() => {
      flying.classList.remove("is-out");
      stackCards();
    }, 500);
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go(index + 1, false), 5000);
  };

  window.addEventListener("pointermove", (event) => {
    const dot = document.createElement("span");
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    trail.appendChild(dot);
    window.setTimeout(() => dot.remove(), 700);
    const mx = (event.clientX / window.innerWidth - 0.5) * 8;
    const my = (event.clientY / window.innerHeight - 0.5) * 8;
    tiles.forEach((tile) => {
      const face = tile.querySelector(tile.classList.contains("is-flip") ? ".tile__b" : ".tile__a");
      const pos = face.style.backgroundPosition.split(" ");
      face.style.backgroundPosition = `calc(${pos[0]} + ${mx}px) calc(${pos[1] || "50%"} + ${my}px)`;
    });
  });

  typeKicker(destinations[0].kicker);
  ledeEl.textContent = destinations[0].lede;
  stackCards();

  window.setTimeout(() => {
    hero.classList.remove("is-booting");
    play();
  }, reduced ? 0 : 1200);
})();
