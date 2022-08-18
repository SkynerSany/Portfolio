import SelectionMenu from './moduleSelectionMenu';
import CreateNewTask from './moduleCreateNewTask';
import GenerationTask from './moduleGenerationTask';
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

(function openTodayTasks() {
  document.querySelectorAll('.tasks__headerBox').forEach((element) => {
    if (element.firstChild.lastChild.textContent === new Date().toISOString().slice(0, 10)) {
      element.firstChild.lastChild.textContent = 'Today Tasks';
      element.lastChild.click();
    }
  });
}());
