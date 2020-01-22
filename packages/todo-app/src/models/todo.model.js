let todoItems = [];

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

    static update(oldContent, newContent) {
        todoItems = todoItems.map(item => {
            if (item.content === oldContent) {
                return {...item, content: newContent};
            }
            return {...item};
        })
    }

    static getAll() {
        return todoItems;
    }
}