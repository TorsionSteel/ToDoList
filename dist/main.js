/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dataConstructs.js":
/*!*******************************!*\
  !*** ./src/dataConstructs.js ***!
  \*******************************/
/*! exports provided: AllLists, List, ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllLists\", function() { return AllLists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDo\", function() { return ToDo; });\nfunction AllLists() {\n    this.activeList = 'To Do List';\n    this.activeTitle = 'To Do List';\n}\n\nfunction List(title) {\n    this.id = '';\n    this.title = title;\n    this.dateCreated = Date.now();\n    this.toDo = {};\n}\n\nfunction ToDo(descrip) {\n    this.ToDo = descrip;\n    this.dateCreated = Date.now();\n    this.isComplete = false;\n    this.dateCompleted = '';\n    this.list = '';\n}\n\n\n\n//# sourceURL=webpack:///./src/dataConstructs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataConstructs.js */ \"./src/dataConstructs.js\");\n/*\nfigure out why when object is created it can't be called.  Is it living locally in a function only?\nReview how objects work.  It's not clear why I can't call an object by name.\n*/\n\n\nconst toDoIndex = new _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__[\"AllLists\"]();\nlet allLists = [];\nlet index = 0;\ndisplayActiveList();\n\ndocument.getElementById('listSubmit').addEventListener('click', newList);\ndocument.getElementById('toDoSubmit').addEventListener('click', newToDo);\n\nfunction newList() {\n    let name = document.getElementById('newListName').value;\n    if (name.length > 0) {\n        let listID = 'list' + index++;\n        this[listID] = new _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__[\"List\"](name);\n        this[listID].id = listID;\n        this[listID].title = name;\n    \n        console.log(this[listID]);\n        console.log(allLists);\n        console.log(this[listID]);\n\n        toDoIndex.activeList = listID;\n        toDoIndex.activeTitle = this[listID].title;\n\n        listCatalog('listCatalog', name, this[listID].id);\n    } else {\n        alert('Please provide list name.');\n    }\n    displayActiveList();\n}\n\nfunction newToDo(descrip, activeList) {\n    console.log('New To Do');\n    let newToDo = new _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__[\"ToDo\"](descrip);\n}\n\nfunction listCatalog(divSection, link, listID) {\n    let button = document.createElement('button');\n    button.innerHTML = link;\n    button.classList.add('linkList');\n    button.id = 'listCatalog';\n    button.name = listID;\n    \n    document.getElementById(divSection).appendChild(button);\n}\n\ndocument.getElementById('listCatalog').addEventListener('click', (e) => {\n    clickId(e.target.name);\n});\n\nfunction clickId(clickedId) {\n    console.log(clickedId);\n    toDoIndex.activeList = clickedId;\n    toDoIndex.activeTitle = clickedID.title;\n    \n    console.log(toDoIndex.activeList);\n    console.log(toDoIndex.activeTitle);\n\n    displayActiveList();\n}\n\nfunction displayActiveList () {\n    document.getElementById('currentList').innerHTML = toDoIndex.activeTitle;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });