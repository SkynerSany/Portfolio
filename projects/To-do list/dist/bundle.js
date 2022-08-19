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
    this.createNewTaskBtn.style.borderBottom = '0.2vw solid #282828';
    this.createNewTaskContainer.classList.toggle(this.openTaskContainerClass);
  }

  closeBox() {
    this.createNewTaskContainer.classList.toggle(this.openTaskContainerClass);
    setTimeout(() => {
      this.createNewTaskBtn.style.border = '0.2vw solid #F4F4F4';
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
    this.tasksList = this.tasksContainerHTML[this.tasksContainerHTML.length - 1].childNodes;
    this.tasksOpenBtn.addEventListener('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDRztBQUNBO0FBQ0Q7QUFDUDtBQUNTO0FBQ0U7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvY29tYmluYXRpb25Nb2R1bGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZ2VuZXJhdGlvbkhUTUxFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2xvYWREYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbW9kdWxlQ3JlYXRlTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL21vZHVsZUdlbmVyYXRpb25UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbW9kdWxlU2VsZWN0aW9uTWVudS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3Rhc2tzRXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgU2VsZWN0aW9uTWVudSBmcm9tICcuL21vZHVsZVNlbGVjdGlvbk1lbnUnO1xuaW1wb3J0IENyZWF0ZU5ld1Rhc2sgZnJvbSAnLi9tb2R1bGVDcmVhdGVOZXdUYXNrJztcbmltcG9ydCBMb2FkRGF0YSBmcm9tICcuL2xvYWREYXRhJztcblxuY29uc3QgTW9kdWxlQ3JlYXRlTmV3VGFzayA9IG5ldyBDcmVhdGVOZXdUYXNrKCk7XG5cbmNvbnN0IE1vZHVsZVNlbGVjdGlvbk1lbnUgPSBuZXcgU2VsZWN0aW9uTWVudShcbiAgJ2NyZWF0ZU5ld1Rhc2tfX2NvbG9yc0JveCcsXG4gICdjcmVhdGVOZXdUYXNrX19jb2xvcnMnLFxuKTtcblxuY29uc3QgTW9kdWxlTG9hZERhdGEgPSBuZXcgTG9hZERhdGEoKTtcblxuTW9kdWxlQ3JlYXRlTmV3VGFzay5nZW5lcmF0ZUV2ZW50cygpO1xuTW9kdWxlQ3JlYXRlTmV3VGFzay5jbGVhcklucHV0cygpO1xuTW9kdWxlU2VsZWN0aW9uTWVudS5nZW5lcmF0ZUV2ZW50Rm9yU3dpdGNoTWVudSgpO1xuTW9kdWxlTG9hZERhdGEuY29udmVydERhdGFGcm9tU3RvcmFnZSgpO1xuXG53aW5kb3cub251bmxvYWQgPSAoKSA9PiBNb2R1bGVMb2FkRGF0YS5zYXZlRGF0YSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJhdGlvbkhUTUxFbGVtZW50cyB7XG4gIGdlbmVyYXRpb25FbGVtKHRhZywgYXR0cikge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgT2JqZWN0LmtleXMoYXR0cikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAndGV4dENvbnRlbnQnKSB7XG4gICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBhdHRyW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGtleSAhPT0gJ3BhcmVudENsYXNzJykge1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShrZXksIGF0dHJba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBhZGRDaGlsZChwYXJlbnQsIGFycikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGFycjtcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHBhcmVudCkpIHtcbiAgICAgICAgcmVzdWx0W2ldLmFwcGVuZENoaWxkKGFyclthcnIubGVuZ3RoIC0gMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCBHZW5lcmF0aW9uVGFzayBmcm9tICcuL21vZHVsZUdlbmVyYXRpb25UYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZERhdGEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tCb3ggPSBbXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICAgICdkYXRhLWNvbmZpcm0nOiAndW5jb25maXJtJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2ltcG9ydGFuY2VCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICAgIHN0eWxlOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2RhdGEnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcDoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX3RpdGxlJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhJyxcbiAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fZGVzY3JpcHRpb24nLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGEnLFxuICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2NvbmZpcm1hdGlvbkJ0bicsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lciA9IFtcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fdGFza0NvbnRhaW5lcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19oZWFkZXJCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fZGF0YUJveCcsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19faGVhZGVyQm94JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2ltcG9ydGFuY2VCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGFCb3gnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcDoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2RhdGUnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGFCb3gnLFxuICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19oZWFkZXJCb3gnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fb3BlblRhc2tCdG5JY29uJyxcbiAgICAgICAgICBzcmM6ICcuL3NyYy9hc3NldHMvaW1hZ2VzL2Fycm93LnN2ZycsXG4gICAgICAgICAgYWx0OiAnYXJyb3cnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2xpc3QnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmVtb3ZlT2xkZXJUYXNrcygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzKSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpO1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGFibGUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH1cblxuICByZW5hbWVUb2RheVRhc2tzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrc19faGVhZGVyQm94JykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPT09IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpIHtcbiAgICAgICAgZWxlbWVudC5maXJzdENoaWxkLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICdUb2RheSBUYXNrcyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb252ZXJ0RGF0YUZyb21TdG9yYWdlKCkge1xuICAgIHRoaXMuY2xlYXJUYWJsZSgpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlbW92ZU9sZGVyVGFza3MoKTtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBtb2R1bGVHZW5lcmF0aW9uVGFzayA9IG5ldyBHZW5lcmF0aW9uVGFzaygpO1xuICAgICAgICB0aGlzLnRhc2tzQ29udGFpbmVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5wKSB7XG4gICAgICAgICAgICBpdGVtLnAudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbW9kdWxlR2VuZXJhdGlvblRhc2suZ2VuZXJhdGlvblRhc2tzQm94KHRoaXMudGFza3NDb250YWluZXIpO1xuICAgICAgICBkYXRhW2tleV0uZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMudGFza0JveC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wICYmIGl0ZW0ucC5jbGFzcyA9PT0gJ3Rhc2tzX190aXRsZScpIHtcbiAgICAgICAgICAgICAgaXRlbS5wLnRleHRDb250ZW50ID0gZWxlbS50aXRsZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5wICYmIGl0ZW0ucC5jbGFzcyA9PT0gJ3Rhc2tzX19kZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgaXRlbS5wLnRleHRDb250ZW50ID0gZWxlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5kaXYgJiYgaXRlbS5kaXYuY2xhc3MgPT09ICd0YXNrc19faW1wb3J0YW5jZUJveCcpIHtcbiAgICAgICAgICAgICAgaXRlbS5kaXYuc3R5bGUgPSBgYmFja2dyb3VuZC1jb2xvcjogJHtlbGVtLmltcG9ydGFuY2V9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtb2R1bGVHZW5lcmF0aW9uVGFzay5nZW5lcmF0aW9uVGFzayh0aGlzLnRhc2tCb3gsIChlbGVtLnRhc2tDb25maXJtID09PSAnY29uZmlybScpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZUdlbmVyYXRpb25UYXNrLm9wZW5EYXlUYXNrc0V2ZW50KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuYW1lVG9kYXlUYXNrcygpO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fb3BlblRhc2tCdG4nKSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19vcGVuVGFza0J0bicpLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBpbXBvcnRhbmNlLCB0YXNrQ29uZmlybSwgZGF0ZSkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaW1wb3J0YW5jZSxcbiAgICAgIHRhc2tDb25maXJtLFxuICAgIH07XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbiAgICAgIGlmIChvYmpbZGF0ZV0pIHtcbiAgICAgICAgb2JqW2RhdGVdLnB1c2goZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbZGF0ZV0gPSBbZGF0YV07XG4gICAgICAgIGNvbnN0IHNvcnRpbmdPYmogPSBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKG9iamVjdCwga2V5KSA9PiB7XG4gICAgICAgICAgb2JqZWN0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIG9iaiA9IHNvcnRpbmdPYmo7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh7IFtkYXRlXTogW2RhdGFdIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVEYXRhKCkge1xuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9ICd7fSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzX190YXNrQ29udGFpbmVyJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5sYXN0Q2hpbGQuY2hpbGROb2Rlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGFza1ZhbHVlcy5wdXNoKGVsZW1lbnQuY2hpbGROb2Rlc1sxXS5maXJzdENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgdGFza1ZhbHVlcy5wdXNoKGVsZW1lbnQuY2hpbGROb2Rlc1sxXS5sYXN0Q2hpbGQudGV4dENvbnRlbnQpO1xuICAgICAgICB0YXNrVmFsdWVzLnB1c2goZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LmZpcnN0Q2hpbGQpLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIHRhc2tWYWx1ZXMucHVzaChlbGVtZW50LmRhdGFzZXQuY29uZmlybSk7XG4gICAgICAgIGlmIChpdGVtLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgIT09ICdUb2RheSBUYXNrcycpIHtcbiAgICAgICAgICB0YXNrVmFsdWVzLnB1c2goaXRlbS5maXJzdENoaWxkLmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrVmFsdWVzLnB1c2gobmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYXZlVGFzayguLi50YXNrVmFsdWVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgTG9hZERhdGEgZnJvbSAnLi9sb2FkRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZU5ld1Rhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFzaycpO1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NyZWF0ZU5ld1Rhc2tCdG4nKTtcbiAgICB0aGlzLnN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19zdWJtaXRCdG4nKTtcbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3RpdGxlJyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kYXRlJyk7XG4gICAgdGhpcy5jb2xvckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19jb2xvcnNCb3gnKTtcbiAgICB0aGlzLm9wZW5UYXNrQ29udGFpbmVyQ2xhc3MgPSAnY3JlYXRlTmV3VGFzay0tb3Blbic7XG4gICAgdGhpcy50YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX190YXNrJyk7XG4gICAgdGhpcy5Mb2FkRGF0YSA9IG5ldyBMb2FkRGF0YSgpO1xuICB9XG5cbiAgb3BlbkJveCgpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uc3R5bGUuYm9yZGVyQm90dG9tID0gJzAuMnZ3IHNvbGlkICMyODI4MjgnO1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcyk7XG4gIH1cblxuICBjbG9zZUJveCgpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLm9wZW5UYXNrQ29udGFpbmVyQ2xhc3MpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVOZXdUYXNrQnRuLnN0eWxlLmJvcmRlciA9ICcwLjJ2dyBzb2xpZCAjRjRGNEY0JztcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgY2xlYXJJbnB1dHMoKSB7XG4gICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICB0aGlzLmRhdGUudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRoaXMuY29sb3JCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnO1xuICB9XG5cbiAgZ2VuZXJhdGVFdmVudHMoKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnModGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKSkge1xuICAgICAgICB0aGlzLmNsb3NlQm94KHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5Cb3godGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGl0bGUudmFsdWUpIHtcbiAgICAgICAgdGhpcy5Mb2FkRGF0YS5zYXZlVGFzayh0aGlzLnRpdGxlLnZhbHVlLCB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlLCB0aGlzLmNvbG9yQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciwgJ3VuY29uZmlybScsIHRoaXMuZGF0ZS52YWx1ZSk7XG4gICAgICAgIHRoaXMuTG9hZERhdGEuY29udmVydERhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICAgIHRoaXMuY2xvc2VCb3goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2tzRXZlbnRzIGZyb20gJy4vdGFza3NFdmVudHMnO1xuaW1wb3J0IEdlbmVyYXRpb25IVE1MRWxlbWVudHMgZnJvbSAnLi9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJhdGlvblRhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tCb3hIVE1MID0gMDtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTCA9IDA7XG4gICAgdGhpcy50YXNrc0xpc3QgPSBbXTtcbiAgICB0aGlzLnRhc2tzT3BlbkJ0biA9IDA7XG4gICAgdGhpcy5HZW5lcmF0aW9uSFRNTCA9IG5ldyBHZW5lcmF0aW9uSFRNTEVsZW1lbnRzKCk7XG4gIH1cblxuICBnZW5lcmF0aW9uVGFza3NCb3godGFza3NDb250YWluZXIpIHtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTCA9IHRoaXMubWVyZ2VUb0RPTSh0YXNrc0NvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQodGhpcy50YXNrc0NvbnRhaW5lckhUTUxbMF0pO1xuICB9XG5cbiAgZ2VuZXJhdGlvblRhc2sodGFza0JveCwgY29uZmlybWF0aW9uKSB7XG4gICAgdGhpcy50YXNrQm94SFRNTCA9IHRoaXMubWVyZ2VUb0RPTSh0YXNrQm94KTtcbiAgICB0aGlzLmZpbmRUaXRsZUFuZEJ0bih0aGlzLnRhc2tCb3hIVE1MLCBjb25maXJtYXRpb24pO1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MW3RoaXMudGFza3NDb250YWluZXJIVE1MLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKHRoaXMudGFza0JveEhUTUxbMF0pO1xuICB9XG5cbiAgbWVyZ2VUb0RPTShhcnIpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLkdlbmVyYXRpb25IVE1MLmdlbmVyYXRpb25FbGVtKGtleSwgaXRlbVtrZXldKSk7XG4gICAgICAgIGlmIChpdGVtW2tleV0ucGFyZW50Q2xhc3MpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLkdlbmVyYXRpb25IVE1MLmFkZENoaWxkKGl0ZW1ba2V5XS5wYXJlbnRDbGFzcywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlYXJjaEhUTUxFbGVtZW50cyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3NMaXN0Lmxlbmd0aCAqIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy50YXNrc0xpc3RbMF0pLmhlaWdodClcbiAgICAgICsgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFza3NMaXN0WzBdKS5tYXJnaW5Ub3ApICogMik7XG4gIH1cblxuICBjaGFuZ2VUYXNrc0xpc3RTdHlsZShsaXN0SGVpZ2h0LCB0YXNrUG9zaXRpb24sIHRhc2tUcmFuc2l0aW9uLCB0YXNrT3BhY2l0eSkge1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MW3RoaXMudGFza3NDb250YWluZXJIVE1MLmxlbmd0aCAtIDFdLnN0eWxlLmhlaWdodCA9IGxpc3RIZWlnaHQ7XG4gICAgdGhpcy50YXNrc0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IHRhc2tQb3NpdGlvbjtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IHRhc2tUcmFuc2l0aW9uO1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gdGFza09wYWNpdHk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRGF5VGFza3NFdmVudCgpIHtcbiAgICB0aGlzLnRhc2tzT3BlbkJ0biA9IHRoaXMudGFza3NDb250YWluZXJIVE1MLmZpbmQoKGVsZW1lbnQpID0+IHRoaXMuc2VhcmNoSFRNTEVsZW1lbnRzKGVsZW1lbnQsICd0YXNrc19fb3BlblRhc2tCdG4nKSk7XG4gICAgdGhpcy50YXNrc0xpc3QgPSB0aGlzLnRhc2tzQ29udGFpbmVySFRNTFt0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5sZW5ndGggLSAxXS5jaGlsZE5vZGVzO1xuICAgIHRoaXMudGFza3NPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuRGF5VGFzaygpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRheVRhc2soKSB7XG4gICAgaWYgKHRoaXMudGFza3NPcGVuQnRuLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrc19fb3BlblRhc2tCdG5JY29uLS1vcGVuZWQnKSkge1xuICAgICAgdGhpcy5jaGFuZ2VUYXNrc0xpc3RTdHlsZSgnMHB4JywgJ2Fic29sdXRlJywgJzBtcyAwbXMnLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VUYXNrc0xpc3RTdHlsZShgJHt0aGlzLmdldE9iamVjdEhlaWdodCgpfXB4YCwgJ3JlbGF0aXZlJywgJzMwMG1zIDMwMG1zJywgMSk7XG4gICAgfVxuICAgIHRoaXMudGFza3NPcGVuQnRuLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgndGFza3NfX29wZW5UYXNrQnRuSWNvbi0tb3BlbmVkJyk7XG4gIH1cblxuICBmaW5kVGl0bGVBbmRCdG4oYXJyLCBjb25maXJtYXRpb24pIHtcbiAgICBjb25zdCB0aXRsZUFuZEJ0bkFyciA9IFtdO1xuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX190YXNrJykgfHwgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX19jb25maXJtYXRpb25CdG4nKSkge1xuICAgICAgICB0aXRsZUFuZEJ0bkFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZXZlbnRDb25maXJtYXRpb24odGl0bGVBbmRCdG5BcnJbMV0sIHRpdGxlQW5kQnRuQXJyWzBdKTtcbiAgICBpZiAoY29uZmlybWF0aW9uKSB0aXRsZUFuZEJ0bkFyclsxXS5jbGljaygpO1xuICB9XG5cbiAgZXZlbnRDb25maXJtYXRpb24oY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpIHtcbiAgICBuZXcgVGFza3NFdmVudHMoY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpLmdlbmVyYXRlRXZlbnRzKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbk1lbnUge1xuICBjb25zdHJ1Y3Rvcihjb2xvcnNCb3gsIGNvbG9ycykge1xuICAgIHRoaXMuY29sb3JzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29sb3JzQm94fWApO1xuICAgIHRoaXMuY29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29sb3JzfWApO1xuICB9XG5cbiAgZ2VuZXJhdGVFdmVudEZvclN3aXRjaE1lbnUoKSB7XG4gICAgdGhpcy5jb2xvcnNCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb2xvcnMpLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbG9yc0JveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJzpob3ZlcicpKS5pbmNsdWRlcyh0aGlzLmNvbG9ycykpIHtcbiAgICAgICAgdGhpcy5jb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29sb3JzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIHRoaXMuY29sb3JzQm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUudGFyZ2V0KS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrc0V2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpcm1hdGlvbkJ0biwgdGFza1RpdGxlKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25CdG4gPSBjb25maXJtYXRpb25CdG47XG4gICAgdGhpcy50YXNrVGl0bGUgPSB0YXNrVGl0bGU7XG4gIH1cblxuICBzd2l0Y2hDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25CdG4uY2xhc3NMaXN0LnRvZ2dsZSgnc3dpdGNoT24nKTtcbiAgfVxuXG4gIGdlbmVyYXRlRXZlbnRzKCkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zd2l0Y2hDb25maXJtYXRpb24oKTtcbiAgICAgIHRoaXMudGFza1RpdGxlLmNoaWxkTm9kZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgndGFza3NfX3Rhc2stLWNvbmZpcm0nKSk7XG4gICAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29uZmlybSA9IHRoaXMuY29uZmlybWF0aW9uQnRuLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb25maXJtID09PSAndW5jb25maXJtJyA/ICdjb25maXJtJyA6ICd1bmNvbmZpcm0nO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9tb2R1bGVDcmVhdGVOZXdUYXNrJztcbmltcG9ydCAnLi9tb2R1bGVTZWxlY3Rpb25NZW51JztcbmltcG9ydCAnLi9jb21iaW5hdGlvbk1vZHVsZXMnO1xuaW1wb3J0ICcuL3Rhc2tzRXZlbnRzJztcbmltcG9ydCAnLi9tb2R1bGVHZW5lcmF0aW9uVGFzayc7XG5pbXBvcnQgJy4vZ2VuZXJhdGlvbkhUTUxFbGVtZW50cyc7XG5pbXBvcnQgJy4vbG9hZERhdGEnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9