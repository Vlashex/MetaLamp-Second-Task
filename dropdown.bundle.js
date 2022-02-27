/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/dropdown.js":
/*!***********************************!*\
  !*** ./js/components/dropdown.js ***!
  \***********************************/
/***/ (() => {

eval("\r\nconst DropDown = document.querySelectorAll('.DropDown');\r\nfor (let i = 0; i < DropDown.length; i++) {\r\n  const element = DropDown[i]\r\n  const dropdownArrow = element.querySelector('.dropdown__arrow');\r\n  const formIn = element.querySelector('.form__in');\r\n  const dropdown = element.querySelector('.form__dropdown');\r\n  const dropdownButCount = element.querySelectorAll('.dropdown__button-count-btn');\r\n  const dropdownMenu = element.querySelectorAll('.dropdown__menu');\r\n  let dropdownAllCount = 0;\r\n  element.addEventListener('click', (event) => {\r\n    if (event.target === dropdownArrow) {\r\n      dropdownArrow.classList.toggle('form__button-active');\r\n      if (dropdown.style.display === '') {\r\n        dropdown.style.display = 'none';\r\n        formIn.style.borderRadius = '4px';\r\n      } else {\r\n        dropdown.style.display = '';\r\n        formIn.style.borderRadius = '4px 4px 0 0';\r\n      }\r\n    }\r\n  });\r\n  for (let i = 0; i < dropdownMenu.length; i++) {\r\n    const element = dropdownMenu[i];\r\n    let dropdownOut = element.querySelector('.dropdown__out');\r\n    element.addEventListener('click', (event) => {\r\n      let dropdownUp = element.querySelector('.dropdownUp');\r\n      let dropdownDown = element.querySelector('.dropdownDown');\r\n      let dropdownOutCount = dropdownOut.innerHTML;\r\n      if (event.target === dropdownUp) {\r\n        dropdownOutCount++\r\n        dropdownAllCount++\r\n        dropdownOut.innerHTML = dropdownOutCount;\r\n      } else if (event.target === dropdownDown && dropdownOutCount > 0) {\r\n        dropdownOutCount--\r\n        dropdownAllCount--\r\n        if (dropdownAllCount < 0) {\r\n          dropdownAllCount = 0;\r\n        }\r\n        dropdownOut.innerHTML = dropdownOutCount;\r\n      }\r\n      if (dropdownAllCount !== 0) {\r\n        dropdownButCount[0].style.opacity = '1';\r\n      } else {\r\n        dropdownButCount[0].style.opacity = '0';\r\n      }\r\n    });\r\n    dropdownButCount[0].addEventListener('click', () => {\r\n      dropdownAllCount = 0;\r\n      formIn.placeholder = 'Сколько гостей';\r\n      dropdownOut.innerHTML = 0;\r\n    });\r\n    dropdownButCount[1].addEventListener('click', () => {\r\n      formIn.placeholder = ''\r\n      formIn.value = dropdownAllCount;\r\n      if (dropdownAllCount === 0) {\r\n        formIn.placeholder = 'Сколько гостей';\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/components/dropdown.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/components/dropdown.js"]();
/******/ 	
/******/ })()
;