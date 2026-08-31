(function ($) {
  "use strict";

  if (typeof WOW === "function") {
    new WOW().init();
  }

  $('[data-toggle="tooltip"]').tooltip();

  if ($.fn.owlCarousel) {
    $(".service-card-prb, .clients, .testimonial-card-a, .video-testimonials, .project-screens, .porto-slide, .single-slide, .bages-slider, .logo-weworkfor, .testimonial-card-b").each(function () {
      if (!this.classList.length) return;
    });
  }

  if ($.fn.magnificPopup && $(".video-link").length) {
    $(".video-link").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160
    });
  }

  if ($.fn.counterUp && $(".counter").length) {
    $(".counter").counterUp({ delay: 10, time: 2500 });
  }

  if ($.fn.scrollUp) {
    $.scrollUp({
      animation: "fade",
      scrollImg: { active: true, type: "background" }
    });
  }

  if ($.fn.imagesLoaded && $(".card-list").length) {
    $(".card-list").imagesLoaded(function () {
      var $grid = $(".card-list").isotope({
        itemSelector: ".single-card-item",
        percentPosition: true,
        masonry: { columnWidth: ".grid-sizer" }
      });
      $(".filter-menu").on("click", "li", function () {
        $grid.isotope({ filter: $(this).attr("data-filter") });
      });
    });
  }

  $(".filter-menu li").on("click", function (event) {
    $(this).siblings(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    event.preventDefault();
  });

  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });
})(jQuery);
