import Model from './Model'

class TodoListModel extends Model {

    constructor({id = null, name = null, createdAt = null, updatedAt = null, percent = 0}) {
        super()
        this.id = id
        this.name = name
        this.createdAt = new Date(createdAt)
        this.updatedAt = new Date(updatedAt)
        this.percent = percent
    }

}

export default TodoListModel