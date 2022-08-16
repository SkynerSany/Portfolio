import TasksEvents from './tasksEvents';
import GenerationHTMLElements from './generationHTMLElements';

export default class GenerationTask {
  constructor() {
    this.taskBoxHTML = 0;
    this.tasksContainerHTML = 0;
    this.GenerationHTML = new GenerationHTMLElements();
  }

  generationTasksBox(tasksContainer) {
    this.tasksContainerHTML = this.mergeToDOM(tasksContainer);
    document.querySelector('.tasks').appendChild(this.tasksContainerHTML[0]);
  }

  generationTask(taskBox) {
    this.taskBoxHTML = this.mergeToDOM(taskBox);
    this.findTitleAndBtn(this.taskBoxHTML);
    this.tasksContainerHTML[this.tasksContainerHTML.length - 1].appendChild(this.taskBoxHTML[0]);
  }

  mergeToDOM(arr) {
    let result = [];
    arr.forEach((item) => {
      Object.keys(item).forEach((key) => {
        result.push(this.GenerationHTML.generationElem(key, item[key]));
        if (item[key].parentClass) {
          result = this.GenerationHTML.addChild(item[key].parentClass, result);
        }
      });
    });
    return result;
  }

  findTitleAndBtn(arr) {
    const titleAndBtnArr = [];
    arr.forEach((item) => {
      if (item.classList.contains('tasks__task') || item.classList.contains('tasks__confirmationBtn')) {
        titleAndBtnArr.push(item);
      }
    });
    this.eventConfirmation(titleAndBtnArr[1], titleAndBtnArr[0]);
  }

  eventConfirmation(confirmationBtn, taskTitle) {
    new TasksEvents(confirmationBtn, taskTitle).generateEvents();
  }
}
