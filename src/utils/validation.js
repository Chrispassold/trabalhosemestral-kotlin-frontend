import _ from 'lodash'

const validateResponse = (message) => {
    return {
        isValid: !_.isEmpty(message),
        message: message
    }
}

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (_.isEmpty(email) || !re.test(String(email).toLowerCase())) return validateResponse('E-mail deve ser válido')

    return validateResponse()
}

export const validatePassword = (password) => {
    if (_.isEmpty(password)) return validateResponse('Senha deve ser válida')

    if (password.length < 6) return validateResponse('Senha deve ter no mínimo 6 caracteres')

    return validateResponse()
}

