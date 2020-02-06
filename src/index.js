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
    console.log(name);
    if (name.length > 0 && activeList.title != 'To Do List') {
        let itemID = 'item' + index++;
        this[itemID] = new ToDo(name);
        this[itemID].id = itemID;
        this[itemID].title = name;

        console.log(this[itemID]);

        //.push(this[listID]);

       // listCatalog('listCatalog', name, itemID);

    } else {
        alert('Please provide list name.');
    }
    displayActiveList();

    //let newToDo = new ToDo(descrip);
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
}

function displayActiveList () {
    document.getElementById('currentList').innerHTML = toDoIndex.activeTitle;
}
