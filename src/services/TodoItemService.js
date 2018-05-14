import Fetch from '../request/Fetch'
import _ from 'lodash'
import TodoListModel from "model/TodoListModel";

export const findAll = () => {
    return Fetch
        .get('todo/items')
        .then((response) => {
            return _.map(response.data, (value) => {
                return new TodoListModel(value)
            })

        })
}

export const insert = (TodoItemModel) => {
    const todoList = TodoItemModel.todoList

    if (todoList === null) return new Promise.reject(new Error("Todo list cannot be null"))

    //TODO: save and fetch
    return Fetch
        .post(`todo/${todoList.id}/item`, TodoListModel)
}