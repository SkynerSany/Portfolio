import '../sass/style.scss';

const createNewTaskContainer = document.querySelector('.createNewTask');
const createNewTaskBtn = document.querySelector('.header__createNewTaskBtn');
const createNewTaskColorsBox = document.querySelector('.createNewTask__colorsBox');
const createNewTaskColors = document.querySelector('.createNewTask__colors');

createNewTaskBtn.addEventListener('click', () => {
  if (createNewTaskContainer.className === 'createNewTask createNewTask--close'
      || createNewTaskContainer.className === 'createNewTask') {
    createNewTaskBtn.style.borderBottom = '0.2vw solid #282828';
    createNewTaskContainer.className = 'createNewTask createNewTask--open';
  } else {
    createNewTaskContainer.className = 'createNewTask createNewTask--close';
    setTimeout(() => {
      createNewTaskBtn.style.border = '0.2vw solid #F4F4F4';
    }, 300);
  }
});

createNewTaskColorsBox.addEventListener('click', () => {
  if (window.getComputedStyle(createNewTaskColors).display === 'none') {
    createNewTaskColors.style.display = 'block';
  } else {
    createNewTaskColors.style.display = 'none';
  }
});

createNewTaskColors.addEventListener('click', (e) => {
  createNewTaskColorsBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
  createNewTaskColors.style.display = 'none';
});
