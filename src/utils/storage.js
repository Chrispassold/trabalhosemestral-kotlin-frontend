import lscache from 'lscache'

const USER_UUID = 'USER_UUID'

export default hasCachedUser = () => {
    return !!lscache.get(USER_UUID)
}

export default getCachedUser = () => {
    return lscache.get(USER_UUID)
}

export default setCachedUser = (userUUID) => {
    lscache.set(USER_UUID, userUUID)
}