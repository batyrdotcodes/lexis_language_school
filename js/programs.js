const programsSwiper = new Swiper('.programs__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.programs__btn--next',
    prevEl: '.programs__btn--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});
