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
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const deck = document.getElementById("deck");
  let index = 0;
  let timer;
  let busy = false;

  destinations.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = `card${i === 0 ? " is-hero" : ""}`;
    card.style.setProperty("--accent", item.accent);
    card.style.setProperty("--wash", item.wash);
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}">
      <div class="wash"></div>
      <span class="tag">${item.title}</span>
      <div class="copy">
        <p class="kicker">${item.kicker}</p>
        <h2>${item.title}<em>${item.sub}</em></h2>
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
    deck.appendChild(card);
  });

  const cards = [...deck.querySelectorAll(".card")];

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
    });
  };

  const flip = (card, first) => {
    const last = card.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / last.width;
    const sy = first.height / last.height;
    card.animate(
      [
        { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, borderRadius: "1.15rem" },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: reduced ? 1 : 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  };

  const go = (next, user) => {
    if (busy || next === index) return;
    busy = true;
    const outgoing = cards[index];
    const incoming = cards[next];
    const first = incoming.getBoundingClientRect();
    const outFirst = outgoing.getBoundingClientRect();
    index = next;
    outgoing.classList.remove("is-hero");
    incoming.classList.add("is-hero");
    incoming.style.left = "";
    incoming.style.top = "";
    placeThumbs();
    flip(incoming, first);
    const outLast = outgoing.getBoundingClientRect();
    const odx = outFirst.left - outLast.left;
    const ody = outFirst.top - outLast.top;
    const osx = outFirst.width / Math.max(outLast.width, 1);
    const osy = outFirst.height / Math.max(outLast.height, 1);
    outgoing.animate(
      [
        { transform: `translate(${odx}px, ${ody}px) scale(${osx}, ${osy})`, borderRadius: "0px" },
        { transform: "none", borderRadius: "1.15rem" },
      ],
      { duration: reduced ? 1 : 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
    window.setTimeout(() => {
      busy = false;
    }, 920);
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go((index + 1) % cards.length, false), 5200);
  };

  placeThumbs();
  play();
  window.addEventListener("resize", placeThumbs);
})();
