import Model from './Model'

class TodoListModel extends Model {

    constructor({id = null, name = null, createdAt = null, updatedAt = null, percent = 0}) {
        super(createdAt, updatedAt)
        this.id = id
        this.name = name
        this.percent = percent
    }

}

export default TodoListModel