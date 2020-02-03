/*
figure out why when object is created it can't be called.  Is it living locally in a function only?
Review how objects work.  It's not clear why I can't call an object by name.
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
    
        console.log(this[listID]);
        console.log(allLists);
        console.log(this[listID]);

        toDoIndex.activeList = listID;
        toDoIndex.activeTitle = this[listID].title;

        listCatalog('listCatalog', name, this[listID].id);
    } else {
        alert('Please provide list name.');
    }
    displayActiveList();
}

function newToDo(descrip, activeList) {
    console.log('New To Do');
    let newToDo = new ToDo(descrip);
}

function listCatalog(divSection, link, listID) {
    let button = document.createElement('button');
    button.innerHTML = link;
    button.classList.add('linkList');
    button.id = 'listCatalog';
    button.name = listID;
    
    document.getElementById(divSection).appendChild(button);
}

document.getElementById('listCatalog').addEventListener('click', (e) => {
    clickId(e.target.name);
});

function clickId(clickedId) {
    console.log(clickedId);
    toDoIndex.activeList = clickedId;
    toDoIndex.activeTitle = clickedID.title;
    
    console.log(toDoIndex.activeList);
    console.log(toDoIndex.activeTitle);

    displayActiveList();
}

function displayActiveList () {
    document.getElementById('currentList').innerHTML = toDoIndex.activeTitle;
}
