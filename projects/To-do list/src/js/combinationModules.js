import SelectionMenu from './moduleSelectionMenu';
import CreateNewTask from './moduleCreateNewTask';
import LoadData from './loadData';

const ModuleCreateNewTask = new CreateNewTask();

const ModuleSelectionMenu = new SelectionMenu(
  'createNewTask__colorsBox',
  'createNewTask__colors',
);

const ModuleLoadData = new LoadData();

ModuleCreateNewTask.generateEvents();
ModuleCreateNewTask.clearInputs();
ModuleSelectionMenu.generateEventForSwitchMenu();
ModuleLoadData.convertDataFromStorage();

window.onunload = () => ModuleLoadData.saveData();
