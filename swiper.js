//-------------------
// SWIPER
$(".slider-main_component").each(function (index) {
  let loopMode = false;
  /*
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  */
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const testimonial = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: "auto",
    spaceBetween: "2%",
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: "auto",
        spaceBetween: "4%",
      },
      // tablet
      768: {
        slidesPerView: "auto",
        spaceBetween: "4%",
      },
      // desktop
      992: {
        slidesPerView: "auto",
        spaceBetween: "2%",
      },
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
  });

  const cases = new Swiper($(this).find(".swiper.is-case")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: "auto",
    spaceBetween: "2%",
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: "auto",
        spaceBetween: "4%",
      },
      // tablet
      768: {
        slidesPerView: "auto",
        spaceBetween: "4%",
      },
      // desktop
      992: {
        slidesPerView: "auto",
        spaceBetween: "2%",
      },
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
  });
});
