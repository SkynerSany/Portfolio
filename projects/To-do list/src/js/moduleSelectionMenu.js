export default class SelectionMenu {
  constructor(colorsBox, colors) {
    this.colorsBox = document.querySelector(`.${colorsBox}`);
    this.colors = document.querySelector(`.${colors}`);
  }

  generateEventForSwitchMenu() {
    this.colorsBox.addEventListener('click', () => {
      if (window.getComputedStyle(this.colors).display === 'none') {
        this.colors.style.display = 'block';
      } else {
        this.colors.style.display = 'none';
      }
    });

    this.colorsBox.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.colors)) {
        this.colors.style.display = 'none';
      }
    });

    this.colors.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.colorsBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
      }
      this.colors.style.display = 'none';
    });
  }
}
