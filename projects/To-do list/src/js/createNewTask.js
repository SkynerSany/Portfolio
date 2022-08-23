import SaveData from './saveData';
import GenerationTask from './generationTask';

export default class CreateNewTask {
  constructor() {
    this.formCreatingNewTask = document.querySelector('.createNewTask');
    this.btnCreateTask = document.querySelector('.header__createNewTaskBtn');
  }

  openBox() {
    this.btnCreateTask.style.borderBottom = window.innerWidth <= 768 ? '0.4vw solid #282828' : '0.2vw solid #282828';
    this.formCreatingNewTask.classList.toggle('createNewTask--open');
  }

  closeBox() {
    this.formCreatingNewTask.classList.toggle('createNewTask--open');

    setTimeout(() => {
      this.btnCreateTask.style.border = window.innerWidth <= 768 ? '0.4vw solid #F4F4F4' : '0.2vw solid #F4F4F4';
    }, 300);
  }

  getFormInputs() {
    return {
      title: document.querySelector('.createNewTask__title'),
      description: document.querySelector('.createNewTask__description'),
      date: document.querySelector('.createNewTask__date'),
      colorBox: document.querySelector('.createNewTask__colorsBox'),
    };
  }

  clearInputs() {
    const formInputs = this.getFormInputs();
    formInputs.title.value = '';
    formInputs.description.value = '';
    formInputs.date.value = new Date().toISOString().slice(0, 10);
    formInputs.colorBox.style.backgroundColor = '#ffffff';
  }

  generateEvents() {
    const submitBtn = document.querySelector('.createNewTask__submitBtn');
    const saveData = new SaveData();
    const generationTask = new GenerationTask();

    this.btnCreateTask.addEventListener('click', () => {
      if (this.formCreatingNewTask.classList.contains('createNewTask--open')) {
        this.closeBox(this.formCreatingNewTask);
      } else {
        this.openBox(this.formCreatingNewTask);
      }
    });

    submitBtn.addEventListener('click', () => {
      const formInputs = this.getFormInputs();

      if (formInputs.title.value) {
        saveData.saveTask(
          formInputs.title.value,
          formInputs.description.value,
          formInputs.colorBox.style.backgroundColor,
          'unconfirm',
          formInputs.date.value,
        );

        generationTask.addTasksToDOM();
        this.clearInputs();
        this.closeBox();
      }
    });
  }
}
