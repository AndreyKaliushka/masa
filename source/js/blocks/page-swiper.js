import Swiper from '../vendor/swiper';

const setHeroSwiper = () => {
  if (document.body.contains(document.querySelector('.hero__swiper-wrapper'))) {
    // eslint-disable-next-line no-new
    new Swiper('.hero__swiper-wrapper', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.hero__swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },

      // autoplay: {
      //   delay: 3000,
      // },
    });
  }
};

const setProgramsSwiper = () => {
  if (document.body.contains(document.querySelector('.programs__swiper-wrapper'))) {
    // eslint-disable-next-line no-new
    new Swiper('.programs__swiper-wrapper', {
      // Optional parameters
      loop: false,

      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 2.1271,
          spaceBetween: 30,
          dragSize: 324,
        },
        1200: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 32,
          dragSize: 392,
        },
      },

      navigation: {
        nextEl: '.programs__swiper-button--next',
        prevEl: '.programs__swiper-button--prev',
      },

      scrollbar: {
        el: '.programs__swiper-scrollbar',
        dragSize: 392,
      },
    });
  }
};

export {setHeroSwiper, setProgramsSwiper};
