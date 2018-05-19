import React, {Component} from 'react'
import OmgMessage from "components/message/error/OmgMessage";

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
            return <OmgMessage/>
        }

        return this.props.children
    }
}

export default ErrorBoundary