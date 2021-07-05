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

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet navbar = () => {\r\n\treturn `\r\n    \r\n\t\t\t<div class=\"logo\"><h3>My Notes App</h3></div>\r\n\t\t\t<div class=\"add\">\r\n\t\t\t\t<label for=\"day\">Add notes:</label>\r\n\t\t\t\t<select id=\"day\">\r\n\t\t\t\t\t<optgroup label=\"Select your day\">\r\n\t\t\t\t\t\t<option>Day-1</option>\r\n\t\t\t\t\t\t<option>Day-2</option>\r\n\t\t\t\t\t\t<option>Day-3</option>\r\n\t\t\t\t\t\t<option>Day-4</option>\r\n\t\t\t\t\t\t<option>Day-5</option>\r\n\t\t\t\t\t\t<option>Day-6</option>\r\n\t\t\t\t\t\t<option>Day-7</option>\r\n\t\t\t\t\t\t<option>Day-8</option>\r\n\t\t\t\t\t\t<option>Day-9</option>\r\n\t\t\t\t\t\t<option>Day-10</option>\r\n\t\t\t\t\t\t<option>Day-11</option>\r\n\t\t\t\t\t\t<option>Day-12</option>\r\n\t\t\t\t\t\t<option>Day-13</option>\r\n\t\t\t\t\t\t<option>Day-14</option>\r\n\t\t\t\t\t\t<option>Day-15</option>\r\n\t\t\t\t\t\t<option>Day-16</option>\r\n\t\t\t\t\t</optgroup>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"go\">\r\n\t\t\t\t<label for=\"day_\">View notes:</label>\r\n\t\t\t\t<select id=\"day_\">\r\n\t\t\t\t\t<optgroup label=\"Select your day\">\r\n\t\t\t\t\t\t<option>Day-1</option>\r\n\t\t\t\t\t\t<option>Day-2</option>\r\n\t\t\t\t\t\t<option>Day-3</option>\r\n\t\t\t\t\t\t<option>Day-4</option>\r\n\t\t\t\t\t\t<option>Day-5</option>\r\n\t\t\t\t\t\t<option>Day-6</option>\r\n\t\t\t\t\t\t<option>Day-7</option>\r\n\t\t\t\t\t\t<option>Day-8</option>\r\n\t\t\t\t\t\t<option>Day-9</option>\r\n\t\t\t\t\t\t<option>Day-10</option>\r\n\t\t\t\t\t\t<option>Day-11</option>\r\n\t\t\t\t\t\t<option>Day-12</option>\r\n\t\t\t\t\t\t<option>Day-13</option>\r\n\t\t\t\t\t\t<option>Day-14</option>\r\n\t\t\t\t\t\t<option>Day-15</option>\r\n\t\t\t\t\t\t<option>Day-16</option>\r\n\t\t\t\t\t</optgroup>\r\n\t\t\t\t</select>\r\n\t\t\t\t<button id=\"go\">View Notes</button>\r\n\t\t\t</div>\r\n\t\t`;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\r\n\n\n//# sourceURL=webpack://webpack-demo/./components/navbar.js?");

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet section = () => {\r\n\treturn `<p>Add a title</p>\r\n    <input type=\"text\" placeholder=\"Select Title (optional)\" id=\"tit_le\"/>\r\n    <p>Write your note here</p>\r\n    <textarea id=\"notes\"></textarea>\r\n<button id=\"add_notes\">Submit</button>\r\n`;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (section);\r\n\n\n//# sourceURL=webpack://webpack-demo/./components/section.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\n/* harmony import */ var _components_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section.js */ \"./components/section.js\");\n\r\n\r\n\r\nlet nav = document.querySelector(\"nav\");\r\nlet sec = document.querySelector(\"section\");\r\nlet sect = document.querySelector(\".show\");\r\n\r\nlet main = () => {\r\n\tnav.innerHTML = (0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\tsec.innerHTML = (0,_components_section_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n};\r\nmain();\r\n\r\nlet obj = {};\r\nlet obj_2 = {};\r\nlet t = document.getElementById(\"tit_le\");\r\nlet add_notes = document.getElementById(\"add_notes\");\r\nlet notes = document.getElementById(\"notes\");\r\nadd_notes.addEventListener(\"click\", () => {\r\n\tconsole.log(t);\r\n\tsend_notes(notes.value, day.value, t.value);\r\n});\r\nlet day = document.getElementById(\"day\");\r\n\r\nlet send_notes = (st, day, t) => {\r\n\tconsole.log(t);\r\n\tif (st.length != 0) {\r\n\t\tif (obj[day]) {\r\n\t\t\tobj[day] += st + \"<br/>\";\r\n\t\t} else {\r\n\t\t\tobj[day] = st + \"<br/>\";\r\n\t\t}\r\n\t\talert(`Your notes is added to ${day}`);\r\n\t} else {\r\n\t\talert(\"First write some notes\");\r\n\t}\r\n\tif (obj[day]) {\r\n\t\tobj_2[day] = t;\r\n\t} else {\r\n\t\tobj_2[day] = t;\r\n\t}\r\n\tconsole.log(obj);\r\n\tconsole.log(obj_2);\r\n};\r\nlet go = document.getElementById(\"go\");\r\ngo.addEventListener(\"click\", () => {\r\n\tlet day_ = document.getElementById(\"day_\").value;\r\n\tshow(day_);\r\n});\r\nlet show = (d) => {\r\n\tsec.style.display = \"none\";\r\n\tsect.style.display = \"flex\";\r\n\tsect.innerHTML = null;\r\n\tlet div = document.createElement(\"div\");\r\n\tlet dayname = document.createElement(\"h1\");\r\n\tif (obj_2[d] == undefined || obj_2[d].length == 0) {\r\n\t\tobj_2[d] = \"No title\";\r\n\t}\r\n\tdayname.innerHTML = `${d} <br/><span>${obj_2[d]}</span>`;\r\n\tlet daynotes = document.createElement(\"p\");\r\n\tif (obj[d] != undefined) {\r\n\t\tdaynotes.innerHTML = `${obj[d]}`;\r\n\t} else {\r\n\t\tdaynotes.innerHTML = `No notes available for this day`;\r\n\t}\r\n\tlet btn = document.createElement(\"button\");\r\n\tbtn.innerText = \"Back to add notes\";\r\n\tbtn.addEventListener(\"click\", () => {\r\n\t\tgoTo();\r\n\t});\r\n\tdiv.append(btn, dayname, daynotes);\r\n\tsect.append(div);\r\n};\r\nlet goTo = () => {\r\n\tsec.style.display = \"flex\";\r\n\tsect.style.display = \"none\";\r\n};\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;