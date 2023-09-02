import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {setHeroSwiper, setProgramsSwiper, setReviewsSwiper, setNewsSwiper} from './blocks/page-swiper';
import {openCloseMenu, openCloseSubMenu} from './blocks/menu';
import {CustomSelect} from './modules/form-validate/custom-select';
import {initAccordions} from './blocks/init-accordion';
import {marker, map} from './blocks/map';
import {setNewsButton} from './blocks/news-sorter';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  setHeroSwiper();
  setProgramsSwiper();
  setReviewsSwiper();
  setNewsSwiper();
  openCloseMenu();
  openCloseSubMenu();
  initAccordions();
  // eslint-disable-next-line no-unused-expressions
  marker;
  // eslint-disable-next-line no-unused-expressions
  map;
  setNewsButton();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
  });
});
