import '../sass/style.scss';
import SelectionMenu from './selectionMenu';
import CreateNewTask from './createNewTask';
import SaveData from './saveData';
import GenerationTask from './generationTask';

const saveData = new SaveData();
const generationTask = new GenerationTask();
const createNewTask = new CreateNewTask();

const selectionMenu = new SelectionMenu(
  'createNewTask__colorsBox',
  'createNewTask__colors',
);

createNewTask.generateEvents();
createNewTask.clearInputs();
selectionMenu.selectionMenuEvent();
generationTask.addTasksToDOM();

window.onunload = () => saveData.saveAllTasks();
