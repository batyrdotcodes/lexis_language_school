const reviewsSwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.reviews__btn--next',
    prevEl: '.reviews__btn--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
