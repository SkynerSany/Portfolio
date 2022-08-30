import Task from './task';
import GenerationHTMLElements from './generationHTMLElements';
import TasksEvents from './tasksEvents';
import Language from './language';
import * as DOMNodes from './DOMNodes';

export default class GenerationTask {
  constructor() {
    this.taskBox = DOMNodes.taskBox;
    this.tasksContainer = DOMNodes.tasksContainer;
    this.language = new Language();
  }

  removeOlderTasks() {
    if (!localStorage.tasks) return;

    const tasksData = JSON.parse(localStorage.tasks);

    Object.keys(tasksData).forEach((key) => {
      if (key < new Date().toISOString().slice(0, 10)) delete tasksData[key];
    });

    localStorage.tasks = JSON.stringify(tasksData);
  }

  clearTable() {
    document.querySelector('.tasks').replaceChildren();
  }

  confirmationEvent(confirmationBtn, taskTitle) {
    new TasksEvents(confirmationBtn, taskTitle).generateEvents();
  }

  findTitleAndBtn(arr, confirmation) {
    const titleAndBtnArr = [];

    arr.forEach((item) => {
      if (item.classList.contains('tasks__task') || item.classList.contains('tasks__confirmationBtn')) {
        titleAndBtnArr.push(item);
      }
    });

    this.confirmationEvent(titleAndBtnArr[1], titleAndBtnArr[0]);
    if (confirmation) titleAndBtnArr[1].click();
  }

  generationTasksBox() {
    const tasksContainerHTML = this.mergeToDOM(this.tasksContainer);
    document.querySelector('.tasks').appendChild(tasksContainerHTML[0]);
    return tasksContainerHTML;
  }

  generationTask(tasksContainerHTML, confirmation) {
    const taskBoxHTML = this.mergeToDOM(this.taskBox);
    this.findTitleAndBtn(taskBoxHTML, confirmation);
    tasksContainerHTML[tasksContainerHTML.length - 1].appendChild(taskBoxHTML[0]);
  }

  mergeToDOM(arr) {
    const generationHTMLElements = new GenerationHTMLElements();
    let result = [];

    arr.forEach((item) => {
      Object.keys(item).forEach((key) => {
        result.push(generationHTMLElements.generationElement(key, item[key]));

        if (item[key].parentClass) {
          result = generationHTMLElements.addChild(item[key].parentClass, result);
        }
      });
    });

    return result;
  }

  addTasksBox(key) {
    this.tasksContainer.forEach((element) => {
      if (element.p) {
        if (key === new Date().toISOString().slice(0, 10)) {
          element.p.textContent = this.language[document.querySelector('.header__selectedLang').textContent.toLocaleLowerCase()].tasks__date;
        } else {
          element.p.textContent = key;
        }
      }
    });
  }

  addTask(element) {
    this.taskBox.forEach((item) => {
      if (item.p && item.p.class === 'tasks__title') {
        item.p.textContent = element.title;
      } else if (item.p && item.p.class === 'tasks__description') {
        item.p.textContent = element.description;
      } else if (item.div && item.div.class === 'tasks__importanceBox') {
        item.div.style = `background-color: ${element.importance}`;
      }
    });
  }

  addTasksToDOM() {
    if (!localStorage.tasks) return;

    const tasksData = JSON.parse(localStorage.tasks);
    this.clearTable();
    this.removeOlderTasks();

    Object.keys(tasksData).forEach((key) => {
      this.addTasksBox(key);
      const tasksContainerHTML = this.generationTasksBox();

      tasksData[key].forEach((element) => {
        this.addTask(element);
        this.generationTask(tasksContainerHTML, (element.taskConfirm === 'confirm'));
      });

      const task = new Task(tasksContainerHTML);
      task.openDayTasksEvent();
    });

    if (document.querySelector('.tasks__openTaskBtn')) document.querySelector('.tasks__openTaskBtn').click();
  }
}
