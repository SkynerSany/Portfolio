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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _js_quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/quotes */ \"./src/js/quotes.js\");\n/* harmony import */ var _js_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/time */ \"./src/js/time.js\");\n/* harmony import */ var _js_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/weather */ \"./src/js/weather.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/app.js?");

/***/ }),

/***/ "./src/js/quotes.js":
/*!**************************!*\
  !*** ./src/js/quotes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quotes)\n/* harmony export */ });\nclass Quotes {\r\n  constructor() {\r\n    this.quoteBox = document.querySelector(\".quotes__quote\");\r\n    this.authorBox = document.querySelector(\".quotes__author\");\r\n    this.container = document.querySelector(\".container\");\r\n    this.waitImg = document.querySelector(\".wait-img\");\r\n  }\r\n\r\n  async getQuote() {\r\n    const response = await fetch(\"https://type.fit/api/quotes\");\r\n    this.quotes = await response.json();\r\n    this.takeQuote();\r\n  }\r\n\r\n  takeQuote() {\r\n    this.quote =\r\n      this.quotes[Math.floor(Math.random() * (this.quotes.length - 1) + 1)];\r\n    this.sendQuote();\r\n  }\r\n\r\n  sendQuote() {\r\n    this.quoteBox.textContent = `\"${this.quote[\"text\"]}\"`;\r\n    this.authorBox.textContent = `© ${this.quote[\"author\"]}`;\r\n    this.waitImg.style.display = \"none\";\r\n    this.container.style.display = \"block\";\r\n  }\r\n}\r\n\r\n(() => {\r\n  const refreshBtn = document.querySelector(\".quotes__refresh\");\r\n  const quotes = new Quotes();\r\n  quotes.getQuote();\r\n  refreshBtn.addEventListener(\"click\", () => {\r\n    quotes.takeQuote();\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://momentum/./src/js/quotes.js?");

/***/ }),

/***/ "./src/js/time.js":
/*!************************!*\
  !*** ./src/js/time.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Time)\n/* harmony export */ });\nclass Time {\r\n  constructor() {\r\n    this.timeBox = document.querySelector(\".time__text\");\r\n    this.dateBox = document.querySelector(\".time__date\");\r\n    this.greeting = document.querySelector(\".greeting__text\");\r\n    this.body = document.querySelector(\".body\");\r\n    this.week = [\r\n      \"Sunday\",\r\n      \"Monday\",\r\n      \"Tuesday\",\r\n      \"Wednesday\",\r\n      \"Thursday\",\r\n      \"Friday\",\r\n      \"Saturday\",\r\n    ];\r\n    this.months = [\r\n      \"January\",\r\n      \"February\",\r\n      \"March\",\r\n      \"April\",\r\n      \"May\",\r\n      \"June\",\r\n      \"July\",\r\n      \"August\",\r\n      \"September\",\r\n      \"October\",\r\n      \"November\",\r\n      \"December\",\r\n    ];\r\n    this.dayTime = \"Morning\";\r\n    this.bgMas = [];\r\n    this.timeNumbers = [];\r\n    this.curentBg = null;\r\n  }\r\n\r\n  addZero(number) {\r\n    return number < 10 ? `0${number}` : number;\r\n  }\r\n\r\n  getTime() {\r\n    const timeInfo = new Date();\r\n    this.timeNumbers[0] = timeInfo.getHours();\r\n    this.timeNumbers[1] = timeInfo.getMinutes();\r\n    this.timeNumbers[2] = timeInfo.getSeconds();\r\n\r\n    this.sendTime(\r\n      this.addZero(this.timeNumbers[0]),\r\n      this.addZero(this.timeNumbers[1]),\r\n      this.addZero(this.timeNumbers[2])\r\n    );\r\n  }\r\n\r\n  getDate() {\r\n    const timeInfo = new Date();\r\n    this.timeNumbers[3] = timeInfo.getDay();\r\n    this.timeNumbers[4] = timeInfo.getDate();\r\n    this.timeNumbers[5] = timeInfo.getMonth();\r\n\r\n    this.sendDate(\r\n      `${this.week[this.timeNumbers[3]]}, ${this.timeNumbers[4]} ${\r\n        this.months[this.timeNumbers[5]]\r\n      }`\r\n    );\r\n  }\r\n\r\n  sendTime(hours, minutes, seconds) {\r\n    this.switchBg();\r\n    this.timeBox.children[0].textContent = hours;\r\n    this.timeBox.children[2].textContent = minutes;\r\n    this.timeBox.children[4].textContent = seconds;\r\n  }\r\n\r\n  sendDate(strDate) {\r\n    this.dateBox.textContent = strDate;\r\n  }\r\n\r\n  showTime() {\r\n    this.getTime.bind(this)();\r\n    setInterval(this.getTime.bind(this), 1000);\r\n  }\r\n\r\n  showDate() {\r\n    if (!this.dateBox.length) {\r\n      this.getDate();\r\n    }\r\n  }\r\n\r\n  checkTime() {\r\n    if (this.timeNumbers[0] >= 6 && this.timeNumbers[0] < 12) {\r\n      this.dayTime = \"Morning\";\r\n    } else if (this.timeNumbers[0] >= 12 && this.timeNumbers[0] < 18) {\r\n      this.dayTime = \"Day\";\r\n    } else if (this.timeNumbers[0] >= 18 && this.timeNumbers[0] < 24) {\r\n      this.dayTime = \"Evening\";\r\n    } else {\r\n      this.dayTime = \"Night\";\r\n    }\r\n  }\r\n\r\n  generateBgMas() {\r\n    for (let i = 1; i < 25; i++) {\r\n      this.bgMas.push(Math.floor(Math.random() * (20 - 1) + 1));\r\n    }\r\n  }\r\n\r\n  switchBg(fromBtn) {\r\n    if (fromBtn) {\r\n      if (!this.tempBg && this.tempBg !== 0) {\r\n        this.tempBg = this.curentBg;\r\n      }\r\n\r\n      if (this.tempBg < 23) {\r\n        this.tempBg += 1;\r\n      } else {\r\n        this.tempBg = 0;\r\n      }\r\n\r\n      const img = document.createElement(\"img\");\r\n      img.src = `/src/assets/images/${this.dayTime}/${\r\n        this.bgMas[this.tempBg]\r\n      }.jpg`;\r\n      img.onload = () => {\r\n        this.body.style.backgroundImage = `url('${img.src}')`;\r\n      };\r\n    }\r\n\r\n    if (this.curentBg !== this.timeNumbers[0]) {\r\n      this.curentBg = this.timeNumbers[0];\r\n      this.checkTime();\r\n      this.body.style.backgroundImage = `url('/src/assets/images/${\r\n        this.dayTime\r\n      }/${this.bgMas[this.curentBg]}.jpg')`;\r\n      this.switchGreeting(this.dayTime);\r\n    }\r\n  }\r\n\r\n  switchGreeting(dayTime) {\r\n    this.greeting.textContent = `Good ${dayTime}`;\r\n  }\r\n}\r\n\r\n(() => {\r\n  const greetingInput = document.querySelector(\".greeting__input\");\r\n  const focusInput = document.querySelector(\".focus__input\");\r\n  const switchBgBtn = document.querySelector(\".switch-bg\");\r\n\r\n  const time = new Time();\r\n\r\n  const init = {\r\n    generateEvents() {\r\n      greetingInput.addEventListener(\"click\", () => {\r\n        greetingInput.textContent = \"\";\r\n      });\r\n\r\n      greetingInput.addEventListener(\"blur\", () => {\r\n        if (greetingInput.textContent === \"\") {\r\n          greetingInput.textContent = window.localStorage.name;\r\n        } else {\r\n          window.localStorage.name = greetingInput.textContent;\r\n        }\r\n      });\r\n\r\n      focusInput.addEventListener(\"click\", () => {\r\n        focusInput.textContent = \"\";\r\n      });\r\n\r\n      focusInput.addEventListener(\"blur\", () => {\r\n        if (focusInput.textContent === \"\") {\r\n          focusInput.textContent = window.localStorage.focus;\r\n        } else {\r\n          window.localStorage.focus = focusInput.textContent;\r\n        }\r\n      });\r\n\r\n      switchBgBtn.addEventListener(\"click\", () => {\r\n        switchBgBtn.disabled = true;\r\n        setTimeout(() => {\r\n          switchBgBtn.disabled = false;\r\n        }, 1000);\r\n        time.switchBg(true);\r\n      });\r\n    },\r\n\r\n    addToLocalStorage() {\r\n      if (!window.localStorage.name) {\r\n        window.localStorage.setItem(\"name\", greetingInput.textContent);\r\n        window.localStorage.setItem(\"focus\", focusInput.textContent);\r\n      } else {\r\n        greetingInput.textContent = window.localStorage.name;\r\n        focusInput.textContent = window.localStorage.focus;\r\n      }\r\n    },\r\n  };\r\n\r\n  time.generateBgMas();\r\n  time.showTime();\r\n  time.showDate();\r\n\r\n  init.generateEvents();\r\n  init.addToLocalStorage();\r\n})();\r\n\n\n//# sourceURL=webpack://momentum/./src/js/time.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\r\n  constructor() {\r\n    this.weatherTemperature = document.querySelector(\".weather__temperature\");\r\n    this.weatherIcon = document.querySelector(\".weather__icon\");\r\n    this.weatherHumidity = document.querySelector(\".weather__humidity-info\");\r\n    this.weatherSpeed = document.querySelector(\".weather__speed-info\");\r\n  }\r\n\r\n  async getWeather(city = Minsk) {\r\n    try {\r\n      const response = await fetch(\r\n        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6ebdd0fd3d344c146430ede697227fdf`\r\n      );\r\n      this.weather = await response.json();\r\n      this.sendWeather();\r\n    } catch (e) {\r\n      alert(`City ${window.localStorage.city} is not found`);\r\n      window.localStorage.city = \"Minsk\";\r\n    }\r\n  }\r\n\r\n  sendWeather() {\r\n    this.weatherTemperature.textContent = `${Math.round(\r\n      this.weather.main.temp - 273.15\r\n    )}°C`;\r\n    this.weatherIcon.src = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;\r\n    this.weatherHumidity.textContent = `${this.weather.main.humidity}%`;\r\n    this.weatherSpeed.textContent = `${this.weather.wind.speed}m/s`;\r\n  }\r\n}\r\n\r\n(() => {\r\n  const cityInput = document.querySelector(\".weather__city-name\");\r\n  const weather = new Weather();\r\n\r\n  cityInput.addEventListener(\"click\", () => {\r\n    cityInput.textContent = \"\";\r\n  });\r\n\r\n  cityInput.addEventListener(\"blur\", () => {\r\n    if (cityInput.textContent === \"\") {\r\n      cityInput.textContent = window.localStorage.city;\r\n    } else {\r\n      window.localStorage.city = cityInput.textContent;\r\n      weather.getWeather(window.localStorage.city);\r\n    }\r\n  });\r\n\r\n  if (!window.localStorage.city) {\r\n    window.localStorage.setItem(\"city\", cityInput.textContent);\r\n  } else {\r\n    cityInput.textContent = window.localStorage.city;\r\n  }\r\n\r\n  weather.getWeather(window.localStorage.city);\r\n})();\r\n\n\n//# sourceURL=webpack://momentum/./src/js/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;