const btnMobile = document.querySelector('.settings_button__mobile');
const back = document.querySelector('.settings_button__back');
const settingsButton = document.querySelector('.settings_button');
const windowSize = {
    'Mobile': 1500,
    'Desktop': 375,
};

if (!window.matchMedia("(min-width: 376px)").matches) {
    document.querySelector('.wrapper').style.width = '170.7vw';
    document.querySelector('.mobile-top-video').style.width = '640px';
    document.querySelector('.navigation').style.width = '640px';
    document.querySelector('.container').style.maxWidth = '640px';
    btnMobile.style.display = 'none';
}

function switchSize(size) {
  Array.from(document.styleSheets[0].cssRules).forEach((el, i) => {
      if (el.media) { 
          el.media.mediaText = `(max-width: ${size}px)`;
      }
  });
}

btnMobile.addEventListener('click', () => {
  let type = btnMobile.firstChild.textContent;
  if (type === 'Mobile') {
      switchSize(window.innerWidth);
      btnMobile.firstChild.textContent = 'Desktop';
  } else {
      switchSize(windowSize[type]);
      btnMobile.firstChild.textContent = 'Mobile';
  }
});

back.addEventListener('click', () => {
  document.location = '../../index.html';
});