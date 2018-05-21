//https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/StickyLayout.js
import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'

import Menu from 'components/menu/Menu'
import AuthorizationProvider from "./containers/security";

import 'styling/semantic.less'

class App extends Component {

    render() {
        return <AuthorizationProvider>
            <Menu/>
            <Container style={{marginTop: '10em'}}>
                {this.props.children}
            </Container>
        </AuthorizationProvider>

    }
}

export default App