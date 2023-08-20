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

export {setHeroSwiper};
