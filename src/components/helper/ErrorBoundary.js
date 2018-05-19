import React, {Component} from 'react'
import ErrorMessage from "components/message/error/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }


    componentDidCatch(error, info) {
        console.log("ErrorBoundary {info, error}", info, error)
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage/>
        }

        return this.props.children
    }
}

export default ErrorBoundary