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
  const worlds = document.getElementById("worlds");
  const pills = document.getElementById("pills");
  const mask = document.getElementById("mask");
  const kicker = document.getElementById("kicker");
  const tamil = document.getElementById("tamil");
  const lede = document.getElementById("lede");
  const fareEl = document.getElementById("fare");
  const num = document.getElementById("num");
  const disp = document.querySelector("#ripple feDisplacementMap");
  const turb = document.querySelector("#ripple feTurbulence");

  let index = 0;
  let timer;
  let fareValue = destinations[0].fare;

  destinations.forEach((item, i) => {
    const fig = document.createElement("figure");
    fig.className = `world${i === 0 ? " is-on" : ""}`;
    fig.innerHTML = `<img src="${item.src}" alt="${item.name}">`;
    worlds.appendChild(fig);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.name;
    if (i === 0) btn.className = "is-active";
    btn.addEventListener("click", () => go(i, true));
    pills.appendChild(btn);
  });

  const slides = [...document.querySelectorAll(".world")];
  const buttons = [...pills.querySelectorAll("button")];

  const ripple = () => {
    if (!disp || reduced) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 900);
      const wave = Math.sin(t * Math.PI);
      disp.setAttribute("scale", String(38 * wave));
      turb.setAttribute("baseFrequency", String(0.01 + 0.05 * wave));
      if (t < 1) requestAnimationFrame(tick);
      else disp.setAttribute("scale", "0");
    };
    requestAnimationFrame(tick);
  };

  const tickFare = (target) => {
    const from = fareValue;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 620);
      fareValue = Math.round(from + (target - from) * (1 - (1 - t) ** 3));
      fareEl.textContent = fareValue.toLocaleString("en-IN");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const go = (next, user) => {
    slides[index].classList.add("is-leave");
    index = (next + destinations.length) % destinations.length;
    const item = destinations[index];
    worlds.style.transform = `translate3d(${-index * 20}%, 0, 0)`;
    ripple();
    mask.classList.add("is-swap");
    window.setTimeout(() => {
      mask.textContent = item.name;
      mask.style.setProperty("--shot", `url("${item.src}")`);
      mask.classList.remove("is-swap");
      slides.forEach((slide, i) => {
        slide.classList.toggle("is-on", i === index);
        slide.classList.remove("is-leave");
      });
    }, 280);
    kicker.textContent = item.kicker;
    tamil.textContent = item.tamil;
    lede.textContent = item.lede;
    num.textContent = String(index + 1).padStart(2, "0");
    tickFare(item.fare);
    buttons.forEach((btn, i) => btn.classList.toggle("is-active", i === index));
    const bar = document.querySelector(".beam");
    bar.replaceWith(bar.cloneNode(true));
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go(index + 1, false), 5000);
  };

  mask.style.setProperty("--shot", `url("${destinations[0].src}")`);
  lede.textContent = destinations[0].lede;
  play();
})();
