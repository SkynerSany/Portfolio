/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/DOMNodes.js":
/*!****************************!*\
  !*** ./src/js/DOMNodes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskBox": () => (/* binding */ taskBox),
/* harmony export */   "tasksContainer": () => (/* binding */ tasksContainer)
/* harmony export */ });
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




/***/ }),

/***/ "./src/js/createNewTask.js":
/*!*********************************!*\
  !*** ./src/js/createNewTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNewTask)
/* harmony export */ });
/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveData */ "./src/js/saveData.js");
/* harmony import */ var _generationTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generationTask */ "./src/js/generationTask.js");



class CreateNewTask {
  constructor() {
    this.formCreatingNewTask = document.querySelector('.createNewTask');
    this.btnCreateTask = document.querySelector('.header__createNewTaskBtn');
  }

  openBox() {
    this.btnCreateTask.style.borderBottom = window.innerWidth <= 768 ? '0.4vw solid #282828' : '0.2vw solid #282828';
    this.formCreatingNewTask.classList.toggle('createNewTask--open');
  }

  closeBox() {
    this.formCreatingNewTask.classList.toggle('createNewTask--open');

    setTimeout(() => {
      this.btnCreateTask.style.border = window.innerWidth <= 768 ? '0.4vw solid #F4F4F4' : '0.2vw solid #F4F4F4';
    }, 300);
  }

  getFormInputs() {
    return {
      title: document.querySelector('.createNewTask__title'),
      description: document.querySelector('.createNewTask__description'),
      date: document.querySelector('.createNewTask__date'),
      colorBox: document.querySelector('.createNewTask__colorsBox'),
    };
  }

  clearInputs() {
    const formInputs = this.getFormInputs();
    formInputs.title.value = '';
    formInputs.description.value = '';
    formInputs.date.value = new Date().toISOString().slice(0, 10);
    formInputs.colorBox.style.backgroundColor = '#ffffff';
  }

  generateEvents() {
    const submitBtn = document.querySelector('.createNewTask__submitBtn');
    const saveData = new _saveData__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const generationTask = new _generationTask__WEBPACK_IMPORTED_MODULE_1__["default"]();

    this.btnCreateTask.addEventListener('click', () => {
      if (this.formCreatingNewTask.classList.contains('createNewTask--open')) {
        this.closeBox(this.formCreatingNewTask);
      } else {
        this.openBox(this.formCreatingNewTask);
      }
    });

    submitBtn.addEventListener('click', () => {
      const formInputs = this.getFormInputs();
      if (formInputs.title.value) {
        saveData.saveTask(
          formInputs.title.value,
          formInputs.description.value,
          formInputs.colorBox.style.backgroundColor,
          'unconfirm',
          formInputs.date.value,
        );
        generationTask.addTasksToDOM();
        this.clearInputs();
        this.closeBox();
      }
    });
  }
}


/***/ }),

/***/ "./src/js/generationHTMLElements.js":
/*!******************************************!*\
  !*** ./src/js/generationHTMLElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenerationHTMLElements)
/* harmony export */ });
class GenerationHTMLElements {
  generationElement(tag, attributes) {
    const node = document.createElement(tag);

    Object.keys(attributes).forEach((key) => {
      if (key === 'textContent') {
        node.textContent = attributes[key];
      } else if (key !== 'parentClass') {
        node.setAttribute(key, attributes[key]);
      }
    });

    return node;
  }

  addChild(parent, childsArray) {
    const result = childsArray;

    childsArray.forEach((item, i) => {
      if (item.classList.contains(parent)) {
        result[i].appendChild(childsArray[childsArray.length - 1]);
      }
    });

    return result;
  }
}


/***/ }),

/***/ "./src/js/generationTask.js":
/*!**********************************!*\
  !*** ./src/js/generationTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenerationTask)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/js/task.js");
/* harmony import */ var _generationHTMLElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generationHTMLElements */ "./src/js/generationHTMLElements.js");
/* harmony import */ var _tasksEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksEvents */ "./src/js/tasksEvents.js");
/* harmony import */ var _DOMNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMNodes */ "./src/js/DOMNodes.js");





class GenerationTask {
  constructor() {
    this.taskBox = _DOMNodes__WEBPACK_IMPORTED_MODULE_3__.taskBox;
    this.tasksContainer = _DOMNodes__WEBPACK_IMPORTED_MODULE_3__.tasksContainer;
  }

  removeOlderTasks() {
    if (!localStorage.tasks) return;

    const tasksData = JSON.parse(localStorage.tasks);

    Object.keys(tasksData).forEach((key) => {
      if (key < new Date().toISOString().slice(0, 10)) delete tasksData[key];
    });

    localStorage.tasks = JSON.stringify(tasksData);
  }

  clearTable() {
    document.querySelector('.tasks').replaceChildren();
  }

  renameTodayTasks() {
    document.querySelectorAll('.tasks__headerBox').forEach((element) => {
      if (element.firstChild.lastChild.textContent === new Date().toISOString().slice(0, 10)) {
        element.firstChild.lastChild.textContent = 'Today Tasks';
      }
    });
  }

  confirmationEvent(confirmationBtn, taskTitle) {
    new _tasksEvents__WEBPACK_IMPORTED_MODULE_2__["default"](confirmationBtn, taskTitle).generateEvents();
  }

  findTitleAndBtn(arr, confirmation) {
    const titleAndBtnArr = [];

    arr.forEach((item) => {
      if (item.classList.contains('tasks__task') || item.classList.contains('tasks__confirmationBtn')) {
        titleAndBtnArr.push(item);
      }
    });

    this.confirmationEvent(titleAndBtnArr[1], titleAndBtnArr[0]);
    if (confirmation) titleAndBtnArr[1].click();
  }

  generationTasksBox() {
    const tasksContainerHTML = this.mergeToDOM(this.tasksContainer);
    document.querySelector('.tasks').appendChild(tasksContainerHTML[0]);
    return tasksContainerHTML;
  }

  generationTask(tasksContainerHTML, confirmation) {
    const taskBoxHTML = this.mergeToDOM(this.taskBox);
    this.findTitleAndBtn(taskBoxHTML, confirmation);
    tasksContainerHTML[tasksContainerHTML.length - 1].appendChild(taskBoxHTML[0]);
  }

  mergeToDOM(arr) {
    const generationHTMLElements = new _generationHTMLElements__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let result = [];

    arr.forEach((item) => {
      Object.keys(item).forEach((key) => {
        result.push(generationHTMLElements.generationElement(key, item[key]));

        if (item[key].parentClass) {
          result = generationHTMLElements.addChild(item[key].parentClass, result);
        }
      });
    });

    return result;
  }

  addTasksBox(key) {
    this.tasksContainer.forEach((element) => {
      if (element.p) {
        element.p.textContent = key;
      }
    });
  }

  addTask(element) {
    this.taskBox.forEach((item) => {
      if (item.p && item.p.class === 'tasks__title') {
        item.p.textContent = element.title;
      } else if (item.p && item.p.class === 'tasks__description') {
        item.p.textContent = element.description;
      } else if (item.div && item.div.class === 'tasks__importanceBox') {
        item.div.style = `background-color: ${element.importance}`;
      }
    });
  }

  addTasksToDOM() {
    if (!localStorage.tasks) return;

    const tasksData = JSON.parse(localStorage.tasks);
    this.clearTable();
    this.removeOlderTasks();

    Object.keys(tasksData).forEach((key) => {
      this.addTasksBox(key);
      const tasksContainerHTML = this.generationTasksBox();

      tasksData[key].forEach((element) => {
        this.addTask(element);
        this.generationTask(tasksContainerHTML, (element.taskConfirm === 'confirm'));
      });

      const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](tasksContainerHTML);
      task.openDayTasksEvent();
    });

    this.renameTodayTasks();
    if (document.querySelector('.tasks__openTaskBtn')) document.querySelector('.tasks__openTaskBtn').click();
  }
}


/***/ }),

/***/ "./src/js/saveData.js":
/*!****************************!*\
  !*** ./src/js/saveData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveData)
/* harmony export */ });
class SaveData {
  saveTask(title, description, importance, taskConfirm, date) {
    const data = {
      title,
      description,
      importance,
      taskConfirm,
    };

    if (localStorage.tasks) {
      let obj = JSON.parse(localStorage.tasks);
      if (obj[date]) {
        obj[date].push(data);
      } else {
        obj[date] = [data];
        const sortingObj = Object.keys(obj).sort().reduce((object, key) => {
          object[key] = obj[key];
          return object;
        }, {});
        obj = sortingObj;
      }
      localStorage.tasks = JSON.stringify(obj);
    } else {
      localStorage.tasks = JSON.stringify({ [date]: [data] });
    }
  }

  saveAllTasks() {
    localStorage.tasks = '{}';
    document.querySelectorAll('.tasks__taskContainer').forEach((item) => {
      item.lastChild.childNodes.forEach((element) => {
        const taskValues = [];
        taskValues.push(element.childNodes[1].firstChild.textContent);
        taskValues.push(element.childNodes[1].lastChild.textContent);
        taskValues.push(getComputedStyle(element.firstChild).backgroundColor);
        taskValues.push(element.dataset.confirm);
        if (item.firstChild.firstChild.lastChild.textContent !== 'Today Tasks') {
          taskValues.push(item.firstChild.firstChild.lastChild.textContent);
        } else {
          taskValues.push(new Date().toISOString().slice(0, 10));
        }
        this.saveTask(...taskValues);
      });
    });
  }
}


/***/ }),

/***/ "./src/js/selectionMenu.js":
/*!*********************************!*\
  !*** ./src/js/selectionMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionMenu)
/* harmony export */ });
class SelectionMenu {
  constructor(selectionBox, selectionItem) {
    this.selectionBox = document.querySelector(`.${selectionBox}`);
    this.selectionItem = document.querySelector(`.${selectionItem}`);
  }

  selectionMenuEvent() {
    this.selectionBox.addEventListener('click', () => {
      if (window.getComputedStyle(this.selectionItem).display === 'none') {
        this.selectionItem.style.display = 'block';
      } else {
        this.selectionItem.style.display = 'none';
      }
    });

    this.selectionBox.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.selectionItem)) {
        this.selectionItem.style.display = 'none';
      }
    });

    this.selectionItem.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.selectionBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
      }
      this.selectionItem.style.display = 'none';
    });
  }
}


/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
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


/***/ }),

/***/ "./src/js/tasksEvents.js":
/*!*******************************!*\
  !*** ./src/js/tasksEvents.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TasksEvents)
/* harmony export */ });
class TasksEvents {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _selectionMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectionMenu */ "./src/js/selectionMenu.js");
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewTask */ "./src/js/createNewTask.js");
/* harmony import */ var _saveData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveData */ "./src/js/saveData.js");
/* harmony import */ var _generationTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generationTask */ "./src/js/generationTask.js");






const saveData = new _saveData__WEBPACK_IMPORTED_MODULE_3__["default"]();
const generationTask = new _generationTask__WEBPACK_IMPORTED_MODULE_4__["default"]();
const createNewTask = new _createNewTask__WEBPACK_IMPORTED_MODULE_2__["default"]();

const selectionMenu = new _selectionMenu__WEBPACK_IMPORTED_MODULE_1__["default"](
  'createNewTask__colorsBox',
  'createNewTask__colors',
);

createNewTask.generateEvents();
createNewTask.clearInputs();
selectionMenu.selectionMenuEvent();
generationTask.addTasksToDOM();

window.onunload = () => saveData.saveAllTasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDZ0I7QUFDQTtBQUNWO0FBQ1k7O0FBRTlDLHFCQUFxQixpREFBUTtBQUM3QiwyQkFBMkIsdURBQWM7QUFDekMsMEJBQTBCLHNEQUFhOztBQUV2QywwQkFBMEIsc0RBQWE7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9ET01Ob2Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZ2VuZXJhdGlvblRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9zYXZlRGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3NlbGVjdGlvbk1lbnUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdGFza3NFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHRhc2tCb3ggPSBbXG4gIHtcbiAgICBkaXY6IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgJ2RhdGEtY29uZmlybSc6ICd1bmNvbmZpcm0nLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkaXY6IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX2ltcG9ydGFuY2VCb3gnLFxuICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICBzdHlsZTogJycsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRpdjoge1xuICAgICAgY2xhc3M6ICd0YXNrc19fZGF0YScsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcDoge1xuICAgICAgY2xhc3M6ICd0YXNrc19fdGl0bGUnLFxuICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fZGF0YScsXG4gICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHA6IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX2Rlc2NyaXB0aW9uJyxcbiAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGEnLFxuICAgICAgdGV4dENvbnRlbnQ6ICcnLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBidXR0b246IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX2NvbmZpcm1hdGlvbkJ0bicsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICB9LFxuICB9LFxuXTtcblxuY29uc3QgdGFza3NDb250YWluZXIgPSBbXG4gIHtcbiAgICBkaXY6IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBkaXY6IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX2hlYWRlckJveCcsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgZGl2OiB7XG4gICAgICBjbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2hlYWRlckJveCcsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRpdjoge1xuICAgICAgY2xhc3M6ICd0YXNrc19faW1wb3J0YW5jZUJveCcsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgcDoge1xuICAgICAgY2xhc3M6ICd0YXNrc19fZGF0ZScsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgYnV0dG9uOiB7XG4gICAgICBjbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bicsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19oZWFkZXJCb3gnLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbWc6IHtcbiAgICAgIGNsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuSWNvbicsXG4gICAgICBzcmM6ICcuL3NyYy9hc3NldHMvaW1hZ2VzL2Fycm93LnN2ZycsXG4gICAgICBhbHQ6ICdhcnJvdycsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bicsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGRpdjoge1xuICAgICAgY2xhc3M6ICd0YXNrc19fbGlzdCcsXG4gICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IHsgdGFza0JveCwgdGFza3NDb250YWluZXIgfTtcbiIsImltcG9ydCBTYXZlRGF0YSBmcm9tICcuL3NhdmVEYXRhJztcbmltcG9ydCBHZW5lcmF0aW9uVGFzayBmcm9tICcuL2dlbmVyYXRpb25UYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlTmV3VGFzayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9ybUNyZWF0aW5nTmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrJyk7XG4gICAgdGhpcy5idG5DcmVhdGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY3JlYXRlTmV3VGFza0J0bicpO1xuICB9XG5cbiAgb3BlbkJveCgpIHtcbiAgICB0aGlzLmJ0bkNyZWF0ZVRhc2suc3R5bGUuYm9yZGVyQm90dG9tID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4ID8gJzAuNHZ3IHNvbGlkICMyODI4MjgnIDogJzAuMnZ3IHNvbGlkICMyODI4MjgnO1xuICAgIHRoaXMuZm9ybUNyZWF0aW5nTmV3VGFzay5jbGFzc0xpc3QudG9nZ2xlKCdjcmVhdGVOZXdUYXNrLS1vcGVuJyk7XG4gIH1cblxuICBjbG9zZUJveCgpIHtcbiAgICB0aGlzLmZvcm1DcmVhdGluZ05ld1Rhc2suY2xhc3NMaXN0LnRvZ2dsZSgnY3JlYXRlTmV3VGFzay0tb3BlbicpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmJ0bkNyZWF0ZVRhc2suc3R5bGUuYm9yZGVyID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4ID8gJzAuNHZ3IHNvbGlkICNGNEY0RjQnIDogJzAuMnZ3IHNvbGlkICNGNEY0RjQnO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBnZXRGb3JtSW5wdXRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3RpdGxlJyksXG4gICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX2Rlc2NyaXB0aW9uJyksXG4gICAgICBkYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fZGF0ZScpLFxuICAgICAgY29sb3JCb3g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19jb2xvcnNCb3gnKSxcbiAgICB9O1xuICB9XG5cbiAgY2xlYXJJbnB1dHMoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0cyA9IHRoaXMuZ2V0Rm9ybUlucHV0cygpO1xuICAgIGZvcm1JbnB1dHMudGl0bGUudmFsdWUgPSAnJztcbiAgICBmb3JtSW5wdXRzLmRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgZm9ybUlucHV0cy5kYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBmb3JtSW5wdXRzLmNvbG9yQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcbiAgfVxuXG4gIGdlbmVyYXRlRXZlbnRzKCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19zdWJtaXRCdG4nKTtcbiAgICBjb25zdCBzYXZlRGF0YSA9IG5ldyBTYXZlRGF0YSgpO1xuICAgIGNvbnN0IGdlbmVyYXRpb25UYXNrID0gbmV3IEdlbmVyYXRpb25UYXNrKCk7XG5cbiAgICB0aGlzLmJ0bkNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5mb3JtQ3JlYXRpbmdOZXdUYXNrLmNsYXNzTGlzdC5jb250YWlucygnY3JlYXRlTmV3VGFzay0tb3BlbicpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCb3godGhpcy5mb3JtQ3JlYXRpbmdOZXdUYXNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbkJveCh0aGlzLmZvcm1DcmVhdGluZ05ld1Rhc2spO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZm9ybUlucHV0cyA9IHRoaXMuZ2V0Rm9ybUlucHV0cygpO1xuICAgICAgaWYgKGZvcm1JbnB1dHMudGl0bGUudmFsdWUpIHtcbiAgICAgICAgc2F2ZURhdGEuc2F2ZVRhc2soXG4gICAgICAgICAgZm9ybUlucHV0cy50aXRsZS52YWx1ZSxcbiAgICAgICAgICBmb3JtSW5wdXRzLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIGZvcm1JbnB1dHMuY29sb3JCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICd1bmNvbmZpcm0nLFxuICAgICAgICAgIGZvcm1JbnB1dHMuZGF0ZS52YWx1ZSxcbiAgICAgICAgKTtcbiAgICAgICAgZ2VuZXJhdGlvblRhc2suYWRkVGFza3NUb0RPTSgpO1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICAgIHRoaXMuY2xvc2VCb3goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJhdGlvbkhUTUxFbGVtZW50cyB7XG4gIGdlbmVyYXRpb25FbGVtZW50KHRhZywgYXR0cmlidXRlcykge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAncGFyZW50Q2xhc3MnKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50LCBjaGlsZHNBcnJheSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNoaWxkc0FycmF5O1xuXG4gICAgY2hpbGRzQXJyYXkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHBhcmVudCkpIHtcbiAgICAgICAgcmVzdWx0W2ldLmFwcGVuZENoaWxkKGNoaWxkc0FycmF5W2NoaWxkc0FycmF5Lmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgR2VuZXJhdGlvbkhUTUxFbGVtZW50cyBmcm9tICcuL2dlbmVyYXRpb25IVE1MRWxlbWVudHMnO1xuaW1wb3J0IFRhc2tzRXZlbnRzIGZyb20gJy4vdGFza3NFdmVudHMnO1xuaW1wb3J0ICogYXMgRE9NTm9kZXMgZnJvbSAnLi9ET01Ob2Rlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRpb25UYXNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrQm94ID0gRE9NTm9kZXMudGFza0JveDtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVyID0gRE9NTm9kZXMudGFza3NDb250YWluZXI7XG4gIH1cblxuICByZW1vdmVPbGRlclRhc2tzKCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLnRhc2tzKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXNrc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG5cbiAgICBPYmplY3Qua2V5cyh0YXNrc0RhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSA8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpIGRlbGV0ZSB0YXNrc0RhdGFba2V5XTtcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzRGF0YSk7XG4gIH1cblxuICBjbGVhclRhYmxlKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLnJlcGxhY2VDaGlsZHJlbigpO1xuICB9XG5cbiAgcmVuYW1lVG9kYXlUYXNrcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3NfX2hlYWRlckJveCcpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50ID09PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSB7XG4gICAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAnVG9kYXkgVGFza3MnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uZmlybWF0aW9uRXZlbnQoY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpIHtcbiAgICBuZXcgVGFza3NFdmVudHMoY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpLmdlbmVyYXRlRXZlbnRzKCk7XG4gIH1cblxuICBmaW5kVGl0bGVBbmRCdG4oYXJyLCBjb25maXJtYXRpb24pIHtcbiAgICBjb25zdCB0aXRsZUFuZEJ0bkFyciA9IFtdO1xuXG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygndGFza3NfX3Rhc2snKSB8fCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygndGFza3NfX2NvbmZpcm1hdGlvbkJ0bicpKSB7XG4gICAgICAgIHRpdGxlQW5kQnRuQXJyLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmZpcm1hdGlvbkV2ZW50KHRpdGxlQW5kQnRuQXJyWzFdLCB0aXRsZUFuZEJ0bkFyclswXSk7XG4gICAgaWYgKGNvbmZpcm1hdGlvbikgdGl0bGVBbmRCdG5BcnJbMV0uY2xpY2soKTtcbiAgfVxuXG4gIGdlbmVyYXRpb25UYXNrc0JveCgpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lckhUTUwgPSB0aGlzLm1lcmdlVG9ET00odGhpcy50YXNrc0NvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXJIVE1MWzBdKTtcbiAgICByZXR1cm4gdGFza3NDb250YWluZXJIVE1MO1xuICB9XG5cbiAgZ2VuZXJhdGlvblRhc2sodGFza3NDb250YWluZXJIVE1MLCBjb25maXJtYXRpb24pIHtcbiAgICBjb25zdCB0YXNrQm94SFRNTCA9IHRoaXMubWVyZ2VUb0RPTSh0aGlzLnRhc2tCb3gpO1xuICAgIHRoaXMuZmluZFRpdGxlQW5kQnRuKHRhc2tCb3hIVE1MLCBjb25maXJtYXRpb24pO1xuICAgIHRhc2tzQ29udGFpbmVySFRNTFt0YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQodGFza0JveEhUTUxbMF0pO1xuICB9XG5cbiAgbWVyZ2VUb0RPTShhcnIpIHtcbiAgICBjb25zdCBnZW5lcmF0aW9uSFRNTEVsZW1lbnRzID0gbmV3IEdlbmVyYXRpb25IVE1MRWxlbWVudHMoKTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGdlbmVyYXRpb25IVE1MRWxlbWVudHMuZ2VuZXJhdGlvbkVsZW1lbnQoa2V5LCBpdGVtW2tleV0pKTtcblxuICAgICAgICBpZiAoaXRlbVtrZXldLnBhcmVudENsYXNzKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZ2VuZXJhdGlvbkhUTUxFbGVtZW50cy5hZGRDaGlsZChpdGVtW2tleV0ucGFyZW50Q2xhc3MsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFkZFRhc2tzQm94KGtleSkge1xuICAgIHRoaXMudGFza3NDb250YWluZXIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQucCkge1xuICAgICAgICBlbGVtZW50LnAudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRUYXNrKGVsZW1lbnQpIHtcbiAgICB0aGlzLnRhc2tCb3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fdGl0bGUnKSB7XG4gICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fZGVzY3JpcHRpb24nKSB7XG4gICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uZGl2ICYmIGl0ZW0uZGl2LmNsYXNzID09PSAndGFza3NfX2ltcG9ydGFuY2VCb3gnKSB7XG4gICAgICAgIGl0ZW0uZGl2LnN0eWxlID0gYGJhY2tncm91bmQtY29sb3I6ICR7ZWxlbWVudC5pbXBvcnRhbmNlfWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRUYXNrc1RvRE9NKCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLnRhc2tzKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXNrc0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG4gICAgdGhpcy5jbGVhclRhYmxlKCk7XG4gICAgdGhpcy5yZW1vdmVPbGRlclRhc2tzKCk7XG5cbiAgICBPYmplY3Qua2V5cyh0YXNrc0RhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5hZGRUYXNrc0JveChrZXkpO1xuICAgICAgY29uc3QgdGFza3NDb250YWluZXJIVE1MID0gdGhpcy5nZW5lcmF0aW9uVGFza3NCb3goKTtcblxuICAgICAgdGFza3NEYXRhW2tleV0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLmFkZFRhc2soZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvblRhc2sodGFza3NDb250YWluZXJIVE1MLCAoZWxlbWVudC50YXNrQ29uZmlybSA9PT0gJ2NvbmZpcm0nKSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tzQ29udGFpbmVySFRNTCk7XG4gICAgICB0YXNrLm9wZW5EYXlUYXNrc0V2ZW50KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmFtZVRvZGF5VGFza3MoKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19vcGVuVGFza0J0bicpKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX29wZW5UYXNrQnRuJykuY2xpY2soKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZURhdGEge1xuICBzYXZlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIHRhc2tDb25maXJtLCBkYXRlKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBpbXBvcnRhbmNlLFxuICAgICAgdGFza0NvbmZpcm0sXG4gICAgfTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG4gICAgICBpZiAob2JqW2RhdGVdKSB7XG4gICAgICAgIG9ialtkYXRlXS5wdXNoKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2RhdGVdID0gW2RhdGFdO1xuICAgICAgICBjb25zdCBzb3J0aW5nT2JqID0gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChvYmplY3QsIGtleSkgPT4ge1xuICAgICAgICAgIG9iamVjdFtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSwge30pO1xuICAgICAgICBvYmogPSBzb3J0aW5nT2JqO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkoeyBbZGF0ZV06IFtkYXRhXSB9KTtcbiAgICB9XG4gIH1cblxuICBzYXZlQWxsVGFza3MoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gJ3t9JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3NfX3Rhc2tDb250YWluZXInKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmxhc3RDaGlsZC5jaGlsZE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1ZhbHVlcyA9IFtdO1xuICAgICAgICB0YXNrVmFsdWVzLnB1c2goZWxlbWVudC5jaGlsZE5vZGVzWzFdLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrVmFsdWVzLnB1c2goZWxlbWVudC5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIHRhc2tWYWx1ZXMucHVzaChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgdGFza1ZhbHVlcy5wdXNoKGVsZW1lbnQuZGF0YXNldC5jb25maXJtKTtcbiAgICAgICAgaWYgKGl0ZW0uZmlyc3RDaGlsZC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPT0gJ1RvZGF5IFRhc2tzJykge1xuICAgICAgICAgIHRhc2tWYWx1ZXMucHVzaChpdGVtLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tWYWx1ZXMucHVzaChuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVUYXNrKC4uLnRhc2tWYWx1ZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbk1lbnUge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rpb25Cb3gsIHNlbGVjdGlvbkl0ZW0pIHtcbiAgICB0aGlzLnNlbGVjdGlvbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdGlvbkJveH1gKTtcbiAgICB0aGlzLnNlbGVjdGlvbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3Rpb25JdGVtfWApO1xuICB9XG5cbiAgc2VsZWN0aW9uTWVudUV2ZW50KCkge1xuICAgIHRoaXMuc2VsZWN0aW9uQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VsZWN0aW9uSXRlbSkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uSXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uSXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZWxlY3Rpb25Cb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6aG92ZXInKSkuaW5jbHVkZXModGhpcy5zZWxlY3Rpb25JdGVtKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aW9uSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLnRhcmdldCkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb25JdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrc0NvbnRhaW5lckhUTUwpIHtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTCA9IHRhc2tzQ29udGFpbmVySFRNTDtcbiAgICB0aGlzLnRhc2tzTGlzdCA9IFtdO1xuICAgIHRoaXMuYnRuT3BlblRhc2sgPSAnSFRNTCBlbGVtZW50JztcbiAgfVxuXG4gIHNlYXJjaEhUTUxFbGVtZW50cyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NMaXN0Lmxlbmd0aCAqIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy50YXNrc0xpc3RbMF0pLmhlaWdodClcbiAgICAgICsgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFza3NMaXN0WzBdKS5tYXJnaW5Ub3ApICogMik7XG4gIH1cblxuICBjaGFuZ2VUYXNrc0xpc3RTdHlsZShsaXN0SGVpZ2h0LCB0YXNrUG9zaXRpb24sIHRhc2tUcmFuc2l0aW9uLCB0YXNrT3BhY2l0eSkge1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MW3RoaXMudGFza3NDb250YWluZXJIVE1MLmxlbmd0aCAtIDFdLnN0eWxlLmhlaWdodCA9IGxpc3RIZWlnaHQ7XG5cbiAgICB0aGlzLnRhc2tzTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gdGFza1Bvc2l0aW9uO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gdGFza1RyYW5zaXRpb247XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0YXNrT3BhY2l0eTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5EYXlUYXNrc0V2ZW50KCkge1xuICAgIHRoaXMuYnRuT3BlblRhc2sgPSB0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5maW5kKChlbGVtZW50KSA9PiB0aGlzLnNlYXJjaEhUTUxFbGVtZW50cyhlbGVtZW50LCAndGFza3NfX29wZW5UYXNrQnRuJykpO1xuICAgIHRoaXMudGFza0hlYWRlciA9IHRoaXMudGFza3NDb250YWluZXJIVE1MLmZpbmQoKGVsZW1lbnQpID0+IHRoaXMuc2VhcmNoSFRNTEVsZW1lbnRzKGVsZW1lbnQsICd0YXNrc19faGVhZGVyQm94JykpO1xuICAgIHRoaXMudGFza3NMaXN0ID0gdGhpcy50YXNrc0NvbnRhaW5lckhUTUxbdGhpcy50YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uY2hpbGROb2RlcztcblxuICAgIHRoaXMudGFza0hlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuU2hvd0RheVRhc2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIFNob3dEYXlUYXNrKCkge1xuICAgIGlmICh0aGlzLmJ0bk9wZW5UYXNrLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrc19fb3BlblRhc2tCdG5JY29uLS1vcGVuZWQnKSkge1xuICAgICAgdGhpcy5jaGFuZ2VUYXNrc0xpc3RTdHlsZSgnMHB4JywgJ2Fic29sdXRlJywgJzBtcyAwbXMnLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VUYXNrc0xpc3RTdHlsZShgJHt0aGlzLmdldE9iamVjdEhlaWdodCgpfXB4YCwgJ3JlbGF0aXZlJywgJzMwMG1zIDMwMG1zJywgMSk7XG4gICAgfVxuICAgIHRoaXMuYnRuT3BlblRhc2suY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrc19fb3BlblRhc2tCdG5JY29uLS1vcGVuZWQnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3NFdmVudHMge1xuICBjb25zdHJ1Y3Rvcihjb25maXJtYXRpb25CdG4sIHRhc2tUaXRsZSkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uQnRuID0gY29uZmlybWF0aW9uQnRuO1xuICAgIHRoaXMudGFza1RpdGxlID0gdGFza1RpdGxlO1xuICB9XG5cbiAgc3dpdGNoQ29uZmlybWF0aW9uKCkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaE9uJyk7XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50cygpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc3dpdGNoQ29uZmlybWF0aW9uKCk7XG4gICAgICB0aGlzLnRhc2tUaXRsZS5jaGlsZE5vZGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tzX190YXNrLS1jb25maXJtJykpO1xuICAgICAgdGhpcy5jb25maXJtYXRpb25CdG4ucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbmZpcm0gPSB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29uZmlybSA9PT0gJ3VuY29uZmlybScgPyAnY29uZmlybScgOiAndW5jb25maXJtJztcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgU2VsZWN0aW9uTWVudSBmcm9tICcuL3NlbGVjdGlvbk1lbnUnO1xuaW1wb3J0IENyZWF0ZU5ld1Rhc2sgZnJvbSAnLi9jcmVhdGVOZXdUYXNrJztcbmltcG9ydCBTYXZlRGF0YSBmcm9tICcuL3NhdmVEYXRhJztcbmltcG9ydCBHZW5lcmF0aW9uVGFzayBmcm9tICcuL2dlbmVyYXRpb25UYXNrJztcblxuY29uc3Qgc2F2ZURhdGEgPSBuZXcgU2F2ZURhdGEoKTtcbmNvbnN0IGdlbmVyYXRpb25UYXNrID0gbmV3IEdlbmVyYXRpb25UYXNrKCk7XG5jb25zdCBjcmVhdGVOZXdUYXNrID0gbmV3IENyZWF0ZU5ld1Rhc2soKTtcblxuY29uc3Qgc2VsZWN0aW9uTWVudSA9IG5ldyBTZWxlY3Rpb25NZW51KFxuICAnY3JlYXRlTmV3VGFza19fY29sb3JzQm94JyxcbiAgJ2NyZWF0ZU5ld1Rhc2tfX2NvbG9ycycsXG4pO1xuXG5jcmVhdGVOZXdUYXNrLmdlbmVyYXRlRXZlbnRzKCk7XG5jcmVhdGVOZXdUYXNrLmNsZWFySW5wdXRzKCk7XG5zZWxlY3Rpb25NZW51LnNlbGVjdGlvbk1lbnVFdmVudCgpO1xuZ2VuZXJhdGlvblRhc2suYWRkVGFza3NUb0RPTSgpO1xuXG53aW5kb3cub251bmxvYWQgPSAoKSA9PiBzYXZlRGF0YS5zYXZlQWxsVGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==