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

    if (!todoList) return new Promise.reject(new Error("Todo list cannot be null"))

    console.log(todoItemModel)

    return Fetch
        .post(`todo/item`, todoItemModel)
        .then((response) => new TodoItemModel(response.data))
}

export const toggleChecked = (todoItemModel) => {
    if (!todoItemModel) return new Promise.reject(new Error("Todo item cannot be null"))

    if (!todoItemModel.id) return new Promise.reject(new Error("Todo item id cannot be null"))

    return Fetch.put(`/todo/item/${todoItemModel.id}/toggle`);
}