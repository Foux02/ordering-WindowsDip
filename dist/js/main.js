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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_scalePicture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scalePicture */ \"./modules/scalePicture.js\");\n\r\n\r\n\r\n\r\n\r\nconst okna = document.getElementById('okna');\r\nconst kuhni = document.getElementById('kuhni');\r\nconst balkony = document.getElementById('balkony');\r\n\r\nif (okna) {\r\n  console.log('okna');\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    timerDaysId: 'timer-days',\r\n    timerHoursId: 'timer-hours',\r\n    timerMinutesId: 'timer-minutes',\r\n    timerSecondsId: 'timer-seconds',\r\n    deadline: '12 february 2024',\r\n  });\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    timerDaysId: 'timer-days-1',\r\n    timerHoursId: 'timer-hours-1',\r\n    timerMinutesId: 'timer-minutes-1',\r\n    timerSecondsId: 'timer-seconds-1',\r\n    deadline: '12 february 2024',\r\n  });\r\n\r\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    fornId: 'action-form',\r\n  });\r\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    fornId: 'action-form2',\r\n  });\r\n}\r\n\r\nif (kuhni) {\r\n  console.log('kuhni');\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    timerDaysId: 'timer-days-kuhni',\r\n    timerHoursId: 'timer-hours-kuhni',\r\n    timerMinutesId: 'timer-minutes-kuhni',\r\n    timerSecondsId: 'timer-seconds-kuhni',\r\n    deadline: '16 february 2024',\r\n  });\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    timerDaysId: 'timer-days-kuhni-1',\r\n    timerHoursId: 'timer-hours-kuhni-1',\r\n    timerMinutesId: 'timer-minutes-kuhni-1',\r\n    timerSecondsId: 'timer-seconds-kuhni-1',\r\n    deadline: '16 february 2024',\r\n  });\r\n\r\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    fornId: 'action-form',\r\n  });\r\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    fornId: 'action-form2',\r\n  });\r\n}\r\n\r\nif (balkony) {\r\n  console.log('balkony');\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    timerDaysId: 'timer-days-balkony',\r\n    timerHoursId: 'timer-hours-balkony',\r\n    timerMinutesId: 'timer-minutes-balkony',\r\n    timerSecondsId: 'timer-seconds-balkony',\r\n    deadline: '14 february 2024',\r\n  });\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    timerDaysId: 'timer-days-balkony-1',\r\n    timerHoursId: 'timer-hours-balkony-1',\r\n    timerMinutesId: 'timer-minutes-balkony-1',\r\n    timerSecondsId: 'timer-seconds-balkony-1',\r\n    deadline: '14 february 2024',\r\n  });\r\n\r\n  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  (0,_modules_scalePicture__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    fornId: 'action-form',\r\n    someElem: [{ type: 'input', id: 'calc-total' }],\r\n  });\r\n  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n    fornId: 'action-form2',\r\n    someElem: [{ type: 'input', id: 'calc-total' }],\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\nconst calc = () => {\r\n  const calc = document.getElementById('calc');\r\n\r\n  const calcTypeBalcony = document.getElementById('calc-type');\r\n  const calcTypeMterial = document.getElementById('calc-type-material');\r\n  const calcInputSquare = document.getElementById('calc-input');\r\n  const calcTotal = document.getElementById('calc-total');\r\n\r\n  let calcTotalValue;\r\n  let calcTotalSpeedAnime;\r\n\r\n  const countCalc = () => {\r\n    const calcTypeBalconyValue =\r\n      +calcTypeBalcony.options[calcTypeBalcony.selectedIndex].value;\r\n    const calcInputSquareValue = +calcInputSquare.value;\r\n\r\n    let calcTypeMterialValue =\r\n      +calcTypeMterial.options[calcTypeMterial.selectedIndex].value;\r\n\r\n    if (!calcTypeMterialValue) {\r\n      calcTypeMterialValue = 1;\r\n    }\r\n\r\n    if (calcTypeBalconyValue & (calcInputSquareValue > 0)) {\r\n      calcTotalValue =\r\n        calcTypeBalconyValue * calcInputSquareValue * calcTypeMterialValue;\r\n    } else {\r\n      calcTotalValue = 0;\r\n    }\r\n\r\n    if (calcTotalValue <= 15) {\r\n      calcTotalSpeedAnime = 900;\r\n    } else if (calcTotalValue <= 50) {\r\n      calcTotalSpeedAnime = 1100;\r\n    } else if (calcTotalValue <= 200) {\r\n      calcTotalSpeedAnime = 2500;\r\n    } else {\r\n      calcTotalSpeedAnime = 2700;\r\n    }\r\n\r\n    if (calcTotalValue > 0) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: calcTotalSpeedAnime,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          calcTotal.value = Math.abs(Math.round(progress * calcTotalValue));\r\n        },\r\n      });\r\n    } else {\r\n      calcTotal.value = calcTotalValue;\r\n    }\r\n  };\r\n\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.regularExpressions)();\r\n\r\n  calc.addEventListener('change', (e) => {\r\n    if (\r\n      e.target === calcTypeBalcony ||\r\n      e.target === calcTypeMterial ||\r\n      e.target === calcInputSquare\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   regularExpressions: () => (/* binding */ regularExpressions)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\nconst regularExpressions = () => {\r\n  const calcItem = document.getElementById('calc-input');\r\n\r\n  calcItem.addEventListener('input', (e) => {\r\n    e.target.value = e.target.value.replace(/\\D+/, '');\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/scalePicture.js":
/*!*********************************!*\
  !*** ./modules/scalePicture.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scalePicture = () => {\r\n  console.log('scalePicture');\r\n\r\n  const modal = new ItcModal({\r\n    title: 'Заголовок',\r\n    content: '<div>Содержимое модального окна...</div>',\r\n    footerButtons: [\r\n      { class: 'btn btn-close', text: 'Закрыть', action: 'close' },\r\n    ],\r\n  });\r\n\r\n  modal.show();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scalePicture);\r\n\n\n//# sourceURL=webpack:///./modules/scalePicture.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ fornId, someElem = [] }) => {\r\n  const form = document.getElementsByName(fornId)[0];\r\n  const statusBlock = document.createElement('div');\r\n  const fioUser = document.getElementsByName('fio');\r\n  const phoneUser = document.getElementsByName('phone');\r\n\r\n  const loadText = 'Загрузка...';\r\n  const errorText = 'Ошибка...';\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжется.';\r\n  const validText =\r\n    'Данные не валидны! ФИО: только буквы латиницы или кириллицы. Номер телефона: только \"+\" и максимум 16 цифр';\r\n\r\n  fioUser.forEach((key) => {\r\n    key.setAttribute('required', true);\r\n  });\r\n\r\n  phoneUser.forEach((key) => {\r\n    key.setAttribute('required', true);\r\n  });\r\n\r\n  const validate = (list) => {\r\n    let validateName;\r\n    let validatePhone;\r\n    let success = true;\r\n\r\n    list.forEach((key) => {\r\n      if (key.name === 'fio') {\r\n        validateName = /^[а-яА-Яa-zA-Z\\s]+$/g.test(key.value);\r\n      } else if (key.name === 'phone') {\r\n        validatePhone = /^(\\+|[0-9]{1})[0-9]{1,16}$/.test(key.value);\r\n      } else {\r\n      }\r\n    });\r\n\r\n    if (validateName === false || validatePhone === false) {\r\n      success = false;\r\n    }\r\n\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input');\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n\r\n      if ((elem.type === 'input') & (!element.value <= 0)) {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    const cleanTextContent = () => {\r\n      statusBlock.textContent = '';\r\n    };\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = successText;\r\n          statusBlock.style.color = '#00CC33';\r\n\r\n          setTimeout(cleanTextContent, 4000);\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = '';\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n          statusBlock.style.color = '#FF5555';\r\n        });\r\n    } else {\r\n      statusBlock.textContent = validText;\r\n      statusBlock.style.color = '#C41E3A';\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Верните форму, пожалуйста))');\r\n    }\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = ({\r\n  timerDaysId,\r\n  timerHoursId,\r\n  timerMinutesId,\r\n  timerSecondsId,\r\n  deadline,\r\n}) => {\r\n  const timerDays = document.getElementById(timerDaysId);\r\n  const timerHours = document.getElementById(timerHoursId);\r\n  const timerMinutes = document.getElementById(timerMinutesId);\r\n  const timerSeconds = document.getElementById(timerSecondsId);\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let diff = dateStop - dateNow;\r\n\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    let nullDays = days;\r\n    nullDays > -1 && nullDays < 10 && diff >= 0\r\n      ? (nullDays = `${'0' + days}`)\r\n      : diff < 0\r\n      ? (nullDays = `00`)\r\n      : (nullDays = `${days}`);\r\n\r\n    let nullHours = hours;\r\n    nullHours > -1 && nullHours < 10 && diff >= 0\r\n      ? (nullHours = `${'0' + hours}`)\r\n      : diff < 0\r\n      ? (nullHours = `00`)\r\n      : (nullHours = `${hours}`);\r\n\r\n    let nullMinutes = minutes;\r\n    nullMinutes > -1 && nullMinutes < 10 && diff >= 0\r\n      ? (nullMinutes = `${'0' + minutes}`)\r\n      : diff < 0\r\n      ? (nullMinutes = `00`)\r\n      : (nullMinutes = `${minutes}`);\r\n\r\n    let nullSeconds = seconds;\r\n    nullSeconds > -1 && nullSeconds < 10 && diff >= 0\r\n      ? (nullSeconds = `${'0' + seconds}`)\r\n      : diff < 0\r\n      ? (nullSeconds = `00`)\r\n      : (nullSeconds = `${seconds}`);\r\n\r\n    return {\r\n      timeRemaining,\r\n      nullDays,\r\n      nullHours,\r\n      nullMinutes,\r\n      nullSeconds,\r\n      diff,\r\n    };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    if (getTime.diff < 0) {\r\n      clearInterval(timerId);\r\n    }\r\n\r\n    timerDays.textContent = getTime.nullDays;\r\n    timerHours.textContent = getTime.nullHours;\r\n    timerMinutes.textContent = getTime.nullMinutes;\r\n    timerSeconds.textContent = getTime.nullSeconds;\r\n  };\r\n\r\n  //setInterval(updateClock, 1, deadline);\r\n\r\n  const timerId = setInterval(updateClock, 1000, deadline);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;