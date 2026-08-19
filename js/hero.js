(() => {
  const destinations = [
    {
      src: "./assets/smta-meenakshi.png",
      name: "Meenakshi",
      tamil: "மீனாட்சி · மதுரை",
      lede: "Begin under Meenakshi’s gopuram. SMTA escorts pilgrimage, leisure and world tours by road, rail, flight and cruise — from Madurai since 1985.",
      fare: "₹5,500",
    },
    {
      src: "./assets/smta-rameshwaram.png",
      name: "Rameswaram",
      tamil: "ராமேஸ்வரம்",
      lede: "Madurai–Rameshwaram from ₹5,500, then Kanyakumari, Tanjore and Trichy on fixed departures with SMTA’s own team.",
      fare: "₹5,500",
    },
    {
      src: "./assets/smta-srilanka.png",
      name: "Sri Lanka",
      tamil: "இலங்கை படகு",
      lede: "Sri Lanka ferry, 5 days — last seats. Call 9791848265. Exclusive island holidays also from ₹54,990.",
      fare: "₹43,000",
    },
    {
      src: "./assets/smta-dubai.png",
      name: "Dubai",
      tamil: "துபாய் · அபுதாபி",
      lede: "IATA outbound: Dubai / Abu Dhabi from ₹79,990, plus Singapore, Malaysia, Egypt and Europe.",
      fare: "₹79,990",
    },
    {
      src: "./assets/smta-kasi.png",
      name: "Kasi",
      tamil: "காசி · அயோத்தி",
      lede: "Kasi, Ayodhya, Shirdi and Char Dham by train and flight. Lakhs of travellers have gone with SMTA.",
      fare: "₹24,990",
    },
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.getElementById("hero");
  const mainStack = document.getElementById("main-stack");
  const miniStack = document.getElementById("mini-stack");
  const board = document.getElementById("board");
  const lede = document.getElementById("lede");
  const nameEl = document.getElementById("name");
  const tamilEl = document.getElementById("tamil");
  const fareEl = document.getElementById("fare");
  const codeEl = document.getElementById("code");

  let index = 0;
  let timer;

  destinations.forEach((item, i) => {
    const a = document.createElement("img");
    const b = document.createElement("img");
    a.src = item.src;
    b.src = item.src;
    a.alt = item.name;
    b.alt = item.name;
    if (i === 0) a.className = "is-on";
    mainStack.appendChild(a);
    miniStack.appendChild(b);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${String(i + 1).padStart(2, "0")}  ${item.name}`;
    if (i === 0) btn.className = "is-on";
    btn.addEventListener("click", () => go(i, true));
    board.appendChild(btn);
  });

  const mains = [...mainStack.querySelectorAll("img")];
  const minis = [...miniStack.querySelectorAll("img")];
  const buttons = [...board.querySelectorAll("button")];
  minis[1].className = "is-on";

  const go = (next, user) => {
    index = (next + destinations.length) % destinations.length;
    const item = destinations[index];
    mains.forEach((img, i) => img.classList.toggle("is-on", i === index));
    minis.forEach((img, i) => img.classList.toggle("is-on", i === (index + 1) % destinations.length));
    buttons.forEach((btn, i) => btn.classList.toggle("is-on", i === index));
    lede.textContent = item.lede;
    nameEl.textContent = item.name;
    tamilEl.textContent = item.tamil;
    fareEl.textContent = item.fare;
    codeEl.textContent = String(index + 1).padStart(2, "0");
    if (user) play();
  };

  const play = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => go(index + 1, false), 5200);
  };

  hero.addEventListener("pointermove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    document.querySelectorAll("[data-depth]").forEach((el) => {
      const d = Number(el.dataset.depth);
      el.style.transform = `translate3d(${(-x * d * 80).toFixed(1)}px, ${(-y * d * 60).toFixed(1)}px, 0)`;
    });
  });

  lede.textContent = destinations[0].lede;
  play();
})();
