const newsButtons = document.querySelectorAll('.news__button');

const setNewsButton = () => {
  if (document.body.contains(document.querySelector('.news'))) {
    newsButtons.forEach((newsButton) => newsButton.addEventListener('click', (evt) => {
      newsButtons.forEach((newsButtonActive) => {
        newsButtonActive.classList.remove('news__button--active');
      });
      if (evt) {
        newsButton.classList.add('news__button--active');
      }
    }));
  }
};

export {setNewsButton};
