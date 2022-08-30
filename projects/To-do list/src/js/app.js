import '../sass/style.scss';
import SelectionMenu from './selectionMenu';
import CreateNewTask from './createNewTask';
import SaveData from './saveData';
import GenerationTask from './generationTask';
import Language from './language';

const saveData = new SaveData();
const generationTask = new GenerationTask();
const createNewTask = new CreateNewTask();
const language = new Language();

const colorSelectionMenu = new SelectionMenu(
  'createNewTask__colorsBox',
  'createNewTask__colors',
  'color',
);

const langSelectionMenu = new SelectionMenu(
  'header__selectedLang',
  'header__langList',
  'text',
);

createNewTask.generateEvents();
createNewTask.clearInputs();
colorSelectionMenu.selectionMenuEvent();
generationTask.addTasksToDOM();
language.onWindowLoad();
langSelectionMenu.selectionMenuEvent();

window.onunload = () => {
  saveData.saveAllTasks();
  saveData.saveLanguage();
};
