(() => {
  const destinations = [
    {
      src: "./assets/smta-meenakshi.png",
      kicker: "Temple city · Collection 01",
      title: "Meenakshi",
      sub: "where every yatra begins",
      tamil: "மீனாட்சி · மதுரை",
      lede: "Start under the gopuram. SMTA runs pilgrimage, leisure and world tours by road, rail, flight and cruise from Madurai since 1985.",
      price: "From ₹5,500",
      accent: "#ea580c",
      wash: "#ffe0b8",
      fx: "sash",
    },
    {
      src: "./assets/smta-rameshwaram.png",
      kicker: "Pilgrimage corridor · 02",
      title: "Rameswaram",
      sub: "pillars, sea, darshan",
      tamil: "ராமேஸ்வரம்",
      lede: "Madurai–Rameshwaram from ₹5,500, plus Kanyakumari, Tanjore and Trichy on fixed departures.",
      price: "From ₹5,500",
      accent: "#0f766e",
      wash: "#d1faf5",
      fx: "box",
    },
    {
      src: "./assets/smta-srilanka.png",
      kicker: "Ferry · 5 days · 03",
      title: "Sri Lanka",
      sub: "last seats on the ship",
      tamil: "இலங்கை படகு",
      lede: "Sri Lanka ferry special — call 9791848265. Exclusive island holidays also from ₹54,990.",
      price: "From ₹43,000",
      accent: "#0284c7",
      wash: "#e0f2fe",
      fx: "rise",
    },
    {
      src: "./assets/smta-dubai.png",
      kicker: "IATA outbound · 04",
      title: "Dubai",
      sub: "Abu Dhabi beside it",
      tamil: "துபாய் · அபுதாபி",
      lede: "Dubai / Abu Dhabi from ₹79,990, plus Singapore, Malaysia, Egypt and Europe — authorised IATA agent.",
      price: "From ₹79,990",
      accent: "#d97706",
      wash: "#fef3c7",
      fx: "fan",
    },
    {
      src: "./assets/smta-kasi.png",
      kicker: "North pilgrimage · 05",
      title: "Kasi",
      sub: "Ayodhya on the same path",
      tamil: "காசி · அயோத்தி",
      lede: "Kasi, Ayodhya, Shirdi and Char Dham by train and flight. Lakhs of travellers have gone with SMTA.",
      price: "From ₹24,990",
      accent: "#e11d48",
      wash: "#ffe4e6",
      fx: "soft",
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const panelsEl = document.getElementById("panels");
  const switchEl = document.getElementById("switch");
  let index = 0;
  let timer;

  destinations.forEach((item, i) => {
    const panel = document.createElement("article");
    panel.className = `panel${i === 0 ? " is-on" : ""}`;
    panel.dataset.fx = item.fx;
    panel.style.setProperty("--accent", item.accent);
    panel.style.setProperty("--wash", item.wash);
    panel.innerHTML = `
      <div class="panel__bg"><img src="${item.src}" alt="${item.title}"></div>
      <div class="panel__wash"></div>
      <div class="panel__copy">
        <p class="kicker">${item.kicker}</p>
        <h1>${item.title}<em>${item.sub}</em></h1>
        <p class="tamil">${item.tamil}</p>
        <p class="lede">${item.lede}</p>
        <div class="row">
          <a class="btn" href="https://www.srimurugantravel.com/">Book this journey</a>
          <a class="ghost" href="tel:+919791848265">Talk to SMTA</a>
          <span class="price">${item.price}</span>
        </div>
      </div>`;
    panelsEl.appendChild(panel);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.title;
    if (i === 0) btn.className = "is-on";
    btn.addEventListener("click", () => go(i, true));
    switchEl.appendChild(btn);
  });

  const panels = [...document.querySelectorAll(".panel")];
  const buttons = [...switchEl.querySelectorAll("button")];

  const go = (next, user) => {
    const prev = index;
    index = (next + destinations.length) % destinations.length;
    panels[prev].classList.remove("is-on");
    panels[prev].classList.add("is-leave");
    window.setTimeout(() => panels[prev].classList.remove("is-leave"), 850);
    const incoming = panels[index];
    incoming.classList.remove("is-on");
    void incoming.offsetWidth;
    incoming.classList.add("is-on");
    buttons.forEach((btn, i) => btn.classList.toggle("is-on", i === index));
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go(index + 1, false), 5200);
  };

  play();
})();
