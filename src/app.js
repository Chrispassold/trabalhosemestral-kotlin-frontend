//https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/StickyLayout.js
import React, {Component, Fragment} from 'react'
import {Container} from 'semantic-ui-react'

import Menu from 'components/menu/Menu'

import 'styling/semantic.less'

class App extends Component {

    render() {
        return (
            <Fragment>
                <Menu/>

                <Container style={{marginTop: '10em'}}>
                    {this.props.children}
                </Container>
            </Fragment>
        )
    }
}

export default App