/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/finish/finish.scss":
/*!*******************************************!*\
  !*** ./src/components/finish/finish.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/finish/finish.scss?");

/***/ }),

/***/ "./src/components/game/board/board.scss":
/*!**********************************************!*\
  !*** ./src/components/game/board/board.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/board/board.scss?");

/***/ }),

/***/ "./src/components/game/header/header.scss":
/*!************************************************!*\
  !*** ./src/components/game/header/header.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/header/header.scss?");

/***/ }),

/***/ "./src/components/index.scss":
/*!***********************************!*\
  !*** ./src/components/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/index.scss?");

/***/ }),

/***/ "./src/components/menu/menu.scss":
/*!***************************************!*\
  !*** ./src/components/menu/menu.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/menu/menu.scss?");

/***/ }),

/***/ "./src/components/rules/rules.scss":
/*!*****************************************!*\
  !*** ./src/components/rules/rules.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/rules/rules.scss?");

/***/ }),

/***/ "./src/components/savedGame/savedGame.scss":
/*!*************************************************!*\
  !*** ./src/components/savedGame/savedGame.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/savedGame/savedGame.scss?");

/***/ }),

/***/ "./src/components/score/score.scss":
/*!*****************************************!*\
  !*** ./src/components/score/score.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/score/score.scss?");

/***/ }),

/***/ "./src/components/settings/settings.scss":
/*!***********************************************!*\
  !*** ./src/components/settings/settings.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/settings/settings.scss?");

/***/ }),

/***/ "./src/components/DOMelements/createDOMelements.js":
/*!*********************************************************!*\
  !*** ./src/components/DOMelements/createDOMelements.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateDomElement)\n/* harmony export */ });\nclass CreateDomElement {\r\n  tagTypes = {\r\n    p: 'innerHTML',\r\n    span: 'textContent',\r\n    img: 'src',\r\n    button: 'textContent',\r\n  }\r\n\r\n  createItem(item) {\r\n    let tag = document.createElement(item.tag);\r\n\r\n    for (let key in item.attributes) {\r\n      tag.setAttribute(key, item.attributes[key]);\r\n    }\r\n\r\n    if(Object.keys(this.itemsData).includes(tag.classList[0])) {\r\n      tag[this.tagTypes[item.tag]] = this.itemsData[tag.classList[0]];\r\n    }\r\n\r\n    return tag;\r\n  }\r\n\r\n  createElements(repeat) {\r\n    let HTMLelements = [];\r\n    let repeatableItems = [];\r\n\r\n    this.items.forEach((element, i) => {\r\n      const item = this.createItem(element);\r\n\r\n      if (element.repeat) repeatableItems.push(i);\r\n\r\n      if (element.parent !== undefined) HTMLelements[element.parent].append(item);\r\n    \r\n      HTMLelements.push(item);\r\n      \r\n    })\r\n\r\n    repeatableItems.forEach((itemIndex) => {\r\n      for (let i = 0; i < repeat**2 - 1; i++) {\r\n        const item = HTMLelements[itemIndex].cloneNode(true);\r\n        HTMLelements[itemIndex].parentNode.append(item);\r\n      }\r\n    })\r\n\r\n    return HTMLelements[0];\r\n  }\r\n\r\n  addToDOM(data, parent, repeat) {\r\n    this.items = data.items;\r\n    this.itemsData = data.itemsData;\r\n    this.parent = document.querySelector(parent);\r\n\r\n    const element = this.createElements(repeat);\r\n    this.parent.append(element);\r\n    return element;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/DOMelements/createDOMelements.js?");

/***/ }),

/***/ "./src/components/data/container.data.js":
/*!***********************************************!*\
  !*** ./src/components/data/container.data.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData =  {};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'main',\r\n    attributes: {\r\n      class: 'main',\r\n    },\r\n  },\r\n  {\r\n    tag: 'section',\r\n    attributes: {\r\n      class: 'container',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/container.data.js?");

/***/ }),

/***/ "./src/components/data/finish.data.js":
/*!********************************************!*\
  !*** ./src/components/data/finish.data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  finish__newGame: 'New game',\r\n  finish__close: 'Close',\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'finish',\r\n    },\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'finish__congratulation',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'finish__btnsContainer',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'finish__newGame btnAnimated',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'finish__close btnAnimated',\r\n    },\r\n    parent: 2,\r\n  },\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/finish.data.js?");

/***/ }),

/***/ "./src/components/data/game.data.js":
/*!******************************************!*\
  !*** ./src/components/data/game.data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = { };\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'game',\r\n    },\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'game__chip',\r\n    },\r\n    parent: 0,\r\n    repeat: true,\r\n  },\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/game.data.js?");

/***/ }),

/***/ "./src/components/data/header.data.js":
/*!********************************************!*\
  !*** ./src/components/data/header.data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  header__autoSolve: 'Auto solve',\r\n  header__time: 'Time <span class=\"header__timer\"></span>',\r\n  header__steps: 'Steps <span class=\"header__stepsCount\"></span>',\r\n  header__pause: 'Pause game'\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'header',\r\n    attributes: {\r\n      class: 'header',\r\n    },\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'header__autoSolve btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'header__time',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'header__steps',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'header__pause btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/header.data.js?");

/***/ }),

/***/ "./src/components/data/menu.data.js":
/*!******************************************!*\
  !*** ./src/components/data/menu.data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  menu__btnResume: 'Resume game',\r\n  menu__btnStart: 'New game',\r\n  menu__btnSavedGames: 'Saved games',\r\n  menu__btnScore: 'Best scores',\r\n  menu__btnRules: 'Rules',\r\n  menu__btnSettings: 'Settings',\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'aside',\r\n    attributes: {\r\n      class: 'menu',\r\n    },\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnSave btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnResume btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnStart btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnSavedGames btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnScore btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnRules btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'menu__btnSettings btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/menu.data.js?");

/***/ }),

/***/ "./src/components/data/rules.data.js":
/*!*******************************************!*\
  !*** ./src/components/data/rules.data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  rules__title: 'Rules of Gem Puzzle',\r\n  rules__description: 'The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space.',\r\n  rules__description1: 'You can save your game and load it later. Or you can just use pause button. Also you can choose game field size of color in Settings',\r\n  rules__descriptionPs: 'PS. Auto Solve working only at 3x3',\r\n  rules__close: 'Close'\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'rules',\r\n    },\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'rules__title',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'rules__descriptionBox',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'rules__description',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'rules__description1',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'rules__descriptionPs',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'rules__close btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/rules.data.js?");

/***/ }),

/***/ "./src/components/data/saved/save.data.js":
/*!************************************************!*\
  !*** ./src/components/data/saved/save.data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  saved__saveLoad: 'Load Game',\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'saved__save',\r\n    },\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__saveSize',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__saveStep',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__saveTime',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'saved__saveLoad btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/saved/save.data.js?");

/***/ }),

/***/ "./src/components/data/saved/savedGame.data.js":
/*!*****************************************************!*\
  !*** ./src/components/data/saved/savedGame.data.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  saved__title: 'Saved Games',\r\n  saved__tableSize: 'Size',\r\n  saved__tableStep: 'Step',\r\n  saved__tableTime: 'Time',\r\n  saved__tableLoad: 'Load',\r\n  saved__btnClose: 'Close',\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'saved',\r\n    },\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__title',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'saved__tableHeader',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'saved__table',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__tableSize',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__tableStep',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__tableTime',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'saved__tableLoad',\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'saved__btnClose btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/saved/savedGame.data.js?");

/***/ }),

/***/ "./src/components/data/scores/bestScores.data.js":
/*!*******************************************************!*\
  !*** ./src/components/data/scores/bestScores.data.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  scores__title: 'Best Scores',\r\n  scores__tableNumber: '№',\r\n  scores__tableSize: 'Name',\r\n  scores__tableStep: 'Step',\r\n  scores__tableTime: 'Time',\r\n  scores__btnClose: 'Close',\r\n  scores__btnSize3: '3x3',\r\n  scores__btnSize4: '4x4',\r\n  scores__btnSize5: '5x5',\r\n  scores__btnSize6: '6x6',\r\n  scores__btnSize7: '7x7',\r\n  scores__btnSize8: '8x8',\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'scores',\r\n    },\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__title',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'scores__btnContainer',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnSize3 scores__btnSize btnAnimated',\r\n      \"data-size\": 3,\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnSize4 scores__btnSize btnAnimated',\r\n      \"data-size\": 4,\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnSize5 scores__btnSize btnAnimated',\r\n      \"data-size\": 5,\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnSize6 scores__btnSize btnAnimated',\r\n      \"data-size\": 6,\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnSize7 scores__btnSize btnAnimated',\r\n      \"data-size\": 7,\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnSize8 scores__btnSize btnAnimated',\r\n      \"data-size\": 8,\r\n    },\r\n    parent: 2,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'scores__tableHeader',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'scores__table',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__tableNumber',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__tableSize',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__tableStep',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__tableTime',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'scores__btnClose btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/scores/bestScores.data.js?");

/***/ }),

/***/ "./src/components/data/scores/score.data.js":
/*!**************************************************!*\
  !*** ./src/components/data/scores/score.data.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'scores__score',\r\n    },\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__scoreNumber',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__scoreName',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__scoreStep',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'scores__scoreTime',\r\n    },\r\n    parent: 0,\r\n  },\r\n]\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/scores/score.data.js?");

/***/ }),

/***/ "./src/components/data/settings.data.js":
/*!**********************************************!*\
  !*** ./src/components/data/settings.data.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"itemsData\": () => (/* binding */ itemsData)\n/* harmony export */ });\nconst itemsData = {\r\n  settings__title: 'Hello, ',\r\n  settings__sound: 'Sound',\r\n  settings__chipTypeTitle: 'Chip Type:',\r\n  settings__sizeTitle: 'Size:',\r\n  settings__size3: '3 x 3',\r\n  settings__size4: '4 x 4',\r\n  settings__size5: '5 x 5',\r\n  settings__size6: '6 x 6',\r\n  settings__size7: '7 x 7',\r\n  settings__size8: '8 x 8',\r\n  settings__btnSave: 'Save',\r\n};\r\n\r\nconst items = [\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings',\r\n    },\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__titleContainer',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'span',\r\n    attributes: {\r\n      class: 'settings__title',\r\n    },\r\n    parent: 1,\r\n  },\r\n  {\r\n    tag: 'span',\r\n    attributes: {\r\n      class: 'settings__name',\r\n      contenteditable: 'true',\r\n    },\r\n    parent: 1,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__soundContainer',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'settings__sound',\r\n    },\r\n    parent: 4,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__btnSound',\r\n    },\r\n    parent: 4,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__chipTypeContainer',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'settings__chipTypeTitle',\r\n    },\r\n    parent: 7,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__types',\r\n    },\r\n    parent: 7,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__chipType btnAnimated',\r\n      'data-type': 'type1',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__chipType btnAnimated',\r\n      'data-type': 'type2',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__chipType btnAnimated',\r\n      'data-type': 'typeImage',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__chipType btnAnimated',\r\n      'data-type': 'typeNone',\r\n    },\r\n    parent: 9,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__sizeContainer',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'p',\r\n    attributes: {\r\n      class: 'settings__sizeTitle',\r\n    },\r\n    parent: 14,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__sizes',\r\n    },\r\n    parent: 14,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__size3 settings__size btnAnimated',\r\n      'data-defaultSize': 3,\r\n    },\r\n    parent: 16,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__size4 settings__size btnAnimated',\r\n      'data-defaultSize': 4,\r\n    },\r\n    parent: 16,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__size5 settings__size btnAnimated',\r\n      'data-defaultSize': 5,\r\n    },\r\n    parent: 16,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__size6 settings__size btnAnimated',\r\n      'data-defaultSize': 6,\r\n    },\r\n    parent: 16,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__size7 settings__size btnAnimated',\r\n      'data-defaultSize': 7,\r\n    },\r\n    parent: 16,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__size8 settings__size btnAnimated',\r\n      'data-defaultSize': 8,\r\n    },\r\n    parent: 16,\r\n  },\r\n  {\r\n    tag: 'button',\r\n    attributes: {\r\n      class: 'settings__btnSave btnAnimated',\r\n    },\r\n    parent: 0,\r\n  },\r\n  {\r\n    tag: 'input',\r\n    attributes: {\r\n      class: 'settings__soundCheckBox',\r\n      type: 'checkbox',\r\n    },\r\n    parent: 6,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__soundKnobs',\r\n    },\r\n    parent: 6,\r\n  },\r\n  {\r\n    tag: 'div',\r\n    attributes: {\r\n      class: 'settings__soundLayer',\r\n    },\r\n    parent: 6,\r\n  },\r\n]\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/data/settings.data.js?");

/***/ }),

/***/ "./src/components/finish/finish.js":
/*!*****************************************!*\
  !*** ./src/components/finish/finish.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Finish)\n/* harmony export */ });\n/* harmony import */ var _finish_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finish.scss */ \"./src/components/finish/finish.scss\");\n/* harmony import */ var _data_finish_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/finish.data */ \"./src/components/data/finish.data.js\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu */ \"./src/components/menu/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Finish {\r\n  constructor(game) {\r\n    this.game = game;\r\n  }\r\n\r\n  setCongratulation() {\r\n    const minutes = `${this.game.time.minutes}`.padStart(2, '0');\r\n    const seconds = `${this.game.time.seconds}`.padStart(2, '0');\r\n\r\n    document.querySelector('.finish__congratulation')\r\n      .textContent = `Hooray! You solved the puzzle in ${minutes} : ${seconds} and ${this.game.step} moves!`;\r\n  }\r\n  \r\n  saveScore() {\r\n    if (!localStorage.gameScores) localStorage.gameScores = '{}';\r\n\r\n    const score = JSON.parse(localStorage.gameScores)\r\n\r\n    if (!score[this.game.size]) score[this.game.size] = [];\r\n    \r\n    score[this.game.size].push({\r\n      name: this.game.name,\r\n      step: this.game.step,\r\n      time: this.game.time,\r\n    });\r\n\r\n    score[this.game.size].sort((prev, next) => {\r\n      if (prev.step > next.step) return 1;\r\n      if (prev.step === next.step) {\r\n        if (prev.time.seconds > next.time.seconds) return 1;\r\n        if (prev.time.seconds === next.time.seconds) return 0;\r\n        if (prev.time.seconds < next.time.seconds) return -1;\r\n      }\r\n      if (prev.step < next.step) return -1;\r\n    }).splice(10);\r\n\r\n    localStorage.gameScores = JSON.stringify(score);\r\n  };\r\n\r\n  clickClose() {\r\n    this.closeFinish();\r\n    this.menu.openMenu();\r\n  }\r\n\r\n  clickNewGame() {\r\n    this.closeFinish();\r\n    this.menu.startNewGame();\r\n  }\r\n\r\n  closeFinish() {\r\n    document.querySelector('.finish').remove();\r\n  }\r\n\r\n  setEvents() {\r\n    document.querySelector('.finish__newGame').addEventListener('click', () => this.clickNewGame());\r\n    document.querySelector('.finish__close').addEventListener('click', () => this.clickClose());\r\n  }\r\n\r\n  setBackground() {\r\n    document.querySelector('.finish').style.background = this.game.board.bgImage;\r\n  }\r\n\r\n  setWindow() {\r\n    new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().addToDOM(_data_finish_data__WEBPACK_IMPORTED_MODULE_1__, '.container');\r\n    this.setCongratulation()\r\n    if (this.game.type === 'typeImage') this.setBackground(); \r\n    this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n    this.setEvents();\r\n    this.saveScore();\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/finish/finish.js?");

/***/ }),

/***/ "./src/components/game/autoSolve.js":
/*!******************************************!*\
  !*** ./src/components/game/autoSolve.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutoSolve)\n/* harmony export */ });\nclass AutoSolve {\r\n  constructor(game) {\r\n    this.goalX = [];\r\n    this.goalY = [];\r\n    this.resultArr = [];\r\n    this.dx = [0, -1, 1, 0];\r\n    this.dy = [-1, 0, 0, 1];\r\n    this.revers = [0, 2, 1, 3];\r\n    this.game = game;\r\n  }\r\n\r\n  createBoardGoal() {\r\n    this.boardGoal = [];\r\n    let count = 1;\r\n\r\n    for (let i = 0; i < this.game.size; i++) {\r\n      for (let j = 0; j < this.game.size; j++) {\r\n        if (!this.boardGoal[i]) this.boardGoal[i] = [];\r\n        this.boardGoal[i][j] = count !== this.game.size**2 ? count : 0\r\n        count++;\r\n      }\r\n    }\r\n  }\r\n\r\n  createBoard() {\r\n    this.board = [];\r\n\r\n    const arrChips = Array.from(document.querySelectorAll('[data-id]'));\r\n    let count = 0;\r\n\r\n    for (let i = 0; i < this.game.size; i++) {\r\n      for (let j = 0; j < this.game.size; j++) {\r\n        if (!this.board[i]) this.board[i] = [];\r\n\r\n        this.board[i][j] = +arrChips[count].dataset.id;\r\n        count++;\r\n      }\r\n    }\r\n  }\r\n\r\n  checkChipPos() {\r\n    for (let i = 0; i < this.game.size**2 - 1; i++) {\r\n      this.goalX[i + 1] = i % this.game.size;\r\n      this.goalY[i + 1] = Math.floor(i / this.game.size);\r\n    }\r\n    this.goalX[0] = this.game.size;\r\n    this.goalY[0] = this.game.size;\r\n  }\r\n\r\n  estimate() {\r\n    let value = 0;\r\n    let manhattan = 0;\r\n\r\n    for (let i = 0; i < this.game.size; i++) {\r\n      for (let j = 0; j < this.game.size; j++) {\r\n        value = this.board[i][j];\r\n        if (value > 0 && value !== this.boardGoal[i][j]) {\r\n          manhattan += Math.abs(i - this.goalY[value]) + Math.abs(j - this.goalX[value]);\r\n        }\r\n      }\r\n    }\r\n\r\n    return manhattan;\r\n  }\r\n\r\n  swap(y1, x1, y2, x2) {\r\n    const value = this.board[y1][x1];\r\n    this.board[y1][x1] = this.board[y2][x2];\r\n    this.board[y2][x2] = value;\r\n  }\r\n\r\n  search(g, previousMove, x0, y0) {\r\n    const h = this.estimate();\r\n    if (h === 0) {\r\n      return true;\r\n    }\r\n\r\n    const f = g + h;\r\n    if (f > this.deepness) {\r\n      if (this.minPrevIteration > f) {\r\n        this.minPrevIteration = f;\r\n      }\r\n      return false;\r\n    }\r\n\r\n    let newx = 0;\r\n    let newy = 0;\r\n    for (let i = 0; i < 4; i += 1) {\r\n      if (this.revers[i] !== previousMove) {\r\n        newx = x0 + this.dx[i];\r\n        newy = y0 + this.dy[i];\r\n        if (newy < this.game.size && newy >= 0 && newx < this.game.size && newx >= 0) {\r\n          this.swap(y0, x0, newy, newx);\r\n          const res = this.search(g + 1, i, newx, newy);\r\n          this.swap(y0, x0, newy, newx);\r\n          if (res) {\r\n            this.resultArr.unshift(i);\r\n            return true;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  idaStar() {\r\n    let result = false;\r\n    this.deepness = this.estimate();\r\n\r\n    while (this.deepness <= 55) {\r\n      this.minPrevIteration = 10000;\r\n\r\n      for (let i = 0; i < this.game.size; i++) {\r\n        for (let j = 0; j < this.game.size; j++) {\r\n          if (this.board[i][j] === 0) {\r\n            this.x0 = j;\r\n            this.y0 = i;\r\n          }\r\n        }\r\n      }\r\n      \r\n      result = this.search(0, -1, this.x0, this.y0);\r\n      this.deepness = this.minPrevIteration;\r\n      if (result) break;\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  checkResult() {\r\n    if (this.idaStar()) {\r\n      let i = 0;\r\n      const inteval = setInterval(() => {\r\n        const emptyChip = document.querySelector('[data-id=\"0\"]');\r\n        const neighbor = this.getNeighbor(emptyChip);\r\n        const currentChip = Array.from(document.querySelectorAll('.game__chip'))[neighbor[this.resultArr[i]]];\r\n        this.game.gameEvents.changeChip(currentChip);\r\n        i += 1;\r\n        if (i === this.resultArr.length) {\r\n          clearInterval(inteval);\r\n        }\r\n      }, 700);\r\n    }\r\n  }\r\n\r\n  getNeighbor(chip) {\r\n    const indexOfChip = Array.from(document.querySelectorAll('.game__chip')).indexOf(chip);\r\n    return [indexOfChip - this.game.size, indexOfChip - 1,\r\n      indexOfChip + 1, indexOfChip + this.game.size]\r\n  }\r\n\r\n  startSolve() {\r\n    this.createBoard();\r\n    this.createBoardGoal();\r\n    this.checkChipPos();\r\n    this.checkResult();\r\n  }\r\n}\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/autoSolve.js?");

/***/ }),

/***/ "./src/components/game/board/board.js":
/*!********************************************!*\
  !*** ./src/components/game/board/board.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _data_game_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/game.data */ \"./src/components/data/game.data.js\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _board_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.scss */ \"./src/components/game/board/board.scss\");\n\r\n\r\n\r\n\r\nclass Board {\r\n  constructor(game) {\r\n    this.game = game;\r\n  }\r\n\r\n  isSolvable(arr) {\r\n    const filterArr = arr.filter(item => item !== 0);\r\n    const clearChipPos = this.game.size + 1 - Math.ceil((arr.indexOf(0) + 1) / this.game.size);\r\n    let count = 0;\r\n    for (let i = 0; i < filterArr.length - 1; i++) {\r\n      for (let j = i + 1; j < filterArr.length; j++) {\r\n        if (filterArr[i] > filterArr[j]) count++;\r\n      }\r\n    }\r\n    if (this.game.size % 2 === 0) {\r\n      return (clearChipPos % 2 === 0 && count % 2 !== 0) || (clearChipPos % 2 !== 0 && count % 2 === 0);\r\n    }\r\n    \r\n    return count % 2 === 0;\r\n  }\r\n\r\n  getImgPosition() {\r\n    this.arrImgPositions = [];\r\n    for (let i = 0; i < this.game.size; i++) {\r\n      for (let j = 0; j < this.game.size; j++) {\r\n        this.arrImgPositions.push(`${99 * (j / (this.game.size - 1))}% ${99 * (i / (this.game.size - 1))}%`);\r\n      }\r\n    }\r\n  }\r\n\r\n  getNumbers() {\r\n    let numbers = [];\r\n    for (let i = 0; i < this.game.size**2; i += 1) {\r\n      numbers[i] = i;\r\n    }\r\n\r\n    numbers.sort(() => 0.5 - Math.random());\r\n\r\n    if (this.isGoal(numbers)) this.getNumbers();\r\n\r\n    return this.isSolvable(numbers) ? numbers : this.getNumbers();\r\n  }\r\n\r\n  isGoal(arr) {\r\n    let count = 0;\r\n\r\n    for (let i = 0; i < arr.length - 1; i++) {\r\n      if (arr[i] === i + 1) count++;\r\n    }\r\n\r\n    return count === arr.length - 1;\r\n  }\r\n\r\n  setNumbers(numbers, bgImage) {\r\n    const planks = document.querySelectorAll('.game__chip')\r\n    this.bgImage = bgImage || `url(./src/assets/pictures/${Math.floor(Math.random() * 150)}.jpg)`;\r\n\r\n    planks.forEach((plank, i) => {\r\n      plank.setAttribute('data-id', numbers[i]);\r\n      plank.textContent = numbers[i] ? numbers[i] : '';\r\n      \r\n      if (!numbers[i]) {\r\n        plank.classList.toggle('game__chip-clear');\r\n        return;\r\n      }\r\n\r\n      plank.setAttribute('draggable', true);\r\n      plank.classList.toggle(`chip-${this.game.type}`);\r\n\r\n      if (this.game.type === 'typeImage') {\r\n        this.getImgPosition();\r\n        plank.style.background = this.bgImage;\r\n        plank.style.backgroundPosition = this.arrImgPositions[numbers[i] - 1];\r\n      }\r\n    })\r\n  }\r\n\r\n  createBoard(chipArr, bgImage) {\r\n    new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().addToDOM(_data_game_data__WEBPACK_IMPORTED_MODULE_0__, '.container', this.game.size);\r\n    document.querySelector('.game').style.gridTemplateColumns = `repeat(${this.game.size}, 1fr)`;\r\n\r\n    const numbersArr = this.getNumbers();\r\n    this.setNumbers(chipArr || numbersArr, bgImage);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/board/board.js?");

/***/ }),

/***/ "./src/components/game/game.js":
/*!*************************************!*\
  !*** ./src/components/game/game.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _autoSolve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoSolve */ \"./src/components/game/autoSolve.js\");\n/* harmony import */ var _board_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board */ \"./src/components/game/board/board.js\");\n/* harmony import */ var _finish_finish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../finish/finish */ \"./src/components/finish/finish.js\");\n/* harmony import */ var _gameEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameEvents */ \"./src/components/game/gameEvents.js\");\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header */ \"./src/components/game/header/header.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n  setNewGame(size, step, time, chipsArr, type, sound, bgImage) {\r\n    this.storage = JSON.parse(localStorage.settings);\r\n\r\n    this.setDefault(size, step, time, type, sound);\r\n    \r\n    this.board = new _board_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n    this.header = new _header_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\r\n    this.autoSolve = new _autoSolve__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\r\n    this.gameEvents = new _gameEvents__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\r\n    this.finish = new _finish_finish__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\r\n    \r\n    this.header.setEvents();\r\n    this.board.createBoard(chipsArr, bgImage);\r\n    this.gameEvents.setEvents();\r\n  }\r\n\r\n  setDefault(size = +this.storage.size, \r\n    step = 0, \r\n    time = { minutes: 0, seconds: 0 }, \r\n    type = this.storage.chipType, \r\n    sound = this.storage.sound, \r\n  ) {\r\n    this.step = step;\r\n    this.time = time;\r\n    this.size = size;\r\n    this.type = type;\r\n    this.sound = sound;\r\n    this.name = this.storage.name;\r\n  }\r\n}\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/game.js?");

/***/ }),

/***/ "./src/components/game/gameEvents.js":
/*!*******************************************!*\
  !*** ./src/components/game/gameEvents.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameEvents)\n/* harmony export */ });\nclass GameEvents {\r\n  constructor(game) {\r\n    this.game = game;\r\n  }\r\n\r\n  isEnd() {\r\n    let resultArr = [];\r\n    let result = true;\r\n\r\n    Array.from(document.querySelectorAll('.game__chip')).forEach(chip => {\r\n      if (!chip.classList.contains('game__chip-animated')) resultArr.push(+chip.dataset.id);\r\n    })\r\n\r\n    for (let i = 0; i < resultArr.length - 1; i++) {\r\n      if (resultArr[i] !== i + 1) return false;\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  checkPosition(chip) {\r\n    const clearChip = document.querySelector('.game__chip-clear');\r\n    const allChips = Array.from(document.querySelectorAll('.game__chip'));\r\n\r\n    const chipPos = allChips.indexOf(chip);\r\n    const clearChipPos = allChips.indexOf(clearChip)\r\n\r\n    return chip ? [chipPos, clearChipPos] : clearChipPos;\r\n  }\r\n\r\n  isNeighbors(chip, type) {\r\n    if (!chip.classList.contains('game__chip') || chip.dataset.id === '0') return false;\r\n    \r\n    const [indexOfChip, indexOfClearChip] = this.checkPosition(chip);\r\n    const neighbors = {\r\n      left: indexOfChip % this.game.size ? indexOfChip - 1 : '',\r\n      right: (indexOfChip + 1) % this.game.size ? indexOfChip + 1 : '',\r\n      top: indexOfChip - this.game.size,\r\n      bottom: indexOfChip + this.game.size,\r\n    }\r\n\r\n    if (!Object.values(neighbors).includes(indexOfClearChip)) return false;\r\n\r\n    return type ? Object.values(neighbors) : true;\r\n  }\r\n\r\n  playSound() {\r\n    let audio = new Audio('./src/assets/audio/3.mp3');\r\n    audio.play();\r\n  }\r\n\r\n  setAnimateChipChange(chip) {\r\n    const newChip = chip.cloneNode(true);\r\n\r\n    newChip.classList.toggle('game__chip-animated');\r\n    newChip.style.top = `${chip.offsetTop}px`;\r\n    newChip.style.left = `${chip.offsetLeft}px`;\r\n\r\n    document.querySelector('.container').append(newChip);\r\n\r\n    return newChip;\r\n  }\r\n\r\n  removeAnimateChipChange(newChip, chip) {\r\n    const chipStyles = getComputedStyle(chip);\r\n    newChip.style.width = chipStyles.width;\r\n    newChip.style.height = chipStyles.height;\r\n    newChip.style.top = `${chip.offsetTop}px`;\r\n    newChip.style.left = `${chip.offsetLeft}px`;\r\n\r\n    setTimeout(() => {\r\n      chip.style.opacity = 1;\r\n      newChip.remove();\r\n    }, 500);\r\n  }\r\n\r\n  clickOnChip(e) {\r\n    const chip = e.target;\r\n    \r\n    if (!this.isNeighbors(chip)) return;\r\n\r\n    this.changeChip(chip);\r\n  }\r\n\r\n  changeChip(chip, type) {\r\n    let newChip;\r\n    if (!type) newChip = this.setAnimateChipChange(chip);\r\n    const clearChip = document.querySelector('.game__chip-clear');\r\n\r\n    clearChip.classList.toggle('game__chip-clear');\r\n    clearChip.classList.toggle(`chip-${this.game.type}`);\r\n    clearChip.style.background= getComputedStyle(chip).background;\r\n    clearChip.style.backgroundPosition = getComputedStyle(chip).backgroundPosition\r\n    clearChip.draggable = true;\r\n    clearChip.dataset.id = chip.dataset.id;\r\n    clearChip.textContent = chip.textContent;\r\n\r\n    chip.classList.toggle('game__chip-clear');\r\n    chip.classList.toggle(`chip-${this.game.type}`);\r\n    chip.style.background = 'none';\r\n    chip.draggable = false;\r\n    chip.dataset.id = '0';\r\n    chip.textContent = '';\r\n\r\n    if (!type) {\r\n      clearChip.style.opacity = 0;\r\n      this.removeAnimateChipChange(newChip, clearChip);\r\n    }\r\n\r\n    this.game.header.addStep();\r\n\r\n    if (this.game.sound) this.playSound();\r\n\r\n    if (this.isEnd()) {\r\n      this.game.header.stopTimer();\r\n      this.game.finish.setWindow();\r\n    }\r\n  }\r\n\r\n  setEvents() {\r\n    this.gameContainer = document.querySelector('.game');\r\n\r\n    this.gameContainer.addEventListener(\"click\", (e) => this.clickOnChip(e));\r\n    this.gameContainer.addEventListener('dragstart', (e) => {\r\n      if (this.isNeighbors(e.target)) {\r\n        this.dragTarget = e.target;\r\n      } else {\r\n        e.preventDefault();\r\n      }\r\n    });\r\n\r\n    this.gameContainer.addEventListener('drop', (e) => {\r\n      if (e.target.classList.contains('game__chip-clear')) {\r\n        this.changeChip(this.dragTarget, e.type);\r\n      }\r\n    });\r\n\r\n    this.gameContainer.addEventListener('dragover', (e) => {\r\n      e.preventDefault();\r\n    });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/gameEvents.js?");

/***/ }),

/***/ "./src/components/game/header/header.js":
/*!**********************************************!*\
  !*** ./src/components/game/header/header.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ \"./src/components/game/header/header.scss\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _data_header_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/header.data */ \"./src/components/data/header.data.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../menu/menu */ \"./src/components/menu/menu.js\");\n\r\n\r\n\r\n\r\n\r\nclass Header {\r\n  constructor(game) {\r\n    this.game = game;\r\n  }\r\n\r\n  pauseGame() {\r\n    this.menu.openMenu();\r\n    this.menu.btnResume.show();\r\n    this.stopTimer();\r\n  }\r\n\r\n  \r\n  setStep() {\r\n    document.querySelector('.header__stepsCount').textContent = this.game.step;\r\n  }\r\n\r\n  addStep() {\r\n    document.querySelector('.header__stepsCount').textContent = ++this.game.step;\r\n  }\r\n\r\n  setMinutes() {\r\n    if (this.game.time.seconds === 60) {\r\n      this.game.time.minutes++;\r\n      this.game.time.seconds = 0;\r\n    }\r\n  }\r\n\r\n  setTimer() {\r\n    this.timer = setInterval(() => {\r\n      this.setMinutes(++this.game.time.seconds);\r\n      this.setTime();\r\n    }, 1000);\r\n  }\r\n\r\n  setTime() {\r\n    const minutes = `${this.game.time.minutes}`.padStart(2, '0');\r\n    const seconds = `${this.game.time.seconds}`.padStart(2, '0');\r\n\r\n    document.querySelector('.header__timer').textContent = `${minutes} : ${seconds}`;\r\n  }\r\n\r\n  stopTimer() {\r\n    clearInterval(this.timer);\r\n  }\r\n\r\n  setDisabled(node) {\r\n    document.querySelector(node).disabled = true;\r\n  }\r\n\r\n  startAutoSolve() {\r\n    this.game.autoSolve.startSolve();\r\n    this.setDisabled('.header__pause');\r\n    this.setDisabled('.header__autoSolve');\r\n  }\r\n\r\n  setAuto() {\r\n    if (this.game.size > 3) document.querySelector('.header__autoSolve').disabled = true;\r\n  }\r\n\r\n  setEvents() {\r\n    this.createHeader();\r\n    document.querySelector('.header__pause').addEventListener(\"click\", () => this.pauseGame());\r\n    document.querySelector('.header__autoSolve').addEventListener(\"click\", () => this.startAutoSolve());\r\n  }\r\n\r\n  createHeader() {\r\n    const createHeader = new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n    createHeader.addToDOM(_data_header_data__WEBPACK_IMPORTED_MODULE_2__, '.container');\r\n    this.setAuto();\r\n    this.setStep();\r\n    this.setTime();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/game/header/header.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/components/index.scss\");\n/* harmony import */ var _data_container_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/container.data */ \"./src/components/data/container.data.js\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ \"./src/components/game/game.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu */ \"./src/components/menu/menu.js\");\n/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings */ \"./src/components/settings/settings.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst settings = new _settings_settings__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\nconst createContainer = new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst newGame = new _game_game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nconst menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"](newGame);\r\n\r\nwindow.onload = () => {\r\n  createContainer.addToDOM(_data_container_data__WEBPACK_IMPORTED_MODULE_1__, 'body');\r\n\r\n  settings.setWindow();\r\n  \r\n  newGame.setNewGame();\r\n  menu.setEvents(settings);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/index.js?");

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.scss */ \"./src/components/menu/menu.scss\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _data_menu_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/menu.data */ \"./src/components/data/menu.data.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/game */ \"./src/components/game/game.js\");\n/* harmony import */ var _savedGame_savedGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../savedGame/savedGame */ \"./src/components/savedGame/savedGame.js\");\n/* harmony import */ var _score_score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../score/score */ \"./src/components/score/score.js\");\n/* harmony import */ var _rules_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/rules */ \"./src/components/rules/rules.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Menu {\r\n  constructor(game) {\r\n    this.game = game;\r\n  }\r\n  \r\n  targetEvents = {\r\n    menu__btnResume: () => {\r\n      this.closeMenu();\r\n      this.game.header.setTimer();\r\n    },\r\n    menu__btnStart: () => this.startNewGame(),\r\n    menu__btnSave: () => this.saveGame(),\r\n    menu__btnSavedGames: () => this.savedGame.setWindow(this),\r\n    menu__btnScore: () => this.bestScore.setWindow(this),\r\n    menu__btnRules: () => this.rules.openRules(),\r\n    menu__btnSettings: ()=> {\r\n      this.settings.openSettings();\r\n      this.btnResume.hide();\r\n    }\r\n  }\r\n\r\n  btnResume = {\r\n    hide: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume btnAnimated menu__btnResume-hidden',\r\n    show: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume btnAnimated',\r\n  }\r\n\r\n  closeMenu() {\r\n    document.querySelector('.menu').style.display = 'none';\r\n  }\r\n\r\n  openMenu() {\r\n    document.querySelector('.menu').style.display = 'flex';\r\n  }\r\n\r\n  startNewGame(size, step, time, chipsArr, type, sound, bgImage) {\r\n    this.clearBoard();\r\n    this.game = new _game_game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n    this.game.setNewGame(size, step, time, chipsArr, type, sound, bgImage);\r\n    this.game.header.setTimer();\r\n    this.closeMenu();\r\n  }\r\n\r\n  clearBoard() {\r\n    document.querySelector('.game').remove();\r\n    document.querySelector('.header').remove();\r\n  }\r\n\r\n  saveGame() {\r\n    let chipsArr = Array.from( document.querySelectorAll('.game__chip'));\r\n    chipsArr = chipsArr.map(chip => chip = +chip.dataset.id);\r\n\r\n    if (!localStorage.gameSaves) localStorage.gameSaves = '[]';\r\n\r\n    const save = JSON.parse(localStorage.gameSaves)\r\n    save.push({\r\n      size: this.game.size,\r\n      step: this.game.step,\r\n      time: this.game.time,\r\n      type: this.game.type,\r\n      sound: this.game.sound,\r\n      bgImage: this.game.board.bgImage,\r\n      chipsArr,\r\n    });\r\n  \r\n    localStorage.gameSaves = JSON.stringify(save);\r\n  };\r\n  \r\n  setEvents(settings) {\r\n    this.createMenu();\r\n    this.btnResume.hide();\r\n    this.settings = settings;\r\n\r\n    document.querySelector('.menu').addEventListener(\"click\", (e) => {\r\n      if (this.targetEvents[e.target.classList[0]]) this.targetEvents[e.target.classList[0]]();\r\n    })\r\n  }\r\n\r\n  createMenu() {\r\n    const menu = new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    menu.addToDOM(_data_menu_data__WEBPACK_IMPORTED_MODULE_2__, '.container');\r\n\r\n    this.savedGame = new _savedGame_savedGame__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n    this.bestScore = new _score_score__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\n    this.rules = new _rules_rules__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n    this.rules.setWindow();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/menu/menu.js?");

/***/ }),

/***/ "./src/components/rules/rules.js":
/*!***************************************!*\
  !*** ./src/components/rules/rules.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rules)\n/* harmony export */ });\n/* harmony import */ var _rules_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules.scss */ \"./src/components/rules/rules.scss\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _data_rules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/rules.data */ \"./src/components/data/rules.data.js\");\n\r\n\r\n\r\n\r\nclass Rules {\r\n  closeRules() {\r\n    document.querySelector('.rules').style.display = 'none';\r\n  }\r\n\r\n  openRules() {\r\n    document.querySelector('.rules').style.display = 'flex';\r\n  }\r\n\r\n  setEvents(){\r\n    document.querySelector('.rules__close').addEventListener('click', () => this.closeRules());\r\n  }\r\n\r\n  setWindow() {\r\n    new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().addToDOM(_data_rules_data__WEBPACK_IMPORTED_MODULE_2__, '.container');\r\n    this.setEvents();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/rules/rules.js?");

/***/ }),

/***/ "./src/components/savedGame/savedGame.js":
/*!***********************************************!*\
  !*** ./src/components/savedGame/savedGame.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SavedGame)\n/* harmony export */ });\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _data_saved_savedGame_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/saved/savedGame.data */ \"./src/components/data/saved/savedGame.data.js\");\n/* harmony import */ var _data_saved_save_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/saved/save.data */ \"./src/components/data/saved/save.data.js\");\n/* harmony import */ var _savedGame_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./savedGame.scss */ \"./src/components/savedGame/savedGame.scss\");\n\r\n\r\n\r\n\r\n\r\nclass SavedGame {\r\n  clickClose() {\r\n    document.querySelector('.saved').remove();\r\n  }\r\n\r\n  setEvents() {\r\n    document.querySelector('.saved__btnClose').addEventListener('click', () => this.clickClose());\r\n  }\r\n\r\n  loadSaves() {\r\n    if (!localStorage.gameSaves) return;\r\n\r\n    this.saves = JSON.parse(localStorage.gameSaves);\r\n    this.setSaves();\r\n  }\r\n\r\n  setSaves() {\r\n    this.saves.forEach(item => {\r\n      const save = this.createDOM.addToDOM(_data_saved_save_data__WEBPACK_IMPORTED_MODULE_2__, '.saved__table').childNodes;\r\n      save[0].textContent = item.size;\r\n      save[1].textContent = item.step;\r\n      save[2].textContent = `${item.time.minutes}`.padStart(2, '0') + ' : ' + `${item.time.seconds}`.padStart(2, '0');\r\n      save[3].addEventListener('click', () => {\r\n        this.menu.startNewGame(item.size, item.step, item.time, item.chipsArr, item.type, item.sound, item.bgImage);\r\n        this.clickClose();\r\n      })\r\n    });\r\n  }\r\n\r\n  setWindow(menu) {\r\n    this.createDOM = new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.menu = menu;\r\n    this.createDOM.addToDOM(_data_saved_savedGame_data__WEBPACK_IMPORTED_MODULE_1__, '.container');\r\n    this.setEvents();\r\n    this.loadSaves();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/savedGame/savedGame.js?");

/***/ }),

/***/ "./src/components/score/score.js":
/*!***************************************!*\
  !*** ./src/components/score/score.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BestScore)\n/* harmony export */ });\n/* harmony import */ var _score_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.scss */ \"./src/components/score/score.scss\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _data_scores_bestScores_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/scores/bestScores.data */ \"./src/components/data/scores/bestScores.data.js\");\n/* harmony import */ var _data_scores_score_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/scores/score.data */ \"./src/components/data/scores/score.data.js\");\n\r\n\r\n\r\n\r\n\r\nclass BestScore {\r\n  clickClose() {\r\n    document.querySelector('.scores').remove();\r\n  }\r\n\r\n  changeScoreSize(e) {\r\n    if (e.target.tagName !== 'BUTTON') return;\r\n\r\n    this.changeActiveBtn(e.target);\r\n    this.scoreSize = e.target.dataset.size;\r\n    this.removeScore();\r\n    this.setScores();\r\n  }\r\n\r\n  changeActiveBtn(btn) {\r\n    document.querySelector(`.scores__btnSize.btnAnimated-active`).classList.toggle('btnAnimated-active');\r\n\r\n    btn.classList.toggle('btnAnimated-active');\r\n  }\r\n\r\n  setActiveScore() {\r\n    document.querySelector('.scores__btnSize3').classList.toggle('btnAnimated-active');\r\n  }\r\n\r\n  setEvents() {\r\n    document.querySelector('.scores__btnClose').addEventListener('click', () => this.clickClose());\r\n    document.querySelector('.scores__btnContainer').addEventListener('click', (e) => this.changeScoreSize(e));\r\n  }\r\n\r\n  loadScores() {\r\n    if (!localStorage.gameScores) return;\r\n\r\n    this.scores = JSON.parse(localStorage.gameScores);\r\n    this.setScores();\r\n  }\r\n\r\n  removeScore() {\r\n    document.querySelectorAll('.scores__score').forEach(item => item.remove());\r\n  }\r\n\r\n  setScores() {\r\n    this.scores[this.scoreSize]?.forEach((item, i) => {\r\n      const score = this.createDOM.addToDOM(_data_scores_score_data__WEBPACK_IMPORTED_MODULE_3__, '.scores__table').childNodes;\r\n      score[0].textContent = i + 1;\r\n      score[1].textContent = item.name;\r\n      score[2].textContent = item.step;\r\n      score[3].textContent = `${item.time.minutes}`.padStart(2, '0') + ' : ' + `${item.time.seconds}`.padStart(2, '0');\r\n    });\r\n  }\r\n\r\n  setWindow(menu) {\r\n    this.scoreSize = 3;\r\n    this.createDOM = new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.menu = menu;\r\n    this.createDOM.addToDOM(_data_scores_bestScores_data__WEBPACK_IMPORTED_MODULE_2__, '.container');\r\n    this.setEvents();\r\n    this.loadScores();\r\n    this.setActiveScore();\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/score/score.js?");

/***/ }),

/***/ "./src/components/settings/settings.js":
/*!*********************************************!*\
  !*** ./src/components/settings/settings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var _settings_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.scss */ \"./src/components/settings/settings.scss\");\n/* harmony import */ var _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOMelements/createDOMelements */ \"./src/components/DOMelements/createDOMelements.js\");\n/* harmony import */ var _data_settings_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/settings.data */ \"./src/components/data/settings.data.js\");\n\r\n\r\n\r\n\r\nclass Settings {\r\n  changeActiveBtn(btn) {\r\n    if (!btn.classList.contains('btnAnimated')) return;\r\n\r\n    if (btn.classList.contains('settings__size')) {\r\n      document.querySelector(`.settings__size.btnAnimated-active`).classList.toggle('btnAnimated-active');\r\n    } else {\r\n      document.querySelector(`.${btn.classList[0]}.btnAnimated-active`).classList.toggle('btnAnimated-active');\r\n    }\r\n\r\n    btn.classList.toggle('btnAnimated-active');\r\n  }\r\n\r\n  closeSettings() {\r\n    document.querySelector('.settings').style.display = 'none';\r\n  }\r\n\r\n  openSettings() {\r\n    document.querySelector('.settings').style.display = 'flex';\r\n  }\r\n\r\n  saveSettings() {\r\n    this.storage.name = document.querySelector('.settings__name').textContent;\r\n    this.storage.sound = document.querySelector('.settings__soundCheckBox').checked;\r\n    this.storage.chipType = document.querySelector('.settings__chipType.btnAnimated-active').dataset.type;\r\n    this.storage.size = document.querySelector('.settings__size.btnAnimated-active').dataset.defaultsize;\r\n    localStorage.settings = JSON.stringify(this.storage);\r\n\r\n    this.closeSettings();\r\n  }\r\n\r\n  changeName(name) {\r\n    name.textContent = '';\r\n  }\r\n\r\n  setName(name) {\r\n    if (name.textContent === '') name.textContent = this.storage.name;\r\n  }\r\n\r\n  setSettings() {\r\n    document.querySelector('.settings__name').textContent = this.storage.name;\r\n    document.querySelector('.settings__soundCheckBox').checked = this.storage.sound;\r\n    document.querySelector(`[data-type=${this.storage.chipType}]`).classList.toggle('btnAnimated-active');\r\n    document.querySelector(`[data-defaultSize=\"${this.storage.size}\"]`).classList.toggle('btnAnimated-active');\r\n  }\r\n\r\n  setEvents() {\r\n    document.querySelector('.settings__types').addEventListener('click', (e) => this.changeActiveBtn(e.target));\r\n    document.querySelector('.settings__sizes').addEventListener('click', (e) => this.changeActiveBtn(e.target));\r\n    document.querySelector('.settings__name').addEventListener('click', (e) => this.changeName(e.target));\r\n    document.querySelector('.settings__name').addEventListener('blur', (e) => this.setName(e.target));\r\n    document.querySelector('.settings__btnSave').addEventListener('click', () => this.saveSettings());\r\n  }\r\n\r\n  setWindow() {\r\n    new _DOMelements_createDOMelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().addToDOM(_data_settings_data__WEBPACK_IMPORTED_MODULE_2__, '.container');\r\n    this.setEvents();\r\n\r\n    if (!localStorage.settings) {\r\n      localStorage.settings = '{\"name\": \"[Your Name]\", \"sound\": \"true\", \"chipType\": \"type1\", \"size\": \"4\"}';\r\n      this.openSettings();\r\n    }\r\n    \r\n    this.storage = JSON.parse(localStorage.settings);\r\n    this.setSettings();\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://gem-puzzle/./src/components/settings/settings.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;