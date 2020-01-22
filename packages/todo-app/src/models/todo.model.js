let todoItems = [];
let isEmpty = false;

export default class Todo {
    constructor(content) {
        this.content = content;
    }

    save() {
        todoItems.push(this);
    }

    static remove(content) {
        todoItems = todoItems.filter(item => item.content !== content);
    }

    static getAll() {
        return todoItems;
    }

    static isEmptyContent(empty) {
        isEmpty = empty;
    }

    static getContentState() {
        return isEmpty;
    }
}