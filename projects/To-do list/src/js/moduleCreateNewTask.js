export default class CreateNewTask {
  constructor() {
    this.createNewTaskContainer = document.querySelector('.createNewTask');
    this.createNewTaskBtn = document.querySelector('.header__createNewTaskBtn');
    this.submitBtn = document.querySelector('.createNewTask__submitBtn');
    this.title = document.querySelector('.createNewTask__title');
    this.description = document.querySelector('.createNewTask__description');
    this.date = document.querySelector('.createNewTask__date');
    this.time = document.querySelector('.createNewTask__time');
    this.colorBox = document.querySelector('.createNewTask__colorsBox');
  }

  openBox() {
    this.createNewTaskBtn.style.borderBottom = this.focusElemBorder;
    this.createNewTaskContainer.className = 'createNewTask createNewTask--open';
  }

  closeBox() {
    this.createNewTaskContainer.className = 'createNewTask createNewTask--close';
    setTimeout(() => {
      this.createNewTaskBtn.style.border = this.unfocusElemBorder;
    }, 300);
  }

  clearInputs() {
    const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
    const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    this.title.value = '';
    this.description.value = '';
    this.date.value = new Date().toISOString().slice(0, 10);
    this.time.value = `${hours}:${minutes}`;
    this.colorBox.style.backgroundColor = '#ffffff';
  }

  saveTask() {
    const data = {
      title: this.title.value,
      description: this.description.value,
      date: this.date.value,
      time: this.time.value,
      importance: this.colorBox.style.backgroundColor,
    };
    if (localStorage.tasks) {
      const arr = JSON.parse(localStorage.tasks);
      arr.push(data);
      localStorage.tasks = JSON.stringify(arr);
    } else {
      localStorage.tasks = JSON.stringify([data]);
    }
  }

  generateEvents() {
    this.createNewTaskBtn.addEventListener('click', () => {
      if (this.createNewTaskContainer.className === 'createNewTask createNewTask--close'
          || this.createNewTaskContainer.className === 'createNewTask') {
        this.openBox(this.createNewTaskContainer);
      } else {
        this.closeBox(this.createNewTaskContainer);
      }
    });

    this.submitBtn.addEventListener('click', () => {
      this.saveTask();
      this.clearInputs();
      this.closeBox();
    });
  }
}
