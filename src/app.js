import React, {Component} from 'react'

import 'styling/semantic.less'

class App extends Component {
    render() {
        return (
            this.props.children
        )
    }
}

export default App