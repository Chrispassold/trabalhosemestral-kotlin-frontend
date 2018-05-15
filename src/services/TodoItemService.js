import Fetch from '../request/Fetch'
import _ from 'lodash'
import TodoItemModel from "model/TodoItemModel";

export const findAll = (todoList) => {
    if (_.isEmpty(todoList)) return Promise.reject(new Error("Todo list cannot be null"))

    return Fetch
        .get(`todo/${todoList.id}/items`)
        .then((response) => _.map(response.data, (value) => {
                return new TodoItemModel(value)
            })
        )
}

export const insert = (todoItemModel) => {
    const todoList = todoItemModel.todoList

    if (todoList === null) return new Promise.reject(new Error("Todo list cannot be null"))

    return Fetch
        .post(`todo/${todoList.id}/item`, todoItemModel)
        .then((response) => _.map(response.data, (value) => {
                return new TodoItemModel(value)
            })
        )
}