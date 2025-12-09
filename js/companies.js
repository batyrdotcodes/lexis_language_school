const companiesSwiper = new Swiper('.companies_swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 8,
    },
  },
});
