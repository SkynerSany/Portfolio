import SelectionMenu from './moduleSelectionMenu';
import CreateNewTask from './moduleCreateNewTask';

const ModuleCreateNewTask = new CreateNewTask();

const ModuleSelectionMenu = new SelectionMenu(
  'createNewTask__colorsBox',
  'createNewTask__colors',
  '0.2vw solid #282828',
  '0.2vw solid #F4F4F4',
);

ModuleCreateNewTask.generateEvents();
ModuleCreateNewTask.clearInputs();
ModuleSelectionMenu.generateEventForSwitchMenu();
