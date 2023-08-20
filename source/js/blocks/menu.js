import {ScrollLock} from '../utils/scroll-lock';
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav__menu-wrapper');
const listItems = document.querySelectorAll('.main-nav__menu-item');
const subMenuButtons = document.querySelectorAll('.submenu__button');
const subMenuItems = document.querySelectorAll('.submenu__list-item');
window.scrollLock = new ScrollLock();

navMain.classList.remove('main-nav--nojs');

const openCloseMenu = () => {
  if (document.body.contains(document.querySelector('.main-header'))) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        window.scrollLock.disableScrolling();
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        window.scrollLock.enableScrolling();
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
    }
  }
});

listItems.forEach((listItem) => listItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
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
        } else {
          subMenu.classList.add('submenu--closed');
          subMenu.classList.remove('submenu--opened');
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
    }
  }
}));

export {openCloseMenu, openCloseSubMenu};
