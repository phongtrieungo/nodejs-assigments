const todoItems = [];

export default class Todo {
    constructor(content) {
        this.content = content;
    }

    save() {
        todoItems.push(this);
    }

    static getAll() {
        return todoItems;
    }
}