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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllLists\", function() { return AllLists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDo\", function() { return ToDo; });\nfunction AllLists() {\n    this.activeList = 'To Do List';\n    this.activeTitle = 'To Do List';\n}\n\nfunction List(title) {\n    this.id = '';\n    this.title = title;\n    this.dateCreated = Date.now();\n    this.toDo = [];\n}\n\nfunction ToDo(title) {\n    this.id = '';\n    this.title = title;\n    this.dateCreated = Date.now();\n    this.isComplete = false;\n    this.dateCompleted = '';\n    this.list = '';\n}\n\n\n\n//# sourceURL=webpack:///./src/dataConstructs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataConstructs.js */ \"./src/dataConstructs.js\");\n/*\nx(1) Fix display of to do.  It's constaltly repeating and will not clear.  Possibly setup as table.\n(2) Add done and delete buttons to to do.\n(2.a) Add list to table like todo.\n(2.b) Clear text box on submit.  Enable enter to submit.\n(3) Add delete button to list.\n(4) Add edit button?\n(5) update formatting.\n*/\n\n\n\n\nconst toDoIndex = new _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__[\"AllLists\"]();\nlet allLists = [];\nlet index = 0;\ndisplayActiveList();\n\ndocument.getElementById('listSubmit').addEventListener('click', newList);\ndocument.getElementById('toDoSubmit').addEventListener('click', newToDo);\n\nfunction newList() {\n    let name = document.getElementById('newListName').value;\n    if (name.length > 0) {\n        let listID = 'list' + index++;\n        this[listID] = new _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__[\"List\"](name);\n        this[listID].id = listID;\n        this[listID].title = name;\n\n        toDoIndex.activeList = listID;\n        toDoIndex.activeTitle = this[listID].title;\n\n        allLists.push(this[listID]);\n       // listCatalog('listCatalog', name, listID);\n        displayList('listCatalog', name, listID);\n    } else {\n        alert('Please provide list name.');\n    }\n    displayActiveList();\n    clearTable('toDoTable');\n}\n\nfunction newToDo() {\n    let name = document.getElementById('newToDo').value;\n    if (name.length > 0 && toDoIndex.activeList != 'To Do List') {\n        let itemID = 'item' + index++;\n        this[itemID] = new _dataConstructs_js__WEBPACK_IMPORTED_MODULE_0__[\"ToDo\"](name);\n        this[itemID].id = itemID;\n        this[itemID].title = name;\n        this[itemID].list = toDoIndex.activeList;\n\n        let found = allLists.find(x => x.id == this[itemID].list);\n        found.toDo.push(this[itemID]);\n\n    } else {\n        alert('Please provide list name.');\n    }\n    \n    displayActiveList();\n    displayToDo();\n}\n\ndocument.getElementById('listCatalog').addEventListener('click', (e) => {\n    if (e.target.id == 'deleteList'){\n        removeElement(e.target.id, e.target.name);\n    } else {\n        clickId(e.target.name);\n    }\n    \n});\n\ndocument.getElementById('toDoItem').addEventListener('click', (e) => {\n    if (e.target.id == 'deleteToDo') { \n        removeElement(e.target.id, e.target.name);\n    } else {\n\n    }\n});\n\nfunction displayList(divSection, link, ID) {\n    let numInt = allLists.length;\n\n    clearTable('listTable');\n\n    let table = document.getElementById('listTable');\n    for (let i = 0; i < numInt; i++) {\n        let title = allLists[i].title;\n        let listID = allLists[i].id\n        let row = table.insertRow(i);\n        let clickLink = document.createElement('a');\n        clickLink.setAttribute('class', 'linkList' );\n        row.insertCell(0).innerHTML = '<a id=' + listID + ' name=' + listID + ' class=linkList>' + title + '</a>';\n        row.insertCell(1).innerHTML = '<a id=deleteList name=' + listID + '> x </a>';\n    }\n}\n\nfunction clickId(clickedId) {\n    let found = allLists.find(x => x.id == clickedId);\n    \n    toDoIndex.activeList = found.id;\n    toDoIndex.activeTitle = found.title;\n    \n    displayActiveList();\n    displayToDo();\n}\n\nfunction displayActiveList () {\n    document.getElementById('currentList').innerHTML = toDoIndex.activeTitle;\n}\n\nfunction displayToDo () {\n    let found = allLists.find(x => x.id == toDoIndex.activeList);\n    let numInt = found.toDo.length;\n    \n    clearTable('toDoTable');\n    \n    let table = document.getElementById('toDoTable');\n\n    for (let i = 0; i < numInt; i++) {\n        let title = found.toDo[i].title;\n        let id = found.toDo[i].id;\n        let row = table.insertRow(i);\n        row.insertCell(0).innerHTML = '&#9745';\n        row.insertCell(1).innerHTML = title;\n        row.insertCell(2).innerHTML = '<a id=deleteToDo name=' + id + '> x </a>';\n    }\n}   \n\nfunction clearTable(tableName) {\n    var tableRef = document.getElementById(tableName);\n    while ( tableRef.rows.length > 0 ) {\n        tableRef.deleteRow(0);\n    }\n}\n\nfunction removeElement(act, name) {\n    if(act == 'deleteList') {\n        let findIndex = allLists.indexOf(name);\n        allLists.splice(findIndex,1);\n        displayList();\n    } else if (act == 'deleteToDo') {\n        let found = allLists.find(x => x.id == toDoIndex.activeList);\n        let foundToDo = found.toDo.findIndex(x => x.id == name);\n        console.log(foundToDo);\n        \n        found.toDo.splice(foundToDo,1);\n        displayToDo();\n\n    } else {\n        console.log('delete fail');\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });