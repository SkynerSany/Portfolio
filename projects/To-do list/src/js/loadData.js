import GenerationTask from './moduleGenerationTask';

export default class LoadData {
  constructor() {
    this.taskBox = [
      {
        div: {
          class: 'tasks__task',
        },
      },
      {
        div: {
          class: 'tasks__importanceBox',
          parentClass: 'tasks__task',
          style: '',
        },
      },
      {
        div: {
          class: 'tasks__data',
          parentClass: 'tasks__task',
        },
      },
      {
        p: {
          class: 'tasks__title',
          parentClass: 'tasks__data',
          textContent: '',
        },
      },
      {
        p: {
          class: 'tasks__description',
          parentClass: 'tasks__data',
          textContent: '',
        },
      },
      {
        button: {
          class: 'tasks__confirmationBtn',
          parentClass: 'tasks__task',
        },
      },
    ];
    this.tasksContainer = [
      {
        div: {
          class: 'tasks__taskContainer',
        },
      },
      {
        div: {
          class: 'tasks__headerBox',
          parentClass: 'tasks__taskContainer',
        },
      },
      {
        div: {
          class: 'tasks__dataBox',
          parentClass: 'tasks__headerBox',
        },
      },
      {
        div: {
          class: 'tasks__importanceBox',
          parentClass: 'tasks__dataBox',
        },
      },
      {
        p: {
          class: 'tasks__date',
          parentClass: 'tasks__dataBox',
          textContent: '',
        },
      },
      {
        button: {
          class: 'tasks__openTaskBtn',
          parentClass: 'tasks__headerBox',
        },
      },
      {
        img: {
          class: 'tasks__openTaskBtnIcon',
          src: './src/assets/images/arrow.svg',
          alt: 'arrow',
          parentClass: 'tasks__openTaskBtn',
        },
      },
      {
        div: {
          class: 'tasks__list',
          parentClass: 'tasks__taskContainer',
        },
      },
    ];
  }

  clearOlderTasks() {
    if (localStorage.tasks) {
      const data = JSON.parse(localStorage.tasks);
      Object.keys(data).forEach(key => {
        if (key < new Date().toISOString().slice(0, 10)) delete data[key];
      });
      localStorage.tasks = JSON.stringify(data);
      return data;
    }
  }

  convertDataFromStorage() {
    if (localStorage.tasks) {
      const data = this.clearOlderTasks();
      Object.keys(data).forEach((key) => {
        const moduleGenerationTask = new GenerationTask();
        this.tasksContainer.forEach((item) => {
          if (item.p) {
            item.p.textContent = key;
          }
        });
        moduleGenerationTask.generationTasksBox(this.tasksContainer);
        data[key].forEach((elem) => {
          this.taskBox.forEach((item) => {
            if (item.p && item.p.class === 'tasks__title') {
              item.p.textContent = elem.title;
            } else if (item.p && item.p.class === 'tasks__description') {
              item.p.textContent = elem.description;
            } else if (item.div && item.div.class === 'tasks__importanceBox') {
              item.div.style = `background-color: ${elem.importance}`;
            }
          });
          moduleGenerationTask.generationTask(this.taskBox);
        });
        moduleGenerationTask.openDayTasksEvent();
      });
    }
  }
}
