
document.getElementById("newList").addEventListener("click", function(){
    console.log('newList');
  });

document.getElementById("newToDo").addEventListener("click", function(){
console.log('newToDo');
});

function AllLists() {
    this.lists = [];
    this.activeList = '';
}

function List(title) {
    this.title = title;
    this.dateCreated = Date.now();c
    this.toDo = [];
}

fucntion ToDo() {
    this.ToDo = '';
    this.dateCreated = Date.now();
    this.isComplete = false;
    this.dateCompleted = '';
}







function newList() {



}