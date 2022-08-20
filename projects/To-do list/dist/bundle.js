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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNHO0FBQ0E7QUFDRDtBQUNQO0FBQ1M7QUFDRTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/M2FjNCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbWJpbmF0aW9uTW9kdWxlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2dlbmVyYXRpb25IVE1MRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9sb2FkRGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL21vZHVsZUNyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVHZW5lcmF0aW9uVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL21vZHVsZVNlbGVjdGlvbk1lbnUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90YXNrc0V2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFNlbGVjdGlvbk1lbnUgZnJvbSAnLi9tb2R1bGVTZWxlY3Rpb25NZW51JztcbmltcG9ydCBDcmVhdGVOZXdUYXNrIGZyb20gJy4vbW9kdWxlQ3JlYXRlTmV3VGFzayc7XG5pbXBvcnQgTG9hZERhdGEgZnJvbSAnLi9sb2FkRGF0YSc7XG5cbmNvbnN0IE1vZHVsZUNyZWF0ZU5ld1Rhc2sgPSBuZXcgQ3JlYXRlTmV3VGFzaygpO1xuXG5jb25zdCBNb2R1bGVTZWxlY3Rpb25NZW51ID0gbmV3IFNlbGVjdGlvbk1lbnUoXG4gICdjcmVhdGVOZXdUYXNrX19jb2xvcnNCb3gnLFxuICAnY3JlYXRlTmV3VGFza19fY29sb3JzJyxcbik7XG5cbmNvbnN0IE1vZHVsZUxvYWREYXRhID0gbmV3IExvYWREYXRhKCk7XG5cbk1vZHVsZUNyZWF0ZU5ld1Rhc2suZ2VuZXJhdGVFdmVudHMoKTtcbk1vZHVsZUNyZWF0ZU5ld1Rhc2suY2xlYXJJbnB1dHMoKTtcbk1vZHVsZVNlbGVjdGlvbk1lbnUuZ2VuZXJhdGVFdmVudEZvclN3aXRjaE1lbnUoKTtcbk1vZHVsZUxvYWREYXRhLmNvbnZlcnREYXRhRnJvbVN0b3JhZ2UoKTtcblxud2luZG93Lm9udW5sb2FkID0gKCkgPT4gTW9kdWxlTG9hZERhdGEuc2F2ZURhdGEoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRpb25IVE1MRWxlbWVudHMge1xuICBnZW5lcmF0aW9uRWxlbSh0YWcsIGF0dHIpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIE9iamVjdC5rZXlzKGF0dHIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ3RleHRDb250ZW50Jykge1xuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gYXR0cltrZXldO1xuICAgICAgfSBlbHNlIGlmIChrZXkgIT09ICdwYXJlbnRDbGFzcycpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50LCBhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhcnI7XG4gICAgYXJyLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhwYXJlbnQpKSB7XG4gICAgICAgIHJlc3VsdFtpXS5hcHBlbmRDaGlsZChhcnJbYXJyLmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgR2VuZXJhdGlvblRhc2sgZnJvbSAnLi9tb2R1bGVHZW5lcmF0aW9uVGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWREYXRhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrQm94ID0gW1xuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgICAnZGF0YS1jb25maXJtJzogJ3VuY29uZmlybScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19pbXBvcnRhbmNlQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgICBzdHlsZTogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19kYXRhJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHA6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX190aXRsZScsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fZGF0YScsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcDoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhJyxcbiAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19jb25maXJtYXRpb25CdG4nLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMudGFza3NDb250YWluZXIgPSBbXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19faGVhZGVyQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2RhdGFCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2hlYWRlckJveCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19pbXBvcnRhbmNlQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHA6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19kYXRlJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bicsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19faGVhZGVyQm94JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltZzoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuSWNvbicsXG4gICAgICAgICAgc3JjOiAnLi9zcmMvYXNzZXRzL2ltYWdlcy9hcnJvdy5zdmcnLFxuICAgICAgICAgIGFsdDogJ2Fycm93JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19saXN0JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJlbW92ZU9sZGVyVGFza3MoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5IDwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSkgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRhYmxlKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLnJlcGxhY2VDaGlsZHJlbigpO1xuICB9XG5cbiAgcmVuYW1lVG9kYXlUYXNrcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3NfX2hlYWRlckJveCcpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50ID09PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSB7XG4gICAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAnVG9kYXkgVGFza3MnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29udmVydERhdGFGcm9tU3RvcmFnZSgpIHtcbiAgICB0aGlzLmNsZWFyVGFibGUoKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5yZW1vdmVPbGRlclRhc2tzKCk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlR2VuZXJhdGlvblRhc2sgPSBuZXcgR2VuZXJhdGlvblRhc2soKTtcbiAgICAgICAgdGhpcy50YXNrc0NvbnRhaW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucCkge1xuICAgICAgICAgICAgaXRlbS5wLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZUdlbmVyYXRpb25UYXNrLmdlbmVyYXRpb25UYXNrc0JveCh0aGlzLnRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgZGF0YVtrZXldLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tCb3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fdGl0bGUnKSB7XG4gICAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW0udGl0bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZGl2ICYmIGl0ZW0uZGl2LmNsYXNzID09PSAndGFza3NfX2ltcG9ydGFuY2VCb3gnKSB7XG4gICAgICAgICAgICAgIGl0ZW0uZGl2LnN0eWxlID0gYGJhY2tncm91bmQtY29sb3I6ICR7ZWxlbS5pbXBvcnRhbmNlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbW9kdWxlR2VuZXJhdGlvblRhc2suZ2VuZXJhdGlvblRhc2sodGhpcy50YXNrQm94LCAoZWxlbS50YXNrQ29uZmlybSA9PT0gJ2NvbmZpcm0nKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBtb2R1bGVHZW5lcmF0aW9uVGFzay5vcGVuRGF5VGFza3NFdmVudCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbmFtZVRvZGF5VGFza3MoKTtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX29wZW5UYXNrQnRuJykpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fb3BlblRhc2tCdG4nKS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1wb3J0YW5jZSwgdGFza0NvbmZpcm0sIGRhdGUpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGltcG9ydGFuY2UsXG4gICAgICB0YXNrQ29uZmlybSxcbiAgICB9O1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG4gICAgICBpZiAob2JqW2RhdGVdKSB7XG4gICAgICAgIG9ialtkYXRlXS5wdXNoKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2RhdGVdID0gW2RhdGFdO1xuICAgICAgICBjb25zdCBzb3J0aW5nT2JqID0gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkucmVkdWNlKChvYmplY3QsIGtleSkgPT4ge1xuICAgICAgICAgIG9iamVjdFtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSwge30pO1xuICAgICAgICBvYmogPSBzb3J0aW5nT2JqO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkoeyBbZGF0ZV06IFtkYXRhXSB9KTtcbiAgICB9XG4gIH1cblxuICBzYXZlRGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSAne30nO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrc19fdGFza0NvbnRhaW5lcicpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ubGFzdENoaWxkLmNoaWxkTm9kZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVmFsdWVzID0gW107XG4gICAgICAgIHRhc2tWYWx1ZXMucHVzaChlbGVtZW50LmNoaWxkTm9kZXNbMV0uZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIHRhc2tWYWx1ZXMucHVzaChlbGVtZW50LmNoaWxkTm9kZXNbMV0ubGFzdENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgdGFza1ZhbHVlcy5wdXNoKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5maXJzdENoaWxkKS5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICB0YXNrVmFsdWVzLnB1c2goZWxlbWVudC5kYXRhc2V0LmNvbmZpcm0pO1xuICAgICAgICBpZiAoaXRlbS5maXJzdENoaWxkLmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50ICE9PSAnVG9kYXkgVGFza3MnKSB7XG4gICAgICAgICAgdGFza1ZhbHVlcy5wdXNoKGl0ZW0uZmlyc3RDaGlsZC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFza1ZhbHVlcy5wdXNoKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2F2ZVRhc2soLi4udGFza1ZhbHVlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IExvYWREYXRhIGZyb20gJy4vbG9hZERhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVOZXdUYXNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2snKTtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jcmVhdGVOZXdUYXNrQnRuJyk7XG4gICAgdGhpcy5zdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fc3VibWl0QnRuJyk7XG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX190aXRsZScpO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fZGVzY3JpcHRpb24nKTtcbiAgICB0aGlzLmRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fZGF0ZScpO1xuICAgIHRoaXMuY29sb3JCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fY29sb3JzQm94Jyk7XG4gICAgdGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzID0gJ2NyZWF0ZU5ld1Rhc2stLW9wZW4nO1xuICAgIHRoaXMudGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fdGFzaycpO1xuICAgIHRoaXMuTG9hZERhdGEgPSBuZXcgTG9hZERhdGEoKTtcbiAgfVxuXG4gIG9wZW5Cb3goKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQnRuLnN0eWxlLmJvcmRlckJvdHRvbSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCA/ICcwLjR2dyBzb2xpZCAjMjgyODI4JyA6ICcwLjJ2dyBzb2xpZCAjMjgyODI4JztcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLm9wZW5UYXNrQ29udGFpbmVyQ2xhc3MpO1xuICB9XG5cbiAgY2xvc2VCb3goKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUodGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0bi5zdHlsZS5ib3JkZXIgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjggPyAnMC40dncgc29saWQgI0Y0RjRGNCcgOiAnMC4ydncgc29saWQgI0Y0RjRGNCc7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIGNsZWFySW5wdXRzKCkge1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJztcbiAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgdGhpcy5kYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICB0aGlzLmNvbG9yQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcbiAgfVxuXG4gIGdlbmVyYXRlRXZlbnRzKCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcykpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJveCh0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuQm94KHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRpdGxlLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuTG9hZERhdGEuc2F2ZVRhc2sodGhpcy50aXRsZS52YWx1ZSwgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSwgdGhpcy5jb2xvckJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IsICd1bmNvbmZpcm0nLCB0aGlzLmRhdGUudmFsdWUpO1xuICAgICAgICB0aGlzLkxvYWREYXRhLmNvbnZlcnREYXRhRnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xuICAgICAgICB0aGlzLmNsb3NlQm94KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrc0V2ZW50cyBmcm9tICcuL3Rhc2tzRXZlbnRzJztcbmltcG9ydCBHZW5lcmF0aW9uSFRNTEVsZW1lbnRzIGZyb20gJy4vZ2VuZXJhdGlvbkhUTUxFbGVtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRpb25UYXNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrQm94SFRNTCA9IDA7XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lckhUTUwgPSAwO1xuICAgIHRoaXMudGFza3NMaXN0ID0gW107XG4gICAgdGhpcy50YXNrc09wZW5CdG4gPSAwO1xuICAgIHRoaXMuR2VuZXJhdGlvbkhUTUwgPSBuZXcgR2VuZXJhdGlvbkhUTUxFbGVtZW50cygpO1xuICB9XG5cbiAgZ2VuZXJhdGlvblRhc2tzQm94KHRhc2tzQ29udGFpbmVyKSB7XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lckhUTUwgPSB0aGlzLm1lcmdlVG9ET00odGFza3NDb250YWluZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmFwcGVuZENoaWxkKHRoaXMudGFza3NDb250YWluZXJIVE1MWzBdKTtcbiAgfVxuXG4gIGdlbmVyYXRpb25UYXNrKHRhc2tCb3gsIGNvbmZpcm1hdGlvbikge1xuICAgIHRoaXMudGFza0JveEhUTUwgPSB0aGlzLm1lcmdlVG9ET00odGFza0JveCk7XG4gICAgdGhpcy5maW5kVGl0bGVBbmRCdG4odGhpcy50YXNrQm94SFRNTCwgY29uZmlybWF0aW9uKTtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTFt0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZCh0aGlzLnRhc2tCb3hIVE1MWzBdKTtcbiAgfVxuXG4gIG1lcmdlVG9ET00oYXJyKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5HZW5lcmF0aW9uSFRNTC5nZW5lcmF0aW9uRWxlbShrZXksIGl0ZW1ba2V5XSkpO1xuICAgICAgICBpZiAoaXRlbVtrZXldLnBhcmVudENsYXNzKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5HZW5lcmF0aW9uSFRNTC5hZGRDaGlsZChpdGVtW2tleV0ucGFyZW50Q2xhc3MsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZWFyY2hIVE1MRWxlbWVudHMoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzTGlzdC5sZW5ndGggKiAocGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFza3NMaXN0WzBdKS5oZWlnaHQpXG4gICAgICArIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhc2tzTGlzdFswXSkubWFyZ2luVG9wKSAqIDIpO1xuICB9XG5cbiAgY2hhbmdlVGFza3NMaXN0U3R5bGUobGlzdEhlaWdodCwgdGFza1Bvc2l0aW9uLCB0YXNrVHJhbnNpdGlvbiwgdGFza09wYWNpdHkpIHtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTFt0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5sZW5ndGggLSAxXS5zdHlsZS5oZWlnaHQgPSBsaXN0SGVpZ2h0O1xuICAgIHRoaXMudGFza3NMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSB0YXNrUG9zaXRpb247XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSB0YXNrVHJhbnNpdGlvbjtcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IHRhc2tPcGFjaXR5O1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRheVRhc2tzRXZlbnQoKSB7XG4gICAgdGhpcy50YXNrc09wZW5CdG4gPSB0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5maW5kKChlbGVtZW50KSA9PiB0aGlzLnNlYXJjaEhUTUxFbGVtZW50cyhlbGVtZW50LCAndGFza3NfX29wZW5UYXNrQnRuJykpO1xuICAgIHRoaXMudGFza0hlYWRlciA9IHRoaXMudGFza3NDb250YWluZXJIVE1MLmZpbmQoKGVsZW1lbnQpID0+IHRoaXMuc2VhcmNoSFRNTEVsZW1lbnRzKGVsZW1lbnQsICd0YXNrc19faGVhZGVyQm94JykpO1xuICAgIHRoaXMudGFza3NMaXN0ID0gdGhpcy50YXNrc0NvbnRhaW5lckhUTUxbdGhpcy50YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uY2hpbGROb2RlcztcbiAgICB0aGlzLnRhc2tIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5EYXlUYXNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRGF5VGFzaygpIHtcbiAgICBpZiAodGhpcy50YXNrc09wZW5CdG4uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX19vcGVuVGFza0J0bkljb24tLW9wZW5lZCcpKSB7XG4gICAgICB0aGlzLmNoYW5nZVRhc2tzTGlzdFN0eWxlKCcwcHgnLCAnYWJzb2x1dGUnLCAnMG1zIDBtcycsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVRhc2tzTGlzdFN0eWxlKGAke3RoaXMuZ2V0T2JqZWN0SGVpZ2h0KCl9cHhgLCAncmVsYXRpdmUnLCAnMzAwbXMgMzAwbXMnLCAxKTtcbiAgICB9XG4gICAgdGhpcy50YXNrc09wZW5CdG4uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrc19fb3BlblRhc2tCdG5JY29uLS1vcGVuZWQnKTtcbiAgfVxuXG4gIGZpbmRUaXRsZUFuZEJ0bihhcnIsIGNvbmZpcm1hdGlvbikge1xuICAgIGNvbnN0IHRpdGxlQW5kQnRuQXJyID0gW107XG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygndGFza3NfX3Rhc2snKSB8fCBpdGVtLmNsYXNzTGlzdC5jb250YWlucygndGFza3NfX2NvbmZpcm1hdGlvbkJ0bicpKSB7XG4gICAgICAgIHRpdGxlQW5kQnRuQXJyLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5ldmVudENvbmZpcm1hdGlvbih0aXRsZUFuZEJ0bkFyclsxXSwgdGl0bGVBbmRCdG5BcnJbMF0pO1xuICAgIGlmIChjb25maXJtYXRpb24pIHRpdGxlQW5kQnRuQXJyWzFdLmNsaWNrKCk7XG4gIH1cblxuICBldmVudENvbmZpcm1hdGlvbihjb25maXJtYXRpb25CdG4sIHRhc2tUaXRsZSkge1xuICAgIG5ldyBUYXNrc0V2ZW50cyhjb25maXJtYXRpb25CdG4sIHRhc2tUaXRsZSkuZ2VuZXJhdGVFdmVudHMoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uTWVudSB7XG4gIGNvbnN0cnVjdG9yKGNvbG9yc0JveCwgY29sb3JzKSB7XG4gICAgdGhpcy5jb2xvcnNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb2xvcnNCb3h9YCk7XG4gICAgdGhpcy5jb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb2xvcnN9YCk7XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50Rm9yU3dpdGNoTWVudSgpIHtcbiAgICB0aGlzLmNvbG9yc0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbG9ycykuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29sb3JzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnOmhvdmVyJykpLmluY2x1ZGVzKHRoaXMuY29sb3JzKSkge1xuICAgICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb2xvcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICAgICAgdGhpcy5jb2xvcnNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZS50YXJnZXQpLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tzRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0biA9IGNvbmZpcm1hdGlvbkJ0bjtcbiAgICB0aGlzLnRhc2tUaXRsZSA9IHRhc2tUaXRsZTtcbiAgfVxuXG4gIHN3aXRjaENvbmZpcm1hdGlvbigpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2hPbicpO1xuICB9XG5cbiAgZ2VuZXJhdGVFdmVudHMoKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaENvbmZpcm1hdGlvbigpO1xuICAgICAgdGhpcy50YXNrVGl0bGUuY2hpbGROb2Rlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrc19fdGFzay0tY29uZmlybScpKTtcbiAgICAgIHRoaXMuY29uZmlybWF0aW9uQnRuLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb25maXJtID0gdGhpcy5jb25maXJtYXRpb25CdG4ucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvbmZpcm0gPT09ICd1bmNvbmZpcm0nID8gJ2NvbmZpcm0nIDogJ3VuY29uZmlybSc7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZUNyZWF0ZU5ld1Rhc2snO1xuaW1wb3J0ICcuL21vZHVsZVNlbGVjdGlvbk1lbnUnO1xuaW1wb3J0ICcuL2NvbWJpbmF0aW9uTW9kdWxlcyc7XG5pbXBvcnQgJy4vdGFza3NFdmVudHMnO1xuaW1wb3J0ICcuL21vZHVsZUdlbmVyYXRpb25UYXNrJztcbmltcG9ydCAnLi9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzJztcbmltcG9ydCAnLi9sb2FkRGF0YSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=