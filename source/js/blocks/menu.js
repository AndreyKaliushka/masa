import {ScrollLock} from '../utils/scroll-lock';
import {heroSwiper} from '../blocks/page-swiper';
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav__menu-wrapper');
const listItems = document.querySelectorAll('.main-nav__menu-item');
const subMenuButtons = document.querySelectorAll('.submenu__button');
const subMenuItems = document.querySelectorAll('.submenu__list-item');
const isEscapeKey = (evt) => evt.key === 'Escape';
window.scrollLock = new ScrollLock();

navMain.classList.remove('main-nav--nojs');

const openCloseMenu = () => {
  if (document.body.contains(document.querySelector('.main-header'))) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        window.scrollLock.disableScrolling();
        document.addEventListener('keydown', onDocumentEscapeKeydown);
        heroSwiper.disable();
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        window.scrollLock.enableScrolling();
        heroSwiper.enable();
      }
    });
  }
};

document.addEventListener('click', (evt) => {
  const click = evt.composedPath().includes(mainNav);
  if (!click) {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
      heroSwiper.enable();
    }
  }
});

listItems.forEach((listItem) => listItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
      heroSwiper.enable();
    }
  }
}));

const openCloseSubMenu = () => {
  if (document.body.contains(document.querySelector('.submenu'))) {
    subMenuButtons.forEach((subMenuButton) => subMenuButton.addEventListener('click', function (evt) {
      if (evt) {
        const subMenu = subMenuButton.parentElement;
        if (subMenu.classList.contains('submenu--closed')) {
          subMenu.classList.remove('submenu--closed');
          subMenu.classList.add('submenu--opened');
          navMain.classList.add('main-nav__submenu--opened');
        } else {
          subMenu.classList.add('submenu--closed');
          subMenu.classList.remove('submenu--opened');
          navMain.classList.remove('main-nav__submenu--opened');
        }
      }
    }));
  }
};

subMenuItems.forEach((subMenuItem) => subMenuItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
      heroSwiper.enable();
    }
  }
}));

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    window.scrollLock.enableScrolling();
    document.removeEventListener('keydown', onDocumentEscapeKeydown);
    heroSwiper.enable();
  }
};

export {openCloseMenu, openCloseSubMenu};
