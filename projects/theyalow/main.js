if (!window.matchMedia("(min-width: 376px)").matches) {
    document.querySelector('.wrapper').style.width = '170.7vw';
    document.querySelector('.mobile-top-video').style.width = '640px';
    document.querySelector('.navigation').style.width = '640px';
    document.querySelector('.container').style.maxWidth = '640px';
    btnMobile.style.display = 'none';
}
