const swiperBrands = new Swiper('.companies_wrap', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  freeMode: true,
  freeModeMomentum: false,

  breakpoints: {
    769: {
      slidesPerView: 8,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
});
