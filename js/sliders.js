(function () {
  if (typeof Swiper === "undefined") return;

  if (document.querySelector(".testi-swiper")) {
    new Swiper(".testi-swiper", {
      loop: true,
      speed: 700,
      autoplay: { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
      spaceBetween: 24,
      grabCursor: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });
  }

  if (document.querySelector(".brand-swiper")) {
    new Swiper(".brand-swiper", {
      loop: true,
      speed: 800,
      autoplay: { delay: 2500, disableOnInteraction: false },
      slidesPerView: 2,
      spaceBetween: 24,
      breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1100: { slidesPerView: 5 }
      }
    });
  }
})();
