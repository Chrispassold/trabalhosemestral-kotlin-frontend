import Fetch from './Fetch'

export const findAll = () => {
    Fetch
        .get('todo/list')
        .then((response) => console.log(response))
}