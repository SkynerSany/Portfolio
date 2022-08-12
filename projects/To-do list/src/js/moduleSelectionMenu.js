export default class SelectionMenu {
  constructor(createNewTaskColorsBox,
      createNewTaskColors, focusElemBorder, unfocusElemBorder) {
    this.createNewTaskColorsBox = document.querySelector(`.${createNewTaskColorsBox}`);
    this.createNewTaskColors = document.querySelector(`.${createNewTaskColors}`);
    this.focusElemBorder = focusElemBorder;
    this.unfocusElemBorder = unfocusElemBorder;
  }

  generateEventForSwitchMenu() {
    this.createNewTaskColorsBox.addEventListener('click', () => {
      if (window.getComputedStyle(this.createNewTaskColors).display === 'none') {
        this.createNewTaskColors.style.display = 'block';
      } else {
        this.createNewTaskColors.style.display = 'none';
      }
    });

    this.createNewTaskColorsBox.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.createNewTaskColors)) {
        this.createNewTaskColors.style.display = 'none';
      }
    });

    this.createNewTaskColors.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.createNewTaskColorsBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
      }
      this.createNewTaskColors.style.display = 'none';
    });
  }
}
