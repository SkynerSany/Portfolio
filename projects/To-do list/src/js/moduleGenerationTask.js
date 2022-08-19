import TasksEvents from './tasksEvents';
import GenerationHTMLElements from './generationHTMLElements';

export default class GenerationTask {
  constructor() {
    this.taskBoxHTML = 0;
    this.tasksContainerHTML = 0;
    this.tasksList = [];
    this.tasksOpenBtn = 0;
    this.GenerationHTML = new GenerationHTMLElements();
  }

  generationTasksBox(tasksContainer) {
    this.tasksContainerHTML = this.mergeToDOM(tasksContainer);
    document.querySelector('.tasks').appendChild(this.tasksContainerHTML[0]);
  }

  generationTask(taskBox, confirmation) {
    this.taskBoxHTML = this.mergeToDOM(taskBox);
    this.findTitleAndBtn(this.taskBoxHTML, confirmation);
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

  searchHTMLElements(element, className) {
    if (element.classList.contains(className)) return element;
  }

  getObjectHeight() {
    return this.tasksList.length * (parseFloat(getComputedStyle(this.tasksList[0]).height)
      + parseFloat(getComputedStyle(this.tasksList[0]).marginTop) * 2);
  }

  changeTasksListStyle(listHeight, taskPosition, taskTransition, taskOpacity) {
    this.tasksContainerHTML[this.tasksContainerHTML.length - 1].style.height = listHeight;
    this.tasksList.forEach((element) => {
      element.style.position = taskPosition;
      element.style.transition = taskTransition;
      element.style.opacity = taskOpacity;
    });
  }

  openDayTasksEvent() {
    this.tasksOpenBtn = this.tasksContainerHTML.find((element) => this.searchHTMLElements(element, 'tasks__openTaskBtn'));
    this.tasksList = this.tasksContainerHTML[this.tasksContainerHTML.length - 1].childNodes;
    this.tasksOpenBtn.addEventListener('click', () => {
      this.openDayTask();
    });
  }

  openDayTask() {
    if (this.tasksOpenBtn.childNodes[0].classList.contains('tasks__openTaskBtnIcon--opened')) {
      this.changeTasksListStyle('0px', 'absolute', '0ms 0ms', 0);
    } else {
      this.changeTasksListStyle(`${this.getObjectHeight()}px`, 'relative', '300ms 300ms', 1);
    }
    this.tasksOpenBtn.childNodes[0].classList.toggle('tasks__openTaskBtnIcon--opened');
  }

  findTitleAndBtn(arr, confirmation) {
    const titleAndBtnArr = [];
    arr.forEach((item) => {
      if (item.classList.contains('tasks__task') || item.classList.contains('tasks__confirmationBtn')) {
        titleAndBtnArr.push(item);
      }
    });
    this.eventConfirmation(titleAndBtnArr[1], titleAndBtnArr[0]);
    if (confirmation) titleAndBtnArr[1].click();
  }

  eventConfirmation(confirmationBtn, taskTitle) {
    new TasksEvents(confirmationBtn, taskTitle).generateEvents();
  }
}
