import Model from './Model'
import TodoListModel from "./TodoListModel";

class TodoItemModel extends Model {

    constructor({id = null, name = null, checked = false, todoList = {}, createdAt = null, updatedAt = null}) {
        super(createdAt, updatedAt)
        this.id = id
        this.name = name
        this.checked = checked
        this.todoList = new TodoListModel(todoList)
    }

}

export default TodoItemModel