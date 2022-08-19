export default class TasksEvents {
  constructor(confirmationBtn, taskTitle) {
    this.confirmationBtn = confirmationBtn;
    this.taskTitle = taskTitle;
  }

  switchConfirmation() {
    this.confirmationBtn.classList.toggle('switchOn');
  }

  generateEvents() {
    this.confirmationBtn.addEventListener('click', () => {
      this.switchConfirmation();
      this.taskTitle.childNodes.forEach(item => item.classList.toggle('tasks__task--confirm'));
      this.confirmationBtn.parentElement.dataset.confirm = this.confirmationBtn.parentElement.dataset.confirm === 'unconfirm' ? 'confirm' : 'unconfirm';
    });
  }
}
