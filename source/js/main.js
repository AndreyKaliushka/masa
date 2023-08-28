import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {setHeroSwiper, setProgramsSwiper, setReviewsSwiper, setNewsSwiper} from './blocks/page-swiper';
import {openCloseMenu, openCloseSubMenu} from './blocks/menu';
import {initModal} from './blocks/open-modal';
import {CustomSelect} from './modules/form-validate/custom-select';
import {initAccordions} from './blocks/init-accordion';
import {marker, map} from './blocks/map';

setHeroSwiper();
setProgramsSwiper();
setReviewsSwiper();
setNewsSwiper();
openCloseMenu();
openCloseSubMenu();
initModal();
initAccordions();
marker;
map;

// const changeText = () => {
//   const parent = document.querySelector('.instructions__description');
//   const heading = parent.getElementsByTagName('h2')['0'];
//   const sometext = parent.getElementsByTagName('p')['0'];
//   heading.textContent = 'Никак не доехать';
//   sometext.textContent = 'Каждый день был возможностью оказать ощутимое влияние на жизнь других людей. Я бы очень рекомендовал эту волонтерскую программу всем, кто ищет значимый и незабываемый опыт. Организация была на высшем уровне. Для меня было честью быть частью такой удивительной инициативы.';
// };

// changeText();
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
