import {ScrollLock} from '../utils/scroll-lock';

const companyModal = document.querySelector('.company-modal');
const buttonClose = document.querySelector('.company-modal__button-close');
const buttonOpen = document.querySelector('.company__button');
window.scrollLock = new ScrollLock();

const initModal = () => {
  if (document.body.contains(document.querySelector('.company-modal'))) {
    buttonOpen.addEventListener('click', () => {
      companyModal.showModal();
      window.scrollLock.disableScrolling();
    });

    buttonClose.addEventListener('click', () => {
      companyModal.close();
      window.scrollLock.enableScrolling();
    });

    companyModal.addEventListener('click', (evt) => {
      if (evt.target === companyModal) {
        companyModal.close();
        window.scrollLock.enableScrolling();
      }
    });

  }

  return;

};

export {initModal};
