const teachersSwiper = new Swiper('.teachers__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.teachers__btn--next',
    prevEl: '.teachers__btn--prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
    },
  },
});
