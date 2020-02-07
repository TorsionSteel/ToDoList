/*
(1) Fix display of to do.  It's constaltly repeating and will not clear.  Possibly setup as table.
(2) Add done and delete buttons to to do.
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

        listCatalog('listCatalog', name, listID);

    } else {
        alert('Please provide list name.');
    }
    displayActiveList();
    
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

function listCatalog(divSection, link, ID) {
    let button = document.createElement('button');
    button.innerHTML = link;
    button.classList.add('linkList');
    button.id = 'listCatalog';
    button.name = ID;
    
    document.getElementById(divSection).appendChild(button);
}

document.getElementById('listCatalog').addEventListener('click', (e) => {
    clickId(e.target.name);
});

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
    document.getElementById('toDoItem').insertHTML = '';
    
    for (let i = 0; i < numInt; i++) {
        console.log(i);
        let title = found.toDo[i].title;
        document.getElementById('toDoItem').insertAdjacentHTML('afterend', title);
        document.getElementById('toDoItem').insertAdjacentHTML('afterend', '</br>');
    }
}