(() => {
  const destinations = [
    {
      src: "./assets/smta-meenakshi.png",
      name: "MEENAKSHI",
      tamil: "மீனாட்சி · மதுரை",
      kicker: "Temple city",
      lede: "Start at Meenakshi’s gopuram, then the Tamil Nadu temple trail with SMTA escorts — road, rail, flight and cruise since 1985.",
      fare: 5500,
      end: "Meenakshi",
    },
    {
      src: "./assets/smta-rameshwaram.png",
      name: "RAMESWARAM",
      tamil: "ராமேஸ்வரம்",
      kicker: "Pilgrimage corridor",
      lede: "Madurai–Rameshwaram from ₹5,500, plus Kanyakumari, Tanjore and Trichy on fixed departures from Madurai.",
      fare: 5500,
      end: "Rameswaram",
    },
    {
      src: "./assets/smta-srilanka.png",
      name: "SRI LANKA",
      tamil: "இலங்கை படகு",
      kicker: "Ferry · 5 days",
      lede: "Sri Lanka ferry special — last seats. Call 9791848265. Exclusive island holidays also from ₹54,990.",
      fare: 43000,
      end: "Colombo",
    },
    {
      src: "./assets/smta-dubai.png",
      name: "DUBAI",
      tamil: "துபாய் · அபுதாபி",
      kicker: "IATA outbound",
      lede: "Dubai / Abu Dhabi from ₹79,990, plus Singapore, Malaysia, Egypt and Europe — authorised IATA agent.",
      fare: 79990,
      end: "Dubai",
    },
    {
      src: "./assets/smta-kasi.png",
      name: "KASI",
      tamil: "காசி · அயோத்தி",
      kicker: "North pilgrimage",
      lede: "Kasi, Ayodhya, Shirdi, Badrinath–Kedarnath by train and flight. Lakhs of travellers with SMTA.",
      fare: 24990,
      end: "Kasi",
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.getElementById("hero");
  const reel = document.getElementById("reel");
  const indexEl = document.getElementById("index");
  const coverflow = document.getElementById("coverflow");
  const titleEl = document.getElementById("title");
  const tamilEl = document.getElementById("tamil");
  const kickerEl = document.getElementById("kicker");
  const ledeEl = document.getElementById("lede");
  const fareEl = document.getElementById("fare");
  const routeEnd = document.getElementById("route-end");
  const odometer = document.getElementById("odometer");
  const cursor = document.getElementById("cursor");
  const stripsCount = 8;
  let index = 0;
  let timer;
  let fareValue = destinations[0].fare;

  destinations.forEach((item, i) => {
    const shot = document.createElement("article");
    shot.className = `shot${i === 0 ? " is-active" : ""}`;
    shot.dataset.i = String(i);
    for (let s = 0; s < stripsCount; s += 1) {
      const strip = document.createElement("div");
      strip.className = "strip";
      strip.style.backgroundImage = `url("${item.src}")`;
      strip.style.backgroundPosition = `${(s / (stripsCount - 1)) * 100}% center`;
      strip.style.animationDelay = `${s * 70}ms`;
      shot.appendChild(strip);
    }
    reel.appendChild(shot);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.look = String(i);
    btn.innerHTML = `<em></em>${String(i + 1).padStart(2, "0")} ${item.name}`;
    if (i === 0) btn.className = "is-active";
    btn.addEventListener("click", () => go(i, true));
    indexEl.appendChild(btn);

    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "thumb";
    thumb.dataset.look = String(i);
    thumb.innerHTML = `<img src="${item.src}" alt="${item.name}">`;
    thumb.addEventListener("click", () => go(i, true));
    coverflow.appendChild(thumb);
  });

  const shots = [...document.querySelectorAll(".shot")];
  const thumbs = [...document.querySelectorAll(".thumb")];
  const indexBtns = [...indexEl.querySelectorAll("button")];

  const scramble = (el, next) => {
    if (reduced) {
      el.textContent = next;
      return;
    }
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let step = 0;
    const id = window.setInterval(() => {
      el.textContent = next
        .split("")
        .map((ch, n) => (ch === " " || n < step ? ch : glyphs[(step * 7 + n * 3) % glyphs.length]))
        .join("");
      step += 1;
      if (step > next.length) {
        window.clearInterval(id);
        splitTitle(next);
      }
    }, 32);
  };

  const splitTitle = (text) => {
    titleEl.innerHTML = "";
    [...text].forEach((ch, n) => {
      const span = document.createElement("span");
      span.className = "ch";
      span.textContent = ch === " " ? "\u00a0" : ch;
      span.style.animationDelay = `${n * 40}ms`;
      titleEl.appendChild(span);
    });
  };

  const tickFare = (target) => {
    const from = fareValue;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 700);
      const eased = 1 - (1 - t) ** 3;
      fareValue = Math.round(from + (target - from) * eased);
      fareEl.textContent = fareValue.toLocaleString("en-IN");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const layoutThumbs = () => {
    thumbs.forEach((thumb, i) => {
      const d = i - index;
      const x = d * 7.2;
      const rot = d * -28;
      const scale = i === index ? 1.12 : 0.78;
      const z = 20 - Math.abs(d);
      thumb.style.transform = `translateX(${x}rem) translateZ(${i === index ? 40 : 0}px) rotateY(${rot}deg) scale(${scale})`;
      thumb.style.zIndex = String(z);
      thumb.classList.toggle("is-active", i === index);
    });
  };

  const restartRoute = () => {
    const line = document.querySelector(".route__line");
    line.style.animation = "none";
    void line.offsetWidth;
    line.style.animation = "";
    const meter = document.querySelector(".meter__run");
    meter.style.animation = "none";
    void meter.offsetWidth;
    meter.style.animation = "";
  };

  const go = (next, user) => {
    const leave = shots[index];
    index = (next + destinations.length) % destinations.length;
    const item = destinations[index];
    leave.classList.remove("is-active");
    leave.classList.add("is-leave");
    window.setTimeout(() => leave.classList.remove("is-leave"), 820);
    const incoming = shots[index];
    incoming.classList.remove("is-active");
    void incoming.offsetWidth;
    incoming.classList.add("is-active");
    shots[index].querySelectorAll(".strip").forEach((strip, s) => {
      strip.style.animationDelay = `${s * 70}ms`;
    });
    indexBtns.forEach((btn, i) => btn.classList.toggle("is-active", i === index));
    scramble(titleEl, item.name);
    tamilEl.textContent = item.tamil;
    kickerEl.textContent = item.kicker;
    ledeEl.textContent = item.lede;
    routeEnd.textContent = item.end;
    const n = String(index + 1).padStart(2, "0");
    odometer.innerHTML = `<span>${n[0]}</span><span>${n[1]}</span>`;
    tickFare(item.fare);
    layoutThumbs();
    restartRoute();
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go(index + 1, false), 5000);
  };

  document.querySelectorAll("[data-ripple]").forEach((el) => {
    el.addEventListener("click", (event) => {
      const rect = el.getBoundingClientRect();
      const span = document.createElement("span");
      span.className = "ripple";
      span.style.left = `${event.clientX - rect.left}px`;
      span.style.top = `${event.clientY - rect.top}px`;
      el.appendChild(span);
      window.setTimeout(() => span.remove(), 700);
    });
  });

  let cx = 0;
  let cy = 0;
  window.addEventListener("pointermove", (event) => {
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;
    cx = event.clientX;
    cy = event.clientY;
    const ang = Math.atan2(dy, dx) * (180 / Math.PI);
    cursor.style.transform = `translate(${cx - 22}px, ${cy - 22}px) rotate(${ang + 90}deg)`;
    const mx = (event.clientX / window.innerWidth - 0.5) * 18;
    const my = (event.clientY / window.innerHeight - 0.5) * 12;
    document.querySelectorAll(".shot.is-active .strip").forEach((strip, s) => {
      strip.style.backgroundPosition = `calc(${(s / 7) * 100}% + ${mx}px) calc(50% + ${my}px)`;
    });
  });

  splitTitle(destinations[0].name);
  ledeEl.textContent = destinations[0].lede;
  fareEl.textContent = destinations[0].fare.toLocaleString("en-IN");
  layoutThumbs();

  window.setTimeout(() => {
    hero.classList.remove("is-booting");
    hero.classList.add("is-playing");
    play();
  }, reduced ? 0 : 1400);
})();
