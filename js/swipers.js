// segments
const segmentsSwiper = new Swiper('.segments__list', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.segments__btn--next',
    prevEl: '.segments__btn--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

// teachers
const teachersSwiper = new Swiper('.teachers__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.teachers__btn--next',
    prevEl: '.teachers__btn--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});

// reviews
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

// programs
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

// methods
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

// companies
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

// rewards
const rewardsSwiper = new Swiper('.rewards__container', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.rewards__btn--next',
    prevEl: '.rewards__btn--prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 16,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});
