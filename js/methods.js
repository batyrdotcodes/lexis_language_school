const methodsSwiper = new Swiper('.methods__swiper', {
  slidesPerView: 1,
  spaceBetween: 1,
  navigation: {
    nextEl: '.methods__btn--next',
    prevEl: '.methods__btn--prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 16,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});
