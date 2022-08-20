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

/***/ "./src/js/combinationModules.js":
/*!**************************************!*\
  !*** ./src/js/combinationModules.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleSelectionMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleSelectionMenu */ "./src/js/moduleSelectionMenu.js");
/* harmony import */ var _moduleCreateNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleCreateNewTask */ "./src/js/moduleCreateNewTask.js");
/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadData */ "./src/js/loadData.js");




const ModuleCreateNewTask = new _moduleCreateNewTask__WEBPACK_IMPORTED_MODULE_1__["default"]();

const ModuleSelectionMenu = new _moduleSelectionMenu__WEBPACK_IMPORTED_MODULE_0__["default"](
  'createNewTask__colorsBox',
  'createNewTask__colors',
);

const ModuleLoadData = new _loadData__WEBPACK_IMPORTED_MODULE_2__["default"]();

ModuleCreateNewTask.generateEvents();
ModuleCreateNewTask.clearInputs();
ModuleSelectionMenu.generateEventForSwitchMenu();
ModuleLoadData.convertDataFromStorage();

window.onunload = () => ModuleLoadData.saveData();


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
  generationElem(tag, attr) {
    const elem = document.createElement(tag);
    Object.keys(attr).forEach((key) => {
      if (key === 'textContent') {
        elem.textContent = attr[key];
      } else if (key !== 'parentClass') {
        elem.setAttribute(key, attr[key]);
      }
    });
    return elem;
  }

  addChild(parent, arr) {
    const result = arr;
    arr.forEach((item, i) => {
      if (item.classList.contains(parent)) {
        result[i].appendChild(arr[arr.length - 1]);
      }
    });
    return result;
  }
}


/***/ }),

/***/ "./src/js/loadData.js":
/*!****************************!*\
  !*** ./src/js/loadData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadData)
/* harmony export */ });
/* harmony import */ var _moduleGenerationTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleGenerationTask */ "./src/js/moduleGenerationTask.js");


class LoadData {
  constructor() {
    this.taskBox = [
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
    this.tasksContainer = [
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
  }

  removeOlderTasks() {
    if (localStorage.tasks) {
      const data = JSON.parse(localStorage.tasks);
      Object.keys(data).forEach((key) => {
        if (key < new Date().toISOString().slice(0, 10)) delete data[key];
      });
      localStorage.tasks = JSON.stringify(data);
      return data;
    }
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

  convertDataFromStorage() {
    this.clearTable();
    if (localStorage.tasks) {
      const data = this.removeOlderTasks();
      Object.keys(data).forEach((key) => {
        const moduleGenerationTask = new _moduleGenerationTask__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.tasksContainer.forEach((item) => {
          if (item.p) {
            item.p.textContent = key;
          }
        });
        moduleGenerationTask.generationTasksBox(this.tasksContainer);
        data[key].forEach((elem) => {
          this.taskBox.forEach((item) => {
            if (item.p && item.p.class === 'tasks__title') {
              item.p.textContent = elem.title;
            } else if (item.p && item.p.class === 'tasks__description') {
              item.p.textContent = elem.description;
            } else if (item.div && item.div.class === 'tasks__importanceBox') {
              item.div.style = `background-color: ${elem.importance}`;
            }
          });
          moduleGenerationTask.generationTask(this.taskBox, (elem.taskConfirm === 'confirm'));
        });
        moduleGenerationTask.openDayTasksEvent();
      });
      this.renameTodayTasks();
      if (document.querySelector('.tasks__openTaskBtn')) document.querySelector('.tasks__openTaskBtn').click();
    }
  }

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

  saveData() {
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

/***/ "./src/js/moduleCreateNewTask.js":
/*!***************************************!*\
  !*** ./src/js/moduleCreateNewTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateNewTask)
/* harmony export */ });
/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadData */ "./src/js/loadData.js");


class CreateNewTask {
  constructor() {
    this.createNewTaskContainer = document.querySelector('.createNewTask');
    this.createNewTaskBtn = document.querySelector('.header__createNewTaskBtn');
    this.submitBtn = document.querySelector('.createNewTask__submitBtn');
    this.title = document.querySelector('.createNewTask__title');
    this.description = document.querySelector('.createNewTask__description');
    this.date = document.querySelector('.createNewTask__date');
    this.colorBox = document.querySelector('.createNewTask__colorsBox');
    this.openTaskContainerClass = 'createNewTask--open';
    this.task = document.querySelector('.tasks__task');
    this.LoadData = new _loadData__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  openBox() {
    this.createNewTaskBtn.style.borderBottom = window.innerWidth <= 768 ? '0.4vw solid #282828' : '0.2vw solid #282828';
    this.createNewTaskContainer.classList.toggle(this.openTaskContainerClass);
  }

  closeBox() {
    this.createNewTaskContainer.classList.toggle(this.openTaskContainerClass);
    setTimeout(() => {
      this.createNewTaskBtn.style.border = window.innerWidth <= 768 ? '0.4vw solid #F4F4F4' : '0.2vw solid #F4F4F4';
    }, 300);
  }

  clearInputs() {
    this.title.value = '';
    this.description.value = '';
    this.date.value = new Date().toISOString().slice(0, 10);
    this.colorBox.style.backgroundColor = '#ffffff';
  }

  generateEvents() {
    this.createNewTaskBtn.addEventListener('click', () => {
      if (this.createNewTaskContainer.classList.contains(this.openTaskContainerClass)) {
        this.closeBox(this.createNewTaskContainer);
      } else {
        this.openBox(this.createNewTaskContainer);
      }
    });

    this.submitBtn.addEventListener('click', () => {
      if (this.title.value) {
        this.LoadData.saveTask(this.title.value, this.description.value, this.colorBox.style.backgroundColor, 'unconfirm', this.date.value);
        this.LoadData.convertDataFromStorage();
        this.clearInputs();
        this.closeBox();
      }
    });
  }
}


/***/ }),

/***/ "./src/js/moduleGenerationTask.js":
/*!****************************************!*\
  !*** ./src/js/moduleGenerationTask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenerationTask)
/* harmony export */ });
/* harmony import */ var _tasksEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksEvents */ "./src/js/tasksEvents.js");
/* harmony import */ var _generationHTMLElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generationHTMLElements */ "./src/js/generationHTMLElements.js");



class GenerationTask {
  constructor() {
    this.taskBoxHTML = 0;
    this.tasksContainerHTML = 0;
    this.tasksList = [];
    this.tasksOpenBtn = 0;
    this.GenerationHTML = new _generationHTMLElements__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  generationTasksBox(tasksContainer) {
    this.tasksContainerHTML = this.mergeToDOM(tasksContainer);
    document.querySelector('.tasks').appendChild(this.tasksContainerHTML[0]);
  }

  generationTask(taskBox, confirmation) {
    this.taskBoxHTML = this.mergeToDOM(taskBox);
    this.findTitleAndBtn(this.taskBoxHTML, confirmation);
    this.tasksContainerHTML[this.tasksContainerHTML.length - 1].appendChild(this.taskBoxHTML[0]);
  }

  mergeToDOM(arr) {
    let result = [];
    arr.forEach((item) => {
      Object.keys(item).forEach((key) => {
        result.push(this.GenerationHTML.generationElem(key, item[key]));
        if (item[key].parentClass) {
          result = this.GenerationHTML.addChild(item[key].parentClass, result);
        }
      });
    });
    return result;
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
    this.tasksOpenBtn = this.tasksContainerHTML.find((element) => this.searchHTMLElements(element, 'tasks__openTaskBtn'));
    this.taskHeader = this.tasksContainerHTML.find((element) => this.searchHTMLElements(element, 'tasks__headerBox'));
    this.tasksList = this.tasksContainerHTML[this.tasksContainerHTML.length - 1].childNodes;
    this.taskHeader.addEventListener('click', () => {
      this.openDayTask();
    });
  }

  openDayTask() {
    if (this.tasksOpenBtn.childNodes[0].classList.contains('tasks__openTaskBtnIcon--opened')) {
      this.changeTasksListStyle('0px', 'absolute', '0ms 0ms', 0);
    } else {
      this.changeTasksListStyle(`${this.getObjectHeight()}px`, 'relative', '300ms 300ms', 1);
    }
    this.tasksOpenBtn.childNodes[0].classList.toggle('tasks__openTaskBtnIcon--opened');
  }

  findTitleAndBtn(arr, confirmation) {
    const titleAndBtnArr = [];
    arr.forEach((item) => {
      if (item.classList.contains('tasks__task') || item.classList.contains('tasks__confirmationBtn')) {
        titleAndBtnArr.push(item);
      }
    });
    this.eventConfirmation(titleAndBtnArr[1], titleAndBtnArr[0]);
    if (confirmation) titleAndBtnArr[1].click();
  }

  eventConfirmation(confirmationBtn, taskTitle) {
    new _tasksEvents__WEBPACK_IMPORTED_MODULE_0__["default"](confirmationBtn, taskTitle).generateEvents();
  }
}


/***/ }),

/***/ "./src/js/moduleSelectionMenu.js":
/*!***************************************!*\
  !*** ./src/js/moduleSelectionMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionMenu)
/* harmony export */ });
class SelectionMenu {
  constructor(colorsBox, colors) {
    this.colorsBox = document.querySelector(`.${colorsBox}`);
    this.colors = document.querySelector(`.${colors}`);
  }

  generateEventForSwitchMenu() {
    this.colorsBox.addEventListener('click', () => {
      if (window.getComputedStyle(this.colors).display === 'none') {
        this.colors.style.display = 'block';
      } else {
        this.colors.style.display = 'none';
      }
    });

    this.colorsBox.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.colors)) {
        this.colors.style.display = 'none';
      }
    });

    this.colors.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.colorsBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
      }
      this.colors.style.display = 'none';
    });
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
/* harmony import */ var _moduleCreateNewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleCreateNewTask */ "./src/js/moduleCreateNewTask.js");
/* harmony import */ var _moduleSelectionMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleSelectionMenu */ "./src/js/moduleSelectionMenu.js");
/* harmony import */ var _combinationModules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combinationModules */ "./src/js/combinationModules.js");
/* harmony import */ var _tasksEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasksEvents */ "./src/js/tasksEvents.js");
/* harmony import */ var _moduleGenerationTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduleGenerationTask */ "./src/js/moduleGenerationTask.js");
/* harmony import */ var _generationHTMLElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generationHTMLElements */ "./src/js/generationHTMLElements.js");
/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadData */ "./src/js/loadData.js");









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNHO0FBQ0E7QUFDRDtBQUNQO0FBQ1M7QUFDRTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jb21iaW5hdGlvbk1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbG9hZERhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVDcmVhdGVOZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbW9kdWxlR2VuZXJhdGlvblRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVTZWxlY3Rpb25NZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdGFza3NFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBTZWxlY3Rpb25NZW51IGZyb20gJy4vbW9kdWxlU2VsZWN0aW9uTWVudSc7XG5pbXBvcnQgQ3JlYXRlTmV3VGFzayBmcm9tICcuL21vZHVsZUNyZWF0ZU5ld1Rhc2snO1xuaW1wb3J0IExvYWREYXRhIGZyb20gJy4vbG9hZERhdGEnO1xuXG5jb25zdCBNb2R1bGVDcmVhdGVOZXdUYXNrID0gbmV3IENyZWF0ZU5ld1Rhc2soKTtcblxuY29uc3QgTW9kdWxlU2VsZWN0aW9uTWVudSA9IG5ldyBTZWxlY3Rpb25NZW51KFxuICAnY3JlYXRlTmV3VGFza19fY29sb3JzQm94JyxcbiAgJ2NyZWF0ZU5ld1Rhc2tfX2NvbG9ycycsXG4pO1xuXG5jb25zdCBNb2R1bGVMb2FkRGF0YSA9IG5ldyBMb2FkRGF0YSgpO1xuXG5Nb2R1bGVDcmVhdGVOZXdUYXNrLmdlbmVyYXRlRXZlbnRzKCk7XG5Nb2R1bGVDcmVhdGVOZXdUYXNrLmNsZWFySW5wdXRzKCk7XG5Nb2R1bGVTZWxlY3Rpb25NZW51LmdlbmVyYXRlRXZlbnRGb3JTd2l0Y2hNZW51KCk7XG5Nb2R1bGVMb2FkRGF0YS5jb252ZXJ0RGF0YUZyb21TdG9yYWdlKCk7XG5cbndpbmRvdy5vbnVubG9hZCA9ICgpID0+IE1vZHVsZUxvYWREYXRhLnNhdmVEYXRhKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0aW9uSFRNTEVsZW1lbnRzIHtcbiAgZ2VuZXJhdGlvbkVsZW0odGFnLCBhdHRyKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGF0dHJba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAncGFyZW50Q2xhc3MnKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleSwgYXR0cltrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIGFkZENoaWxkKHBhcmVudCwgYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXJyO1xuICAgIGFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMocGFyZW50KSkge1xuICAgICAgICByZXN1bHRbaV0uYXBwZW5kQ2hpbGQoYXJyW2Fyci5sZW5ndGggLSAxXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IEdlbmVyYXRpb25UYXNrIGZyb20gJy4vbW9kdWxlR2VuZXJhdGlvblRhc2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRGF0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0JveCA9IFtcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICAgICAgJ2RhdGEtY29uZmlybSc6ICd1bmNvbmZpcm0nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19faW1wb3J0YW5jZUJveCcsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICAgICAgc3R5bGU6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fZGF0YScsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fdGl0bGUnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGEnLFxuICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHA6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19kZXNjcmlwdGlvbicsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fZGF0YScsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fY29uZmlybWF0aW9uQnRuJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVyID0gW1xuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2hlYWRlckJveCcsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFza0NvbnRhaW5lcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19oZWFkZXJCb3gnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19faW1wb3J0YW5jZUJveCcsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fZGF0YUJveCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fZGF0ZScsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fZGF0YUJveCcsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fb3BlblRhc2tCdG4nLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2hlYWRlckJveCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWc6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bkljb24nLFxuICAgICAgICAgIHNyYzogJy4vc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3cuc3ZnJyxcbiAgICAgICAgICBhbHQ6ICdhcnJvdycsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fb3BlblRhc2tCdG4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fbGlzdCcsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFza0NvbnRhaW5lcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZW1vdmVPbGRlclRhc2tzKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUYWJsZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgfVxuXG4gIHJlbmFtZVRvZGF5VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzX19oZWFkZXJCb3gnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9PT0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSkge1xuICAgICAgICBlbGVtZW50LmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50ID0gJ1RvZGF5IFRhc2tzJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgdGhpcy5jbGVhclRhYmxlKCk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVtb3ZlT2xkZXJUYXNrcygpO1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUdlbmVyYXRpb25UYXNrID0gbmV3IEdlbmVyYXRpb25UYXNrKCk7XG4gICAgICAgIHRoaXMudGFza3NDb250YWluZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnApIHtcbiAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGtleTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb2R1bGVHZW5lcmF0aW9uVGFzay5nZW5lcmF0aW9uVGFza3NCb3godGhpcy50YXNrc0NvbnRhaW5lcik7XG4gICAgICAgIGRhdGFba2V5XS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy50YXNrQm94LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnAgJiYgaXRlbS5wLmNsYXNzID09PSAndGFza3NfX3RpdGxlJykge1xuICAgICAgICAgICAgICBpdGVtLnAudGV4dENvbnRlbnQgPSBlbGVtLnRpdGxlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnAgJiYgaXRlbS5wLmNsYXNzID09PSAndGFza3NfX2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICBpdGVtLnAudGV4dENvbnRlbnQgPSBlbGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmRpdiAmJiBpdGVtLmRpdi5jbGFzcyA9PT0gJ3Rhc2tzX19pbXBvcnRhbmNlQm94Jykge1xuICAgICAgICAgICAgICBpdGVtLmRpdi5zdHlsZSA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2VsZW0uaW1wb3J0YW5jZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1vZHVsZUdlbmVyYXRpb25UYXNrLmdlbmVyYXRpb25UYXNrKHRoaXMudGFza0JveCwgKGVsZW0udGFza0NvbmZpcm0gPT09ICdjb25maXJtJykpO1xuICAgICAgICB9KTtcbiAgICAgICAgbW9kdWxlR2VuZXJhdGlvblRhc2sub3BlbkRheVRhc2tzRXZlbnQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5hbWVUb2RheVRhc2tzKCk7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19vcGVuVGFza0J0bicpKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX29wZW5UYXNrQnRuJykuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBzYXZlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGltcG9ydGFuY2UsIHRhc2tDb25maXJtLCBkYXRlKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBpbXBvcnRhbmNlLFxuICAgICAgdGFza0NvbmZpcm0sXG4gICAgfTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XG4gICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpO1xuICAgICAgaWYgKG9ialtkYXRlXSkge1xuICAgICAgICBvYmpbZGF0ZV0ucHVzaChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtkYXRlXSA9IFtkYXRhXTtcbiAgICAgICAgY29uc3Qgc29ydGluZ09iaiA9IE9iamVjdC5rZXlzKG9iaikuc29ydCgpLnJlZHVjZSgob2JqZWN0LCBrZXkpID0+IHtcbiAgICAgICAgICBvYmplY3Rba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgb2JqID0gc29ydGluZ09iajtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHsgW2RhdGVdOiBbZGF0YV0gfSk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZURhdGEoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gJ3t9JztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3NfX3Rhc2tDb250YWluZXInKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmxhc3RDaGlsZC5jaGlsZE5vZGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1ZhbHVlcyA9IFtdO1xuICAgICAgICB0YXNrVmFsdWVzLnB1c2goZWxlbWVudC5jaGlsZE5vZGVzWzFdLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrVmFsdWVzLnB1c2goZWxlbWVudC5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIHRhc2tWYWx1ZXMucHVzaChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgdGFza1ZhbHVlcy5wdXNoKGVsZW1lbnQuZGF0YXNldC5jb25maXJtKTtcbiAgICAgICAgaWYgKGl0ZW0uZmlyc3RDaGlsZC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCAhPT0gJ1RvZGF5IFRhc2tzJykge1xuICAgICAgICAgIHRhc2tWYWx1ZXMucHVzaChpdGVtLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tWYWx1ZXMucHVzaChuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVUYXNrKC4uLnRhc2tWYWx1ZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBMb2FkRGF0YSBmcm9tICcuL2xvYWREYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlTmV3VGFzayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrJyk7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY3JlYXRlTmV3VGFza0J0bicpO1xuICAgIHRoaXMuc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3N1Ym1pdEJ0bicpO1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fdGl0bGUnKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX2Rlc2NyaXB0aW9uJyk7XG4gICAgdGhpcy5kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX2RhdGUnKTtcbiAgICB0aGlzLmNvbG9yQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX2NvbG9yc0JveCcpO1xuICAgIHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcyA9ICdjcmVhdGVOZXdUYXNrLS1vcGVuJztcbiAgICB0aGlzLnRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX3Rhc2snKTtcbiAgICB0aGlzLkxvYWREYXRhID0gbmV3IExvYWREYXRhKCk7XG4gIH1cblxuICBvcGVuQm94KCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0bi5zdHlsZS5ib3JkZXJCb3R0b20gPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjggPyAnMC40dncgc29saWQgIzI4MjgyOCcgOiAnMC4ydncgc29saWQgIzI4MjgyOCc7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUodGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKTtcbiAgfVxuXG4gIGNsb3NlQm94KCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uc3R5bGUuYm9yZGVyID0gd2luZG93LmlubmVyV2lkdGggPD0gNzY4ID8gJzAuNHZ3IHNvbGlkICNGNEY0RjQnIDogJzAuMnZ3IHNvbGlkICNGNEY0RjQnO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5jb2xvckJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50cygpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wZW5UYXNrQ29udGFpbmVyQ2xhc3MpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VCb3godGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbkJveCh0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aXRsZS52YWx1ZSkge1xuICAgICAgICB0aGlzLkxvYWREYXRhLnNhdmVUYXNrKHRoaXMudGl0bGUudmFsdWUsIHRoaXMuZGVzY3JpcHRpb24udmFsdWUsIHRoaXMuY29sb3JCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yLCAndW5jb25maXJtJywgdGhpcy5kYXRlLnZhbHVlKTtcbiAgICAgICAgdGhpcy5Mb2FkRGF0YS5jb252ZXJ0RGF0YUZyb21TdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dHMoKTtcbiAgICAgICAgdGhpcy5jbG9zZUJveCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgVGFza3NFdmVudHMgZnJvbSAnLi90YXNrc0V2ZW50cyc7XG5pbXBvcnQgR2VuZXJhdGlvbkhUTUxFbGVtZW50cyBmcm9tICcuL2dlbmVyYXRpb25IVE1MRWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0aW9uVGFzayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0JveEhUTUwgPSAwO1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MID0gMDtcbiAgICB0aGlzLnRhc2tzTGlzdCA9IFtdO1xuICAgIHRoaXMudGFza3NPcGVuQnRuID0gMDtcbiAgICB0aGlzLkdlbmVyYXRpb25IVE1MID0gbmV3IEdlbmVyYXRpb25IVE1MRWxlbWVudHMoKTtcbiAgfVxuXG4gIGdlbmVyYXRpb25UYXNrc0JveCh0YXNrc0NvbnRhaW5lcikge1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MID0gdGhpcy5tZXJnZVRvRE9NKHRhc2tzQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZCh0aGlzLnRhc2tzQ29udGFpbmVySFRNTFswXSk7XG4gIH1cblxuICBnZW5lcmF0aW9uVGFzayh0YXNrQm94LCBjb25maXJtYXRpb24pIHtcbiAgICB0aGlzLnRhc2tCb3hIVE1MID0gdGhpcy5tZXJnZVRvRE9NKHRhc2tCb3gpO1xuICAgIHRoaXMuZmluZFRpdGxlQW5kQnRuKHRoaXMudGFza0JveEhUTUwsIGNvbmZpcm1hdGlvbik7XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lckhUTUxbdGhpcy50YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQodGhpcy50YXNrQm94SFRNTFswXSk7XG4gIH1cblxuICBtZXJnZVRvRE9NKGFycikge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuR2VuZXJhdGlvbkhUTUwuZ2VuZXJhdGlvbkVsZW0oa2V5LCBpdGVtW2tleV0pKTtcbiAgICAgICAgaWYgKGl0ZW1ba2V5XS5wYXJlbnRDbGFzcykge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuR2VuZXJhdGlvbkhUTUwuYWRkQ2hpbGQoaXRlbVtrZXldLnBhcmVudENsYXNzLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VhcmNoSFRNTEVsZW1lbnRzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGdldE9iamVjdEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc0xpc3QubGVuZ3RoICogKHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhc2tzTGlzdFswXSkuaGVpZ2h0KVxuICAgICAgKyBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy50YXNrc0xpc3RbMF0pLm1hcmdpblRvcCkgKiAyKTtcbiAgfVxuXG4gIGNoYW5nZVRhc2tzTGlzdFN0eWxlKGxpc3RIZWlnaHQsIHRhc2tQb3NpdGlvbiwgdGFza1RyYW5zaXRpb24sIHRhc2tPcGFjaXR5KSB7XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lckhUTUxbdGhpcy50YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uc3R5bGUuaGVpZ2h0ID0gbGlzdEhlaWdodDtcbiAgICB0aGlzLnRhc2tzTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gdGFza1Bvc2l0aW9uO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gdGFza1RyYW5zaXRpb247XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0YXNrT3BhY2l0eTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5EYXlUYXNrc0V2ZW50KCkge1xuICAgIHRoaXMudGFza3NPcGVuQnRuID0gdGhpcy50YXNrc0NvbnRhaW5lckhUTUwuZmluZCgoZWxlbWVudCkgPT4gdGhpcy5zZWFyY2hIVE1MRWxlbWVudHMoZWxlbWVudCwgJ3Rhc2tzX19vcGVuVGFza0J0bicpKTtcbiAgICB0aGlzLnRhc2tIZWFkZXIgPSB0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5maW5kKChlbGVtZW50KSA9PiB0aGlzLnNlYXJjaEhUTUxFbGVtZW50cyhlbGVtZW50LCAndGFza3NfX2hlYWRlckJveCcpKTtcbiAgICB0aGlzLnRhc2tzTGlzdCA9IHRoaXMudGFza3NDb250YWluZXJIVE1MW3RoaXMudGFza3NDb250YWluZXJIVE1MLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXM7XG4gICAgdGhpcy50YXNrSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuRGF5VGFzaygpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRheVRhc2soKSB7XG4gICAgaWYgKHRoaXMudGFza3NPcGVuQnRuLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrc19fb3BlblRhc2tCdG5JY29uLS1vcGVuZWQnKSkge1xuICAgICAgdGhpcy5jaGFuZ2VUYXNrc0xpc3RTdHlsZSgnMHB4JywgJ2Fic29sdXRlJywgJzBtcyAwbXMnLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VUYXNrc0xpc3RTdHlsZShgJHt0aGlzLmdldE9iamVjdEhlaWdodCgpfXB4YCwgJ3JlbGF0aXZlJywgJzMwMG1zIDMwMG1zJywgMSk7XG4gICAgfVxuICAgIHRoaXMudGFza3NPcGVuQnRuLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndGFza3NfX29wZW5UYXNrQnRuSWNvbi0tb3BlbmVkJyk7XG4gIH1cblxuICBmaW5kVGl0bGVBbmRCdG4oYXJyLCBjb25maXJtYXRpb24pIHtcbiAgICBjb25zdCB0aXRsZUFuZEJ0bkFyciA9IFtdO1xuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX190YXNrJykgfHwgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX19jb25maXJtYXRpb25CdG4nKSkge1xuICAgICAgICB0aXRsZUFuZEJ0bkFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZXZlbnRDb25maXJtYXRpb24odGl0bGVBbmRCdG5BcnJbMV0sIHRpdGxlQW5kQnRuQXJyWzBdKTtcbiAgICBpZiAoY29uZmlybWF0aW9uKSB0aXRsZUFuZEJ0bkFyclsxXS5jbGljaygpO1xuICB9XG5cbiAgZXZlbnRDb25maXJtYXRpb24oY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpIHtcbiAgICBuZXcgVGFza3NFdmVudHMoY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpLmdlbmVyYXRlRXZlbnRzKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbk1lbnUge1xuICBjb25zdHJ1Y3Rvcihjb2xvcnNCb3gsIGNvbG9ycykge1xuICAgIHRoaXMuY29sb3JzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29sb3JzQm94fWApO1xuICAgIHRoaXMuY29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29sb3JzfWApO1xuICB9XG5cbiAgZ2VuZXJhdGVFdmVudEZvclN3aXRjaE1lbnUoKSB7XG4gICAgdGhpcy5jb2xvcnNCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb2xvcnMpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbG9yc0JveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJzpob3ZlcicpKS5pbmNsdWRlcyh0aGlzLmNvbG9ycykpIHtcbiAgICAgICAgdGhpcy5jb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29sb3JzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIHRoaXMuY29sb3JzQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUudGFyZ2V0KS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrc0V2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpcm1hdGlvbkJ0biwgdGFza1RpdGxlKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25CdG4gPSBjb25maXJtYXRpb25CdG47XG4gICAgdGhpcy50YXNrVGl0bGUgPSB0YXNrVGl0bGU7XG4gIH1cblxuICBzd2l0Y2hDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25CdG4uY2xhc3NMaXN0LnRvZ2dsZSgnc3dpdGNoT24nKTtcbiAgfVxuXG4gIGdlbmVyYXRlRXZlbnRzKCkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zd2l0Y2hDb25maXJtYXRpb24oKTtcbiAgICAgIHRoaXMudGFza1RpdGxlLmNoaWxkTm9kZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgndGFza3NfX3Rhc2stLWNvbmZpcm0nKSk7XG4gICAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29uZmlybSA9IHRoaXMuY29uZmlybWF0aW9uQnRuLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb25maXJtID09PSAndW5jb25maXJtJyA/ICdjb25maXJtJyA6ICd1bmNvbmZpcm0nO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9tb2R1bGVDcmVhdGVOZXdUYXNrJztcbmltcG9ydCAnLi9tb2R1bGVTZWxlY3Rpb25NZW51JztcbmltcG9ydCAnLi9jb21iaW5hdGlvbk1vZHVsZXMnO1xuaW1wb3J0ICcuL3Rhc2tzRXZlbnRzJztcbmltcG9ydCAnLi9tb2R1bGVHZW5lcmF0aW9uVGFzayc7XG5pbXBvcnQgJy4vZ2VuZXJhdGlvbkhUTUxFbGVtZW50cyc7XG5pbXBvcnQgJy4vbG9hZERhdGEnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9