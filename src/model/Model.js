class Model {
    constructor() {
        this.errors = {}
    }

    addError(key, msg) {
        if (key in this.errors) {
            this.errors[key].push(msg)
        }
        else {
            this.errors[key] = [msg]
        }
    }

    removeError(key) {
        delete this.errors[key]
    }

    hasErrors() {
        return (Object.keys(this.errors).length > 0)
    }

    clearErrors() {
        this.errors = {}
    }

}

export default Model