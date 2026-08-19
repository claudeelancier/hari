(() => {
  const destinations = [
    {
      src: "./assets/smta-meenakshi.png",
      name: "MEENAKSHI",
      tamil: "மீனாட்சி · மதுரை",
      kicker: "Temple city",
      lede: "Start at Meenakshi’s gopuram, then the Tamil Nadu temple trail with SMTA escorts — road, rail, flight and cruise since 1985.",
      fare: 5500,
      enter: "zoom",
    },
    {
      src: "./assets/smta-rameshwaram.png",
      name: "RAMESWARAM",
      tamil: "ராமேஸ்வரம்",
      kicker: "Pilgrimage corridor",
      lede: "Madurai–Rameshwaram from ₹5,500, plus Kanyakumari, Tanjore and Trichy on fixed departures from Madurai.",
      fare: 5500,
      enter: "up",
    },
    {
      src: "./assets/smta-srilanka.png",
      name: "SRI LANKA",
      tamil: "இலங்கை படகு",
      kicker: "Ferry · 5 days",
      lede: "Sri Lanka ferry special — last seats. Call 9791848265. Exclusive island holidays also from ₹54,990.",
      fare: 43000,
      enter: "swing",
    },
    {
      src: "./assets/smta-dubai.png",
      name: "DUBAI",
      tamil: "துபாய் · அபுதாபி",
      kicker: "IATA outbound",
      lede: "Dubai / Abu Dhabi from ₹79,990, plus Singapore, Malaysia, Egypt and Europe — authorised IATA agent.",
      fare: 79990,
      enter: "drop",
    },
    {
      src: "./assets/smta-kasi.png",
      name: "KASI",
      tamil: "காசி · அயோத்தி",
      kicker: "North pilgrimage",
      lede: "Kasi, Ayodhya, Shirdi, Badrinath–Kedarnath by train and flight. Lakhs of travellers with SMTA.",
      fare: 24990,
      enter: "iris",
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scenesEl = document.getElementById("scenes");
  const arrivals = document.getElementById("arrivals");
  const hud = document.getElementById("hud");
  const title = document.getElementById("title");
  const kicker = document.getElementById("kicker");
  const tamil = document.getElementById("tamil");
  const lede = document.getElementById("lede");
  const fareEl = document.getElementById("fare");
  const num = document.getElementById("num");

  let index = 0;
  let timer;
  let fareValue = destinations[0].fare;

  destinations.forEach((item, i) => {
    const scene = document.createElement("figure");
    scene.className = `scene${i === 0 ? " is-in" : ""}`;
    scene.dataset.enter = item.enter;
    scene.innerHTML = `<img src="${item.src}" alt="${item.name}">`;
    scenesEl.appendChild(scene);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = i === 0 ? "is-active" : "";
    btn.innerHTML = `<img src="${item.src}" alt=""><span>${item.name}</span>`;
    btn.addEventListener("click", () => go(i, true));
    arrivals.appendChild(btn);
  });

  const scenes = [...document.querySelectorAll(".scene")];
  const buttons = [...arrivals.querySelectorAll("button")];

  const replayHud = () => {
    hud.classList.remove("is-refresh");
    void hud.offsetWidth;
    hud.classList.add("is-refresh");
    hud.querySelectorAll(".in").forEach((el, i) => {
      el.style.animationDelay = `${0.05 + i * 0.07}s`;
    });
  };

  const tickFare = (target) => {
    const from = fareValue;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 600);
      fareValue = Math.round(from + (target - from) * (1 - (1 - t) ** 3));
      fareEl.textContent = fareValue.toLocaleString("en-IN");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const go = (next, user) => {
    const prev = index;
    index = (next + destinations.length) % destinations.length;
    const item = destinations[index];
    scenes[prev].classList.remove("is-in");
    scenes[prev].classList.add("is-out");
    window.setTimeout(() => scenes[prev].classList.remove("is-out"), 700);
    const incoming = scenes[index];
    incoming.classList.remove("is-in");
    void incoming.offsetWidth;
    incoming.classList.add("is-in");
    title.textContent = item.name;
    kicker.textContent = item.kicker;
    tamil.textContent = item.tamil;
    lede.textContent = item.lede;
    num.textContent = `${String(index + 1).padStart(2, "0")} / 05 · arriving`;
    tickFare(item.fare);
    buttons.forEach((btn, i) => btn.classList.toggle("is-active", i === index));
    replayHud();
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go(index + 1, false), 4800);
  };

  lede.textContent = destinations[0].lede;
  play();
})();
