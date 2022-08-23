const taskBox = [
  {
    div: {
      class: 'tasks__task',
      'data-confirm': 'unconfirm',
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

const tasksContainer = [
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

export { taskBox, tasksContainer };
