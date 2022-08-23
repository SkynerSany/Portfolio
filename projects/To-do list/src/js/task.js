export default class Task {
  constructor(tasksContainerHTML) {
    this.tasksContainerHTML = tasksContainerHTML;
    this.tasksList = [];
    this.btnOpenTask = 'HTML element';
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
    this.btnOpenTask = this.tasksContainerHTML.find((element) => this.searchHTMLElements(element, 'tasks__openTaskBtn'));
    this.taskHeader = this.tasksContainerHTML.find((element) => this.searchHTMLElements(element, 'tasks__headerBox'));
    this.tasksList = this.tasksContainerHTML[this.tasksContainerHTML.length - 1].childNodes;

    this.taskHeader.addEventListener('click', () => {
      this.ShowDayTask();
    });
  }

  ShowDayTask() {
    if (this.btnOpenTask.childNodes[0].classList.contains('tasks__openTaskBtnIcon--opened')) {
      this.changeTasksListStyle('0px', 'absolute', '0ms 0ms', 0);
    } else {
      this.changeTasksListStyle(`${this.getObjectHeight()}px`, 'relative', '300ms 300ms', 1);
    }
    this.btnOpenTask.childNodes[0].classList.toggle('tasks__openTaskBtnIcon--opened');
  }
}
