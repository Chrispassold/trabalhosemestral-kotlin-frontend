import Fetch from '../request/Fetch'

export const findAll = () => {
    Fetch
        .get('todo/lists')
        .then((response) => console.log(response))
}

export const remove = (id) => {
    let idRemove = parseInt(id, 10)
    if (isNaN(idRemove)) return Promise.reject(new Error("Invalid parameter"))

    Fetch
        .delete(`todo/list/${idRemove}`)
        .then((response) => console.log(response))
}