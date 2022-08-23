export default class SelectionMenu {
  constructor(selectionBox, selectionItem) {
    this.selectionBox = document.querySelector(`.${selectionBox}`);
    this.selectionItem = document.querySelector(`.${selectionItem}`);
  }

  selectionMenuEvent() {
    this.selectionBox.addEventListener('click', () => {
      if (window.getComputedStyle(this.selectionItem).display === 'none') {
        this.selectionItem.style.display = 'block';
      } else {
        this.selectionItem.style.display = 'none';
      }
    });

    this.selectionBox.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.selectionItem)) {
        this.selectionItem.style.display = 'none';
      }
    });

    this.selectionItem.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.selectionBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
      }
      this.selectionItem.style.display = 'none';
    });
  }
}
