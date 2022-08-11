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


const createNewTaskContainer = document.querySelector('.createNewTask');
const createNewTaskBtn = document.querySelector('.header__createNewTaskBtn');
const createNewTaskColorsBox = document.querySelector('.createNewTask__colorsBox');
const createNewTaskColors = document.querySelector('.createNewTask__colors');

createNewTaskBtn.addEventListener('click', () => {
  if (createNewTaskContainer.className === 'createNewTask createNewTask--close'
      || createNewTaskContainer.className === 'createNewTask') {
    createNewTaskBtn.style.borderBottom = '0.2vw solid #282828';
    createNewTaskContainer.className = 'createNewTask createNewTask--open';
  } else {
    createNewTaskContainer.className = 'createNewTask createNewTask--close';
    setTimeout(() => {
      createNewTaskBtn.style.border = '0.2vw solid #F4F4F4';
    }, 300);
  }
});

createNewTaskColorsBox.addEventListener('click', () => {
  if (window.getComputedStyle(createNewTaskColors).display === 'none') {
    createNewTaskColors.style.display = 'block';
  } else {
    createNewTaskColors.style.display = 'none';
  }
});

createNewTaskColors.addEventListener('click', (e) => {
  createNewTaskColorsBox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor;
  createNewTaskColors.style.display = 'none';
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJztcblxuY29uc3QgY3JlYXRlTmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrJyk7XG5jb25zdCBjcmVhdGVOZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY3JlYXRlTmV3VGFza0J0bicpO1xuY29uc3QgY3JlYXRlTmV3VGFza0NvbG9yc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVOZXdUYXNrX19jb2xvcnNCb3gnKTtcbmNvbnN0IGNyZWF0ZU5ld1Rhc2tDb2xvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTmV3VGFza19fY29sb3JzJyk7XG5cbmNyZWF0ZU5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChjcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2NyZWF0ZU5ld1Rhc2sgY3JlYXRlTmV3VGFzay0tY2xvc2UnXG4gICAgICB8fCBjcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ2NyZWF0ZU5ld1Rhc2snKSB7XG4gICAgY3JlYXRlTmV3VGFza0J0bi5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMC4ydncgc29saWQgIzI4MjgyOCc7XG4gICAgY3JlYXRlTmV3VGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY3JlYXRlTmV3VGFzayBjcmVhdGVOZXdUYXNrLS1vcGVuJztcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVOZXdUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjcmVhdGVOZXdUYXNrIGNyZWF0ZU5ld1Rhc2stLWNsb3NlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZU5ld1Rhc2tCdG4uc3R5bGUuYm9yZGVyID0gJzAuMnZ3IHNvbGlkICNGNEY0RjQnO1xuICAgIH0sIDMwMCk7XG4gIH1cbn0pO1xuXG5jcmVhdGVOZXdUYXNrQ29sb3JzQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoY3JlYXRlTmV3VGFza0NvbG9ycykuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgY3JlYXRlTmV3VGFza0NvbG9ycy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVOZXdUYXNrQ29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0pO1xuXG5jcmVhdGVOZXdUYXNrQ29sb3JzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY3JlYXRlTmV3VGFza0NvbG9yc0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLnRhcmdldCkuYmFja2dyb3VuZENvbG9yO1xuICBjcmVhdGVOZXdUYXNrQ29sb3JzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==