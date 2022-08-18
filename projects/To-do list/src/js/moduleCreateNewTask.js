export default class CreateNewTask {
  constructor() {
    this.createNewTaskContainer = document.querySelector('.createNewTask');
    this.createNewTaskBtn = document.querySelector('.header__createNewTaskBtn');
    this.submitBtn = document.querySelector('.createNewTask__submitBtn');
    this.title = document.querySelector('.createNewTask__title');
    this.description = document.querySelector('.createNewTask__description');
    this.date = document.querySelector('.createNewTask__date');
    this.colorBox = document.querySelector('.createNewTask__colorsBox');
    this.openTaskContainerClass = 'createNewTask--open';
  }

  openBox() {
    this.createNewTaskBtn.style.borderBottom = '0.2vw solid #282828';
    this.createNewTaskContainer.classList.toggle(this.openTaskContainerClass);
  }

  closeBox() {
    this.createNewTaskContainer.classList.toggle(this.openTaskContainerClass);
    setTimeout(() => {
      this.createNewTaskBtn.style.border = '0.2vw solid #F4F4F4';
    }, 300);
  }

  clearInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = new Date().toISOString().slice(0, 10);
    this.colorBox.style.backgroundColor = '#ffffff';
  }

  saveTask() {
    const data = {
      title: this.title.value,
      description: this.description.value,
      importance: this.colorBox.style.backgroundColor,
    };
    if (localStorage.tasks) {
      let obj = JSON.parse(localStorage.tasks);
      if (obj[this.date.value]) {
        obj[this.date.value].push(data);
      } else {
        obj[this.date.value] = [data];
        const sortingObj = Object.keys(obj).sort().reduce((object, key) => {
          object[key] = obj[key];
          return object;
        }, {});
        obj = sortingObj;
      }
      localStorage.tasks = JSON.stringify(obj);
    } else {
      localStorage.tasks = JSON.stringify({ [this.date.value]: [data] });
    }
  }

  generateEvents() {
    this.createNewTaskBtn.addEventListener('click', () => {
      if (this.createNewTaskContainer.classList.contains(this.openTaskContainerClass)) {
        this.closeBox(this.createNewTaskContainer);
      } else {
        this.openBox(this.createNewTaskContainer);
      }
    });

    document.querySelector('.main').addEventListener('click', (e) => {
      if (!e.path.includes(this.createNewTaskContainer) && this.createNewTaskContainer.classList.contains(this.openTaskContainerClass)) this.closeBox();
    });

    this.submitBtn.addEventListener('click', () => {
      if (this.title.value) {
        this.saveTask();
        this.clearInputs();
        this.closeBox();
      }
    });
  }
}
