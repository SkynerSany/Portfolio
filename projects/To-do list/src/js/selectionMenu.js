export default class SelectionMenu {
  constructor(box, item, type) {
    this.box = document.querySelector(`.${box}`);
    this.item = document.querySelector(`.${item}`);
    this.itemType = type;
  }

  selectionMenuEvent() {
    this.box.addEventListener('click', () => {
      if (window.getComputedStyle(this.item).display === 'none') {
        this.item.style.display = 'block';
      } else {
        this.item.style.display = 'none';
      }
    });

    this.box.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.item)) {
        this.item.style.display = 'none';
      }
    });

    this.item.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        if (this.itemType === 'color') {
          this.box.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
        } else if (this.itemType === 'text') {
          this.box.textContent = e.target.textContent;
        }
      }
      this.item.style.display = 'none';
    });
  }
}
