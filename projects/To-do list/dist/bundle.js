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
/* harmony import */ var _moduleGenerationTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleGenerationTask */ "./src/js/moduleGenerationTask.js");
/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadData */ "./src/js/loadData.js");





const ModuleCreateNewTask = new _moduleCreateNewTask__WEBPACK_IMPORTED_MODULE_1__["default"]();

const ModuleSelectionMenu = new _moduleSelectionMenu__WEBPACK_IMPORTED_MODULE_0__["default"](
  'createNewTask__colorsBox',
  'createNewTask__colors',
);

const ModuleLoadData = new _loadData__WEBPACK_IMPORTED_MODULE_3__["default"]();

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

  clearOlderTasks() {
    if (localStorage.tasks) {
      const data = JSON.parse(localStorage.tasks);
      Object.keys(data).forEach(key => {
        if (key < new Date().toISOString().slice(0, 10)) delete data[key];
      });
      localStorage.tasks = JSON.stringify(data);
      return data;
    }
  }

  convertDataFromStorage() {
    if (localStorage.tasks) {
      const data = this.clearOlderTasks();
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
          moduleGenerationTask.generationTask(this.taskBox);
        });
        moduleGenerationTask.openDayTasksEvent();
      });
    }
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

  saveTask() {
    const data = {
      title: this.title.value,
      description: this.description.value,
      importance: this.colorBox.style.backgroundColor,
    };
    if (localStorage.tasks) {
      let obj = JSON.parse(localStorage.tasks);
      if (obj[this.date.value]) {
        obj[this.date.value].push(data);
      } else {
        obj[this.date.value] = [data];
        const sortingObj = Object.keys(obj).sort().reduce((object, key) => {
          object[key] = obj[key];
          return object;
        }, {});
        obj = sortingObj;
      }
      localStorage.tasks = JSON.stringify(obj);
    } else {
      localStorage.tasks = JSON.stringify({ [this.date.value]: [data] });
    }
  }

  generateEvents() {
    this.createNewTaskBtn.addEventListener('click', () => {
      if (this.createNewTaskContainer.classList.contains(this.openTaskContainerClass)) {
        this.closeBox(this.createNewTaskContainer);
      } else {
        this.openBox(this.createNewTaskContainer);
      }
    });

    document.querySelector('.main').addEventListener('click', (e) => {
      if (!e.path.includes(this.createNewTaskContainer) && this.createNewTaskContainer.classList.contains(this.openTaskContainerClass)) this.closeBox();
    });

    this.submitBtn.addEventListener('click', () => {
      if (this.title.value) {
        this.saveTask();
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

  generationTask(taskBox) {
    this.taskBoxHTML = this.mergeToDOM(taskBox);
    this.findTitleAndBtn(this.taskBoxHTML);
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

  findTitleAndBtn(arr) {
    const titleAndBtnArr = [];
    arr.forEach((item) => {
      if (item.classList.contains('tasks__task') || item.classList.contains('tasks__confirmationBtn')) {
        titleAndBtnArr.push(item);
      }
    });
    this.eventConfirmation(titleAndBtnArr[1], titleAndBtnArr[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNHO0FBQ0E7QUFDRDtBQUNQO0FBQ1M7QUFDRTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jb21iaW5hdGlvbk1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbG9hZERhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVDcmVhdGVOZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbW9kdWxlR2VuZXJhdGlvblRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVTZWxlY3Rpb25NZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdGFza3NFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBTZWxlY3Rpb25NZW51IGZyb20gJy4vbW9kdWxlU2VsZWN0aW9uTWVudSc7XG5pbXBvcnQgQ3JlYXRlTmV3VGFzayBmcm9tICcuL21vZHVsZUNyZWF0ZU5ld1Rhc2snO1xuaW1wb3J0IEdlbmVyYXRpb25UYXNrIGZyb20gJy4vbW9kdWxlR2VuZXJhdGlvblRhc2snO1xuaW1wb3J0IExvYWREYXRhIGZyb20gJy4vbG9hZERhdGEnO1xuXG5jb25zdCBNb2R1bGVDcmVhdGVOZXdUYXNrID0gbmV3IENyZWF0ZU5ld1Rhc2soKTtcblxuY29uc3QgTW9kdWxlU2VsZWN0aW9uTWVudSA9IG5ldyBTZWxlY3Rpb25NZW51KFxuICAnY3JlYXRlTmV3VGFza19fY29sb3JzQm94JyxcbiAgJ2NyZWF0ZU5ld1Rhc2tfX2NvbG9ycycsXG4pO1xuXG5jb25zdCBNb2R1bGVMb2FkRGF0YSA9IG5ldyBMb2FkRGF0YSgpO1xuXG5Nb2R1bGVDcmVhdGVOZXdUYXNrLmdlbmVyYXRlRXZlbnRzKCk7XG5Nb2R1bGVDcmVhdGVOZXdUYXNrLmNsZWFySW5wdXRzKCk7XG5Nb2R1bGVTZWxlY3Rpb25NZW51LmdlbmVyYXRlRXZlbnRGb3JTd2l0Y2hNZW51KCk7XG5Nb2R1bGVMb2FkRGF0YS5jb252ZXJ0RGF0YUZyb21TdG9yYWdlKCk7XG5cbihmdW5jdGlvbiBvcGVuVG9kYXlUYXNrcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzX19oZWFkZXJCb3gnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPT09IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpIHtcbiAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAnVG9kYXkgVGFza3MnO1xuICAgICAgZWxlbWVudC5sYXN0Q2hpbGQuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xufSgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyYXRpb25IVE1MRWxlbWVudHMge1xuICBnZW5lcmF0aW9uRWxlbSh0YWcsIGF0dHIpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIE9iamVjdC5rZXlzKGF0dHIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ3RleHRDb250ZW50Jykge1xuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gYXR0cltrZXldO1xuICAgICAgfSBlbHNlIGlmIChrZXkgIT09ICdwYXJlbnRDbGFzcycpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgYWRkQ2hpbGQocGFyZW50LCBhcnIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhcnI7XG4gICAgYXJyLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhwYXJlbnQpKSB7XG4gICAgICAgIHJlc3VsdFtpXS5hcHBlbmRDaGlsZChhcnJbYXJyLmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgR2VuZXJhdGlvblRhc2sgZnJvbSAnLi9tb2R1bGVHZW5lcmF0aW9uVGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWREYXRhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrQm94ID0gW1xuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2ltcG9ydGFuY2VCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICAgIHN0eWxlOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2RhdGEnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcDoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX3RpdGxlJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhJyxcbiAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fZGVzY3JpcHRpb24nLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGEnLFxuICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2NvbmZpcm1hdGlvbkJ0bicsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lciA9IFtcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fdGFza0NvbnRhaW5lcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19oZWFkZXJCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fZGF0YUJveCcsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19faGVhZGVyQm94JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2ltcG9ydGFuY2VCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGFCb3gnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcDoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2RhdGUnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2RhdGFCb3gnLFxuICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19oZWFkZXJCb3gnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fb3BlblRhc2tCdG5JY29uJyxcbiAgICAgICAgICBzcmM6ICcuL3NyYy9hc3NldHMvaW1hZ2VzL2Fycm93LnN2ZycsXG4gICAgICAgICAgYWx0OiAnYXJyb3cnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2xpc3QnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgY2xlYXJPbGRlclRhc2tzKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgPCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY2xlYXJPbGRlclRhc2tzKCk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbW9kdWxlR2VuZXJhdGlvblRhc2sgPSBuZXcgR2VuZXJhdGlvblRhc2soKTtcbiAgICAgICAgdGhpcy50YXNrc0NvbnRhaW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucCkge1xuICAgICAgICAgICAgaXRlbS5wLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZUdlbmVyYXRpb25UYXNrLmdlbmVyYXRpb25UYXNrc0JveCh0aGlzLnRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgZGF0YVtrZXldLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tCb3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fdGl0bGUnKSB7XG4gICAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW0udGl0bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZGl2ICYmIGl0ZW0uZGl2LmNsYXNzID09PSAndGFza3NfX2ltcG9ydGFuY2VCb3gnKSB7XG4gICAgICAgICAgICAgIGl0ZW0uZGl2LnN0eWxlID0gYGJhY2tncm91bmQtY29sb3I6ICR7ZWxlbS5pbXBvcnRhbmNlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbW9kdWxlR2VuZXJhdGlvblRhc2suZ2VuZXJhdGlvblRhc2sodGhpcy50YXNrQm94KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZUdlbmVyYXRpb25UYXNrLm9wZW5EYXlUYXNrc0V2ZW50KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZU5ld1Rhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFzaycpO1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NyZWF0ZU5ld1Rhc2tCdG4nKTtcbiAgICB0aGlzLnN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19zdWJtaXRCdG4nKTtcbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3RpdGxlJyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kYXRlJyk7XG4gICAgdGhpcy5jb2xvckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19jb2xvcnNCb3gnKTtcbiAgICB0aGlzLm9wZW5UYXNrQ29udGFpbmVyQ2xhc3MgPSAnY3JlYXRlTmV3VGFzay0tb3Blbic7XG4gIH1cblxuICBvcGVuQm94KCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0bi5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMC4ydncgc29saWQgIzI4MjgyOCc7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUodGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKTtcbiAgfVxuXG4gIGNsb3NlQm94KCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uc3R5bGUuYm9yZGVyID0gJzAuMnZ3IHNvbGlkICNGNEY0RjQnO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5jb2xvckJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XG4gIH1cblxuICBzYXZlVGFzaygpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGltcG9ydGFuY2U6IHRoaXMuY29sb3JCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yLFxuICAgIH07XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbiAgICAgIGlmIChvYmpbdGhpcy5kYXRlLnZhbHVlXSkge1xuICAgICAgICBvYmpbdGhpcy5kYXRlLnZhbHVlXS5wdXNoKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW3RoaXMuZGF0ZS52YWx1ZV0gPSBbZGF0YV07XG4gICAgICAgIGNvbnN0IHNvcnRpbmdPYmogPSBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKG9iamVjdCwga2V5KSA9PiB7XG4gICAgICAgICAgb2JqZWN0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIG9iaiA9IHNvcnRpbmdPYmo7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh7IFt0aGlzLmRhdGUudmFsdWVdOiBbZGF0YV0gfSk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVFdmVudHMoKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnModGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKSkge1xuICAgICAgICB0aGlzLmNsb3NlQm94KHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5Cb3godGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnBhdGguaW5jbHVkZXModGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyKSAmJiB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcykpIHRoaXMuY2xvc2VCb3goKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGl0bGUudmFsdWUpIHtcbiAgICAgICAgdGhpcy5zYXZlVGFzaygpO1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICAgIHRoaXMuY2xvc2VCb3goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2tzRXZlbnRzIGZyb20gJy4vdGFza3NFdmVudHMnO1xuaW1wb3J0IEdlbmVyYXRpb25IVE1MRWxlbWVudHMgZnJvbSAnLi9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJhdGlvblRhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tCb3hIVE1MID0gMDtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTCA9IDA7XG4gICAgdGhpcy50YXNrc0xpc3QgPSBbXTtcbiAgICB0aGlzLnRhc2tzT3BlbkJ0biA9IDA7XG4gICAgdGhpcy5HZW5lcmF0aW9uSFRNTCA9IG5ldyBHZW5lcmF0aW9uSFRNTEVsZW1lbnRzKCk7XG4gIH1cblxuICBnZW5lcmF0aW9uVGFza3NCb3godGFza3NDb250YWluZXIpIHtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTCA9IHRoaXMubWVyZ2VUb0RPTSh0YXNrc0NvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuYXBwZW5kQ2hpbGQodGhpcy50YXNrc0NvbnRhaW5lckhUTUxbMF0pO1xuICB9XG5cbiAgZ2VuZXJhdGlvblRhc2sodGFza0JveCkge1xuICAgIHRoaXMudGFza0JveEhUTUwgPSB0aGlzLm1lcmdlVG9ET00odGFza0JveCk7XG4gICAgdGhpcy5maW5kVGl0bGVBbmRCdG4odGhpcy50YXNrQm94SFRNTCk7XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lckhUTUxbdGhpcy50YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQodGhpcy50YXNrQm94SFRNTFswXSk7XG4gIH1cblxuICBtZXJnZVRvRE9NKGFycikge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuR2VuZXJhdGlvbkhUTUwuZ2VuZXJhdGlvbkVsZW0oa2V5LCBpdGVtW2tleV0pKTtcbiAgICAgICAgaWYgKGl0ZW1ba2V5XS5wYXJlbnRDbGFzcykge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuR2VuZXJhdGlvbkhUTUwuYWRkQ2hpbGQoaXRlbVtrZXldLnBhcmVudENsYXNzLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VhcmNoSFRNTEVsZW1lbnRzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGdldE9iamVjdEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrc0xpc3QubGVuZ3RoICogKHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhc2tzTGlzdFswXSkuaGVpZ2h0KVxuICAgICAgKyBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy50YXNrc0xpc3RbMF0pLm1hcmdpblRvcCkgKiAyKTtcbiAgfVxuXG4gIGNoYW5nZVRhc2tzTGlzdFN0eWxlKGxpc3RIZWlnaHQsIHRhc2tQb3NpdGlvbiwgdGFza1RyYW5zaXRpb24sIHRhc2tPcGFjaXR5KSB7XG4gICAgdGhpcy50YXNrc0NvbnRhaW5lckhUTUxbdGhpcy50YXNrc0NvbnRhaW5lckhUTUwubGVuZ3RoIC0gMV0uc3R5bGUuaGVpZ2h0ID0gbGlzdEhlaWdodDtcbiAgICB0aGlzLnRhc2tzTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gdGFza1Bvc2l0aW9uO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gdGFza1RyYW5zaXRpb247XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSB0YXNrT3BhY2l0eTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5EYXlUYXNrc0V2ZW50KCkge1xuICAgIHRoaXMudGFza3NPcGVuQnRuID0gdGhpcy50YXNrc0NvbnRhaW5lckhUTUwuZmluZCgoZWxlbWVudCkgPT4gdGhpcy5zZWFyY2hIVE1MRWxlbWVudHMoZWxlbWVudCwgJ3Rhc2tzX19vcGVuVGFza0J0bicpKTtcbiAgICB0aGlzLnRhc2tzTGlzdCA9IHRoaXMudGFza3NDb250YWluZXJIVE1MW3RoaXMudGFza3NDb250YWluZXJIVE1MLmxlbmd0aCAtIDFdLmNoaWxkTm9kZXM7XG4gICAgdGhpcy50YXNrc09wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5EYXlUYXNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRGF5VGFzaygpIHtcbiAgICBpZiAodGhpcy50YXNrc09wZW5CdG4uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX19vcGVuVGFza0J0bkljb24tLW9wZW5lZCcpKSB7XG4gICAgICB0aGlzLmNoYW5nZVRhc2tzTGlzdFN0eWxlKCcwcHgnLCAnYWJzb2x1dGUnLCAnMG1zIDBtcycsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVRhc2tzTGlzdFN0eWxlKGAke3RoaXMuZ2V0T2JqZWN0SGVpZ2h0KCl9cHhgLCAncmVsYXRpdmUnLCAnMzAwbXMgMzAwbXMnLCAxKTtcbiAgICB9XG4gICAgdGhpcy50YXNrc09wZW5CdG4uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrc19fb3BlblRhc2tCdG5JY29uLS1vcGVuZWQnKTtcbiAgfVxuXG4gIGZpbmRUaXRsZUFuZEJ0bihhcnIpIHtcbiAgICBjb25zdCB0aXRsZUFuZEJ0bkFyciA9IFtdO1xuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX190YXNrJykgfHwgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tzX19jb25maXJtYXRpb25CdG4nKSkge1xuICAgICAgICB0aXRsZUFuZEJ0bkFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZXZlbnRDb25maXJtYXRpb24odGl0bGVBbmRCdG5BcnJbMV0sIHRpdGxlQW5kQnRuQXJyWzBdKTtcbiAgfVxuXG4gIGV2ZW50Q29uZmlybWF0aW9uKGNvbmZpcm1hdGlvbkJ0biwgdGFza1RpdGxlKSB7XG4gICAgbmV3IFRhc2tzRXZlbnRzKGNvbmZpcm1hdGlvbkJ0biwgdGFza1RpdGxlKS5nZW5lcmF0ZUV2ZW50cygpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Rpb25NZW51IHtcbiAgY29uc3RydWN0b3IoY29sb3JzQm94LCBjb2xvcnMpIHtcbiAgICB0aGlzLmNvbG9yc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbG9yc0JveH1gKTtcbiAgICB0aGlzLmNvbG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbG9yc31gKTtcbiAgfVxuXG4gIGdlbmVyYXRlRXZlbnRGb3JTd2l0Y2hNZW51KCkge1xuICAgIHRoaXMuY29sb3JzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY29sb3JzKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5jb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb2xvcnNCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6aG92ZXInKSkuaW5jbHVkZXModGhpcy5jb2xvcnMpKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbG9ycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICB0aGlzLmNvbG9yc0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLnRhcmdldCkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3NFdmVudHMge1xuICBjb25zdHJ1Y3Rvcihjb25maXJtYXRpb25CdG4sIHRhc2tUaXRsZSkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uQnRuID0gY29uZmlybWF0aW9uQnRuO1xuICAgIHRoaXMudGFza1RpdGxlID0gdGFza1RpdGxlO1xuICB9XG5cbiAgc3dpdGNoQ29uZmlybWF0aW9uKCkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaE9uJyk7XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50cygpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc3dpdGNoQ29uZmlybWF0aW9uKCk7XG4gICAgICB0aGlzLnRhc2tUaXRsZS5jaGlsZE5vZGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tzX190YXNrLS1jb25maXJtJykpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9tb2R1bGVDcmVhdGVOZXdUYXNrJztcbmltcG9ydCAnLi9tb2R1bGVTZWxlY3Rpb25NZW51JztcbmltcG9ydCAnLi9jb21iaW5hdGlvbk1vZHVsZXMnO1xuaW1wb3J0ICcuL3Rhc2tzRXZlbnRzJztcbmltcG9ydCAnLi9tb2R1bGVHZW5lcmF0aW9uVGFzayc7XG5pbXBvcnQgJy4vZ2VuZXJhdGlvbkhUTUxFbGVtZW50cyc7XG5pbXBvcnQgJy4vbG9hZERhdGEnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9