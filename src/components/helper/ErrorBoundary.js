import React, {Component} from 'react'
import ImageErrorMessage from "components/message/error/ImageErrorMessage";

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
            return <ImageErrorMessage/>
        }

        return this.props.children
    }
}

export default ErrorBoundary