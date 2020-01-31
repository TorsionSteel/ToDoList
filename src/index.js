// function AllLists() {
//     this.lists = [];
//     this.activeList = '';
// }

// function List(title) {
//     this.title = title;
//     this.dateCreated = Date.now();
//     this.toDo = [];
// }

// fucntion ToDo() {
//     this.ToDo = '';
//     this.dateCreated = Date.now();
//     this.isComplete = false;
//     this.dateCompleted = '';
// }



function newList(e) {
    e = e || window.event;
    e = e.target || e.srcElement;


    console.log('New List');

}

function newToDo(e) {
    console.log('New To Do');

}