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



const ModuleCreateNewTask = new _moduleCreateNewTask__WEBPACK_IMPORTED_MODULE_1__["default"]();

const ModuleSelectionMenu = new _moduleSelectionMenu__WEBPACK_IMPORTED_MODULE_0__["default"](
  'createNewTask__colorsBox',
  'createNewTask__colors',
  '0.2vw solid #282828',
  '0.2vw solid #F4F4F4',
);

ModuleCreateNewTask.generateEvents();
ModuleCreateNewTask.clearInputs();
ModuleSelectionMenu.generateEventForSwitchMenu();


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
    this.time = document.querySelector('.createNewTask__time');
    this.colorBox = document.querySelector('.createNewTask__colorsBox');
  }

  openBox() {
    this.createNewTaskBtn.style.borderBottom = this.focusElemBorder;
    this.createNewTaskContainer.className = 'createNewTask createNewTask--open';
  }

  closeBox() {
    this.createNewTaskContainer.className = 'createNewTask createNewTask--close';
    setTimeout(() => {
      this.createNewTaskBtn.style.border = this.unfocusElemBorder;
    }, 300);
  }

  clearInputs() {
    const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
    const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    this.title.value = '';
    this.description.value = '';
    this.date.value = new Date().toISOString().slice(0, 10);
    this.time.value = `${hours}:${minutes}`;
    this.colorBox.style.backgroundColor = '#ffffff';
  }

  saveTask() {
    const data = {
      title: this.title.value,
      description: this.description.value,
      date: this.date.value,
      time: this.time.value,
      importance: this.colorBox.style.backgroundColor,
    };
    if (localStorage.tasks) {
      const arr = JSON.parse(localStorage.tasks);
      arr.push(data);
      localStorage.tasks = JSON.stringify(arr);
    } else {
      localStorage.tasks = JSON.stringify([data]);
    }
  }

  generateEvents() {
    this.createNewTaskBtn.addEventListener('click', () => {
      if (this.createNewTaskContainer.className === 'createNewTask createNewTask--close'
          || this.createNewTaskContainer.className === 'createNewTask') {
        this.openBox(this.createNewTaskContainer);
      } else {
        this.closeBox(this.createNewTaskContainer);
      }
    });

    this.submitBtn.addEventListener('click', () => {
      this.saveTask();
      this.clearInputs();
      this.closeBox();
    });
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
  constructor(createNewTaskColorsBox,
      createNewTaskColors, focusElemBorder, unfocusElemBorder) {
    this.createNewTaskColorsBox = document.querySelector(`.${createNewTaskColorsBox}`);
    this.createNewTaskColors = document.querySelector(`.${createNewTaskColors}`);
    this.focusElemBorder = focusElemBorder;
    this.unfocusElemBorder = unfocusElemBorder;
  }

  generateEventForSwitchMenu() {
    this.createNewTaskColorsBox.addEventListener('click', () => {
      if (window.getComputedStyle(this.createNewTaskColors).display === 'none') {
        this.createNewTaskColors.style.display = 'block';
      } else {
        this.createNewTaskColors.style.display = 'none';
      }
    });

    this.createNewTaskColorsBox.addEventListener('blur', () => {
      if (!Array.from(document.querySelectorAll(':hover')).includes(this.createNewTaskColors)) {
        this.createNewTaskColors.style.display = 'none';
      }
    });

    this.createNewTaskColors.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        this.createNewTaskColorsBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
      }
      this.createNewTaskColors.style.display = 'none';
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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ0E7O0FBRWxELGdDQUFnQyw0REFBYTs7QUFFN0MsZ0NBQWdDLDREQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbURBQW1ELHNCQUFzQjtBQUN6RSx1REFBdUQsd0JBQXdCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixNQUFNLEdBQUcsUUFBUTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRWU7QUFDZjtBQUNBO0FBQ0EsNkRBQTZELHVCQUF1QjtBQUNwRiwwREFBMEQsb0JBQW9CO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDRztBQUNBO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2NvbWJpbmF0aW9uTW9kdWxlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL21vZHVsZUNyZWF0ZU5ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2R1bGVTZWxlY3Rpb25NZW51LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgU2VsZWN0aW9uTWVudSBmcm9tICcuL21vZHVsZVNlbGVjdGlvbk1lbnUnO1xuaW1wb3J0IENyZWF0ZU5ld1Rhc2sgZnJvbSAnLi9tb2R1bGVDcmVhdGVOZXdUYXNrJztcblxuY29uc3QgTW9kdWxlQ3JlYXRlTmV3VGFzayA9IG5ldyBDcmVhdGVOZXdUYXNrKCk7XG5cbmNvbnN0IE1vZHVsZVNlbGVjdGlvbk1lbnUgPSBuZXcgU2VsZWN0aW9uTWVudShcbiAgJ2NyZWF0ZU5ld1Rhc2tfX2NvbG9yc0JveCcsXG4gICdjcmVhdGVOZXdUYXNrX19jb2xvcnMnLFxuICAnMC4ydncgc29saWQgIzI4MjgyOCcsXG4gICcwLjJ2dyBzb2xpZCAjRjRGNEY0Jyxcbik7XG5cbk1vZHVsZUNyZWF0ZU5ld1Rhc2suZ2VuZXJhdGVFdmVudHMoKTtcbk1vZHVsZUNyZWF0ZU5ld1Rhc2suY2xlYXJJbnB1dHMoKTtcbk1vZHVsZVNlbGVjdGlvbk1lbnUuZ2VuZXJhdGVFdmVudEZvclN3aXRjaE1lbnUoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZU5ld1Rhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFzaycpO1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NyZWF0ZU5ld1Rhc2tCdG4nKTtcbiAgICB0aGlzLnN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19zdWJtaXRCdG4nKTtcbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3RpdGxlJyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19kYXRlJyk7XG4gICAgdGhpcy50aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX3RpbWUnKTtcbiAgICB0aGlzLmNvbG9yQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2tfX2NvbG9yc0JveCcpO1xuICB9XG5cbiAgb3BlbkJveCgpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uc3R5bGUuYm9yZGVyQm90dG9tID0gdGhpcy5mb2N1c0VsZW1Cb3JkZXI7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjcmVhdGVOZXdUYXNrIGNyZWF0ZU5ld1Rhc2stLW9wZW4nO1xuICB9XG5cbiAgY2xvc2VCb3goKSB7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjcmVhdGVOZXdUYXNrIGNyZWF0ZU5ld1Rhc2stLWNsb3NlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTmV3VGFza0J0bi5zdHlsZS5ib3JkZXIgPSB0aGlzLnVuZm9jdXNFbGVtQm9yZGVyO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICBjb25zdCBob3VycyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA8IDEwID8gYDAke25ldyBEYXRlKCkuZ2V0SG91cnMoKX1gIDogbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSA8IDEwID8gYDAke25ldyBEYXRlKCkuZ2V0TWludXRlcygpfWAgOiBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKTtcbiAgICB0aGlzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIHRoaXMuZGF0ZS52YWx1ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy50aW1lLnZhbHVlID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIHRoaXMuY29sb3JCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnO1xuICB9XG5cbiAgc2F2ZVRhc2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkYXRlOiB0aGlzLmRhdGUudmFsdWUsXG4gICAgICB0aW1lOiB0aGlzLnRpbWUudmFsdWUsXG4gICAgICBpbXBvcnRhbmNlOiB0aGlzLmNvbG9yQm94LnN0eWxlLmJhY2tncm91bmRDb2xvcixcbiAgICB9O1xuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKTtcbiAgICAgIGFyci5wdXNoKGRhdGEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkoYXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkoW2RhdGFdKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50cygpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2NyZWF0ZU5ld1Rhc2sgY3JlYXRlTmV3VGFzay0tY2xvc2UnXG4gICAgICAgICAgfHwgdGhpcy5jcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2NyZWF0ZU5ld1Rhc2snKSB7XG4gICAgICAgIHRoaXMub3BlbkJveCh0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZUJveCh0aGlzLmNyZWF0ZU5ld1Rhc2tDb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVUYXNrKCk7XG4gICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICB0aGlzLmNsb3NlQm94KCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbk1lbnUge1xuICBjb25zdHJ1Y3RvcihjcmVhdGVOZXdUYXNrQ29sb3JzQm94LFxuICAgICAgY3JlYXRlTmV3VGFza0NvbG9ycywgZm9jdXNFbGVtQm9yZGVyLCB1bmZvY3VzRWxlbUJvcmRlcikge1xuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbG9yc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NyZWF0ZU5ld1Rhc2tDb2xvcnNCb3h9YCk7XG4gICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3JlYXRlTmV3VGFza0NvbG9yc31gKTtcbiAgICB0aGlzLmZvY3VzRWxlbUJvcmRlciA9IGZvY3VzRWxlbUJvcmRlcjtcbiAgICB0aGlzLnVuZm9jdXNFbGVtQm9yZGVyID0gdW5mb2N1c0VsZW1Cb3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZUV2ZW50Rm9yU3dpdGNoTWVudSgpIHtcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb2xvcnNCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jcmVhdGVOZXdUYXNrQ29sb3JzKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jcmVhdGVOZXdUYXNrQ29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb2xvcnNCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6aG92ZXInKSkuaW5jbHVkZXModGhpcy5jcmVhdGVOZXdUYXNrQ29sb3JzKSkge1xuICAgICAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb2xvcnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbG9ycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICB0aGlzLmNyZWF0ZU5ld1Rhc2tDb2xvcnNCb3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZS50YXJnZXQpLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3JlYXRlTmV3VGFza0NvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9tb2R1bGVDcmVhdGVOZXdUYXNrJztcbmltcG9ydCAnLi9tb2R1bGVTZWxlY3Rpb25NZW51JztcbmltcG9ydCAnLi9jb21iaW5hdGlvbk1vZHVsZXMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9