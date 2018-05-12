import Model from './Model'

class TodoListModel extends Model {

    constructor({id = null, name = null}) {
        super()
        this.id = id
        this.name = name
    }

}

export default TodoListModel