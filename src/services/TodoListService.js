import Fetch from '../request/Fetch'
import _ from 'lodash'
import TodoListModel from "model/TodoListModel";

export const findAll = () => {
    return Fetch
        .get('todo/lists')
        .then((response) => {
            return _.map(response.data, (value) => {
                return new TodoListModel(value)
            })

        })
}

export const findById = (id) => {
    return Fetch
        .get(`todo/list/${id}`)
        .then((response) => {
            return new TodoListModel(response.data)
        })
}

export const remove = (id) => {
    let idRemove = parseInt(id, 10)
    if (isNaN(idRemove)) return Promise.reject(new Error("Incorrect ID"))

    return Fetch
        .delete(`todo/list/${idRemove}`)
        .then((response) => console.log(response))
}

export const insert = (todoListModel) => {
    return Fetch
        .post('todo/list', todoListModel)
        .then((response) => {
            return new TodoListModel(response.data)
        })
}