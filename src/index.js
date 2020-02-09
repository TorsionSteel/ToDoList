/*
x(1) Fix display of to do.  It's constaltly repeating and will not clear.  Possibly setup as table.
(2) Add done and delete buttons to to do.
(2.a) Add list to table like todo.
(2.b) Clear text box on submit.  Enable enter to submit.
(3) Add delete button to list.
(4) Add edit button?
(5) update formatting.
*/


import { AllLists, List, ToDo } from './dataConstructs.js';

const toDoIndex = new AllLists();
let allLists = [];
let index = 0;
displayActiveList();

document.getElementById('listSubmit').addEventListener('click', newList);
document.getElementById('toDoSubmit').addEventListener('click', newToDo);

function newList() {
    let name = document.getElementById('newListName').value;
    if (name.length > 0) {
        let listID = 'list' + index++;
        this[listID] = new List(name);
        this[listID].id = listID;
        this[listID].title = name;

        toDoIndex.activeList = listID;
        toDoIndex.activeTitle = this[listID].title;

        allLists.push(this[listID]);
       // listCatalog('listCatalog', name, listID);
        displayList('listCatalog', name, listID);
    } else {
        alert('Please provide list name.');
    }
    displayActiveList();
    clearTable('toDoTable');
}

function newToDo() {
    let name = document.getElementById('newToDo').value;
    if (name.length > 0 && toDoIndex.activeList != 'To Do List') {
        let itemID = 'item' + index++;
        this[itemID] = new ToDo(name);
        this[itemID].id = itemID;
        this[itemID].title = name;
        this[itemID].list = toDoIndex.activeList;

        let found = allLists.find(x => x.id == this[itemID].list);
        found.toDo.push(this[itemID]);

    } else {
        alert('Please provide list name.');
    }
    
    displayActiveList();
    displayToDo();
}

document.getElementById('listCatalog').addEventListener('click', (e) => {
    if (e.target.id == 'deleteList'){
        removeElement(e.target.id, e.target.name);
    } else {
        clickId(e.target.name);
    }
    
});

document.getElementById('toDoItem').addEventListener('click', (e) => {
    if (e.target.id == 'deleteToDo') { 
        removeElement(e.target.id, e.target.name);
    } else {

    }
});

function displayList(divSection, link, ID) {
    let numInt = allLists.length;

    clearTable('listTable');

    let table = document.getElementById('listTable');
    for (let i = 0; i < numInt; i++) {
        let title = allLists[i].title;
        let listID = allLists[i].id
        let row = table.insertRow(i);
        let clickLink = document.createElement('a');
        clickLink.setAttribute('class', 'linkList' );
        row.insertCell(0).innerHTML = '<a id=' + listID + ' name=' + listID + ' class=linkList>' + title + '</a>';
        row.insertCell(1).innerHTML = '<a id=deleteList name=' + listID + '> x </a>';
    }
}

function clickId(clickedId) {
    let found = allLists.find(x => x.id == clickedId);
    
    toDoIndex.activeList = found.id;
    toDoIndex.activeTitle = found.title;
    
    displayActiveList();
    displayToDo();
}

function displayActiveList () {
    document.getElementById('currentList').innerHTML = toDoIndex.activeTitle;
}

function displayToDo () {
    let found = allLists.find(x => x.id == toDoIndex.activeList);
    let numInt = found.toDo.length;
    
    clearTable('toDoTable');
    
    let table = document.getElementById('toDoTable');

    for (let i = 0; i < numInt; i++) {
        let title = found.toDo[i].title;
        let id = found.toDo[i].id;
        let row = table.insertRow(i);
        row.insertCell(0).innerHTML = '&#9745';
        row.insertCell(1).innerHTML = title;
        row.insertCell(2).innerHTML = '<a id=deleteToDo name=' + id + '> x </a>';
    }
}   

function clearTable(tableName) {
    var tableRef = document.getElementById(tableName);
    while ( tableRef.rows.length > 0 ) {
        tableRef.deleteRow(0);
    }
}

function removeElement(act, name) {
    if(act == 'deleteList') {
        let findIndex = allLists.indexOf(name);
        allLists.splice(findIndex,1);
        displayList();
    } else if (act == 'deleteToDo') {
        let found = allLists.find(x => x.id == toDoIndex.activeList);
        let foundToDo = found.toDo.findIndex(x => x.id == name);
        console.log(foundToDo);
        
        found.toDo.splice(foundToDo,1);
        displayToDo();

    } else {
        console.log('delete fail');
    }
}