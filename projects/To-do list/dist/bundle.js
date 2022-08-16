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

  convertDataFromStorage() {
    if (localStorage.tasks) {
      const data = JSON.parse(localStorage.tasks);
      const moduleGenerationTask = new _moduleGenerationTask__WEBPACK_IMPORTED_MODULE_0__["default"]();
      Object.keys(data).forEach((key) => {
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
      });
    }
  }

  openTasks() {
    const taskBtn = document.querySelector('.tasks__openTaskBtn');
    taskBtn.addEventListener('click', () => {
      
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
      this.saveTask();
      this.clearInputs();
      this.closeBox();
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
      this.taskTitle.classList.toggle('tasks__task--confirm');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFXO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0EsZ0RBQWdELFVBQVU7QUFDMUQsNkNBQTZDLE9BQU87QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDRztBQUNBO0FBQ0Q7QUFDUDtBQUNTO0FBQ0U7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzNhYzQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jb21iaW5hdGlvbk1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9nZW5lcmF0aW9uSFRNTEVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbG9hZERhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVDcmVhdGVOZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvbW9kdWxlR2VuZXJhdGlvblRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVTZWxlY3Rpb25NZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdGFza3NFdmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBTZWxlY3Rpb25NZW51IGZyb20gJy4vbW9kdWxlU2VsZWN0aW9uTWVudSc7XG5pbXBvcnQgQ3JlYXRlTmV3VGFzayBmcm9tICcuL21vZHVsZUNyZWF0ZU5ld1Rhc2snO1xuaW1wb3J0IEdlbmVyYXRpb25UYXNrIGZyb20gJy4vbW9kdWxlR2VuZXJhdGlvblRhc2snO1xuaW1wb3J0IExvYWREYXRhIGZyb20gJy4vbG9hZERhdGEnO1xuXG5jb25zdCBNb2R1bGVDcmVhdGVOZXdUYXNrID0gbmV3IENyZWF0ZU5ld1Rhc2soKTtcblxuY29uc3QgTW9kdWxlU2VsZWN0aW9uTWVudSA9IG5ldyBTZWxlY3Rpb25NZW51KFxuICAnY3JlYXRlTmV3VGFza19fY29sb3JzQm94JyxcbiAgJ2NyZWF0ZU5ld1Rhc2tfX2NvbG9ycycsXG4pO1xuXG5jb25zdCBNb2R1bGVMb2FkRGF0YSA9IG5ldyBMb2FkRGF0YSgpO1xuXG5Nb2R1bGVDcmVhdGVOZXdUYXNrLmdlbmVyYXRlRXZlbnRzKCk7XG5Nb2R1bGVDcmVhdGVOZXdUYXNrLmNsZWFySW5wdXRzKCk7XG5Nb2R1bGVTZWxlY3Rpb25NZW51LmdlbmVyYXRlRXZlbnRGb3JTd2l0Y2hNZW51KCk7XG5Nb2R1bGVMb2FkRGF0YS5jb252ZXJ0RGF0YUZyb21TdG9yYWdlKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0aW9uSFRNTEVsZW1lbnRzIHtcbiAgZ2VuZXJhdGlvbkVsZW0odGFnLCBhdHRyKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGF0dHJba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ICE9PSAncGFyZW50Q2xhc3MnKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleSwgYXR0cltrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIGFkZENoaWxkKHBhcmVudCwgYXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXJyO1xuICAgIGFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMocGFyZW50KSkge1xuICAgICAgICByZXN1bHRbaV0uYXBwZW5kQ2hpbGQoYXJyW2Fyci5sZW5ndGggLSAxXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IEdlbmVyYXRpb25UYXNrIGZyb20gJy4vbW9kdWxlR2VuZXJhdGlvblRhc2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRGF0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0JveCA9IFtcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19fdGFzaycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19pbXBvcnRhbmNlQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgICBzdHlsZTogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19kYXRhJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHA6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX190aXRsZScsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19fZGF0YScsXG4gICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcDoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhJyxcbiAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19jb25maXJtYXRpb25CdG4nLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX3Rhc2snLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMudGFza3NDb250YWluZXIgPSBbXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX3Rhc2tDb250YWluZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGl2OiB7XG4gICAgICAgICAgY2xhc3M6ICd0YXNrc19faGVhZGVyQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpdjoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX2RhdGFCb3gnLFxuICAgICAgICAgIHBhcmVudENsYXNzOiAndGFza3NfX2hlYWRlckJveCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19pbXBvcnRhbmNlQm94JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHA6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19kYXRlJyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19kYXRhQm94JyxcbiAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bicsXG4gICAgICAgICAgcGFyZW50Q2xhc3M6ICd0YXNrc19faGVhZGVyQm94JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltZzoge1xuICAgICAgICAgIGNsYXNzOiAndGFza3NfX29wZW5UYXNrQnRuSWNvbicsXG4gICAgICAgICAgc3JjOiAnLi9zcmMvYXNzZXRzL2ltYWdlcy9hcnJvdy5zdmcnLFxuICAgICAgICAgIGFsdDogJ2Fycm93JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX19vcGVuVGFza0J0bicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXY6IHtcbiAgICAgICAgICBjbGFzczogJ3Rhc2tzX19saXN0JyxcbiAgICAgICAgICBwYXJlbnRDbGFzczogJ3Rhc2tzX190YXNrQ29udGFpbmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIGNvbnZlcnREYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbiAgICAgIGNvbnN0IG1vZHVsZUdlbmVyYXRpb25UYXNrID0gbmV3IEdlbmVyYXRpb25UYXNrKCk7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy50YXNrc0NvbnRhaW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucCkge1xuICAgICAgICAgICAgaXRlbS5wLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZUdlbmVyYXRpb25UYXNrLmdlbmVyYXRpb25UYXNrc0JveCh0aGlzLnRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgZGF0YVtrZXldLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tCb3guZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fdGl0bGUnKSB7XG4gICAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW0udGl0bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ucCAmJiBpdGVtLnAuY2xhc3MgPT09ICd0YXNrc19fZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgIGl0ZW0ucC50ZXh0Q29udGVudCA9IGVsZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZGl2ICYmIGl0ZW0uZGl2LmNsYXNzID09PSAndGFza3NfX2ltcG9ydGFuY2VCb3gnKSB7XG4gICAgICAgICAgICAgIGl0ZW0uZGl2LnN0eWxlID0gYGJhY2tncm91bmQtY29sb3I6ICR7ZWxlbS5pbXBvcnRhbmNlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbW9kdWxlR2VuZXJhdGlvblRhc2suZ2VuZXJhdGlvblRhc2sodGhpcy50YXNrQm94KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvcGVuVGFza3MoKSB7XG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fb3BlblRhc2tCdG4nKTtcbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZU5ld1Rhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFzaycpO1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NyZWF0ZU5ld1Rhc2tCdG4nKTtcbiAgICB0aGlzLnN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19zdWJtaXRCdG4nKTtcbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3RpdGxlJyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kYXRlJyk7XG4gICAgdGhpcy5jb2xvckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19jb2xvcnNCb3gnKTtcbiAgICB0aGlzLm9wZW5UYXNrQ29udGFpbmVyQ2xhc3MgPSAnY3JlYXRlTmV3VGFzay0tb3Blbic7XG4gIH1cblxuICBvcGVuQm94KCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0bi5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMC4ydncgc29saWQgIzI4MjgyOCc7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUodGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKTtcbiAgfVxuXG4gIGNsb3NlQm94KCkge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uc3R5bGUuYm9yZGVyID0gJzAuMnZ3IHNvbGlkICNGNEY0RjQnO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5jb2xvckJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XG4gIH1cblxuICBzYXZlVGFzaygpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGltcG9ydGFuY2U6IHRoaXMuY29sb3JCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yLFxuICAgIH07XG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcykge1xuICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbiAgICAgIGlmIChvYmpbdGhpcy5kYXRlLnZhbHVlXSkge1xuICAgICAgICBvYmpbdGhpcy5kYXRlLnZhbHVlXS5wdXNoKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW3RoaXMuZGF0ZS52YWx1ZV0gPSBbZGF0YV07XG4gICAgICAgIGNvbnN0IHNvcnRpbmdPYmogPSBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoKG9iamVjdCwga2V5KSA9PiB7XG4gICAgICAgICAgb2JqZWN0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIG9iaiA9IHNvcnRpbmdPYmo7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh7IFt0aGlzLmRhdGUudmFsdWVdOiBbZGF0YV0gfSk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVFdmVudHMoKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnModGhpcy5vcGVuVGFza0NvbnRhaW5lckNsYXNzKSkge1xuICAgICAgICB0aGlzLmNsb3NlQm94KHRoaXMuY3JlYXRlTmV3VGFza0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5Cb3godGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLnBhdGguaW5jbHVkZXModGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyKSAmJiB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub3BlblRhc2tDb250YWluZXJDbGFzcykpIHRoaXMuY2xvc2VCb3goKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlVGFzaygpO1xuICAgICAgdGhpcy5jbGVhcklucHV0cygpO1xuICAgICAgdGhpcy5jbG9zZUJveCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgVGFza3NFdmVudHMgZnJvbSAnLi90YXNrc0V2ZW50cyc7XG5pbXBvcnQgR2VuZXJhdGlvbkhUTUxFbGVtZW50cyBmcm9tICcuL2dlbmVyYXRpb25IVE1MRWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmF0aW9uVGFzayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0JveEhUTUwgPSAwO1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MID0gMDtcbiAgICB0aGlzLkdlbmVyYXRpb25IVE1MID0gbmV3IEdlbmVyYXRpb25IVE1MRWxlbWVudHMoKTtcbiAgfVxuXG4gIGdlbmVyYXRpb25UYXNrc0JveCh0YXNrc0NvbnRhaW5lcikge1xuICAgIHRoaXMudGFza3NDb250YWluZXJIVE1MID0gdGhpcy5tZXJnZVRvRE9NKHRhc2tzQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZCh0aGlzLnRhc2tzQ29udGFpbmVySFRNTFswXSk7XG4gIH1cblxuICBnZW5lcmF0aW9uVGFzayh0YXNrQm94KSB7XG4gICAgdGhpcy50YXNrQm94SFRNTCA9IHRoaXMubWVyZ2VUb0RPTSh0YXNrQm94KTtcbiAgICB0aGlzLmZpbmRUaXRsZUFuZEJ0bih0aGlzLnRhc2tCb3hIVE1MKTtcbiAgICB0aGlzLnRhc2tzQ29udGFpbmVySFRNTFt0aGlzLnRhc2tzQ29udGFpbmVySFRNTC5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZCh0aGlzLnRhc2tCb3hIVE1MWzBdKTtcbiAgfVxuXG4gIG1lcmdlVG9ET00oYXJyKSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5HZW5lcmF0aW9uSFRNTC5nZW5lcmF0aW9uRWxlbShrZXksIGl0ZW1ba2V5XSkpO1xuICAgICAgICBpZiAoaXRlbVtrZXldLnBhcmVudENsYXNzKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5HZW5lcmF0aW9uSFRNTC5hZGRDaGlsZChpdGVtW2tleV0ucGFyZW50Q2xhc3MsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmaW5kVGl0bGVBbmRCdG4oYXJyKSB7XG4gICAgY29uc3QgdGl0bGVBbmRCdG5BcnIgPSBbXTtcbiAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrc19fdGFzaycpIHx8IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrc19fY29uZmlybWF0aW9uQnRuJykpIHtcbiAgICAgICAgdGl0bGVBbmRCdG5BcnIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmV2ZW50Q29uZmlybWF0aW9uKHRpdGxlQW5kQnRuQXJyWzFdLCB0aXRsZUFuZEJ0bkFyclswXSk7XG4gIH1cblxuICBldmVudENvbmZpcm1hdGlvbihjb25maXJtYXRpb25CdG4sIHRhc2tUaXRsZSkge1xuICAgIG5ldyBUYXNrc0V2ZW50cyhjb25maXJtYXRpb25CdG4sIHRhc2tUaXRsZSkuZ2VuZXJhdGVFdmVudHMoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0aW9uTWVudSB7XG4gIGNvbnN0cnVjdG9yKGNvbG9yc0JveCwgY29sb3JzKSB7XG4gICAgdGhpcy5jb2xvcnNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb2xvcnNCb3h9YCk7XG4gICAgdGhpcy5jb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb2xvcnN9YCk7XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50Rm9yU3dpdGNoTWVudSgpIHtcbiAgICB0aGlzLmNvbG9yc0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbG9ycykuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29sb3JzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnOmhvdmVyJykpLmluY2x1ZGVzKHRoaXMuY29sb3JzKSkge1xuICAgICAgICB0aGlzLmNvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb2xvcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICAgICAgdGhpcy5jb2xvcnNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZS50YXJnZXQpLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tzRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY29uZmlybWF0aW9uQnRuLCB0YXNrVGl0bGUpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0biA9IGNvbmZpcm1hdGlvbkJ0bjtcbiAgICB0aGlzLnRhc2tUaXRsZSA9IHRhc2tUaXRsZTtcbiAgfVxuXG4gIHN3aXRjaENvbmZpcm1hdGlvbigpIHtcbiAgICB0aGlzLmNvbmZpcm1hdGlvbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2hPbicpO1xuICB9XG5cbiAgZ2VuZXJhdGVFdmVudHMoKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnN3aXRjaENvbmZpcm1hdGlvbigpO1xuICAgICAgdGhpcy50YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgndGFza3NfX3Rhc2stLWNvbmZpcm0nKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vbW9kdWxlQ3JlYXRlTmV3VGFzayc7XG5pbXBvcnQgJy4vbW9kdWxlU2VsZWN0aW9uTWVudSc7XG5pbXBvcnQgJy4vY29tYmluYXRpb25Nb2R1bGVzJztcbmltcG9ydCAnLi90YXNrc0V2ZW50cyc7XG5pbXBvcnQgJy4vbW9kdWxlR2VuZXJhdGlvblRhc2snO1xuaW1wb3J0ICcuL2dlbmVyYXRpb25IVE1MRWxlbWVudHMnO1xuaW1wb3J0ICcuL2xvYWREYXRhJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==