function AllLists() {
    this.activeList = 'To Do List';
    this.activeTitle = 'To Do List';
}

function List(title) {
    this.id = '';
    this.title = title;
    this.dateCreated = Date.now();
    this.toDo = {};
}

function ToDo(descrip) {
    this.ToDo = descrip;
    this.dateCreated = Date.now();
    this.isComplete = false;
    this.dateCompleted = '';
    this.list = '';
}

export { AllLists, List, ToDo};