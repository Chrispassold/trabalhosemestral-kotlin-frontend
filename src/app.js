//https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/StickyLayout.js

import React, {Component, Fragment} from 'react'
import {Container, Header} from 'semantic-ui-react'

import 'styling/semantic.less'

class App extends Component {

    state = {
        menuFixed: false
    }

    stickTopMenu = () => this.setState({menuFixed: true})


    unStickTopMenu = () => this.setState({menuFixed: false})

    render() {
        const {menuFixed} = this.state
        return (
            <Fragment>
                <Container style={{marginTop: '2em'}}>
                    <Header as='h1'>Lista de compras</Header>
                </Container>

                {/*<Visibility*/}
                {/*onBottomPassed={this.stickTopMenu}*/}
                {/*onBottomVisible={this.unStickTopMenu}*/}
                {/*once={false}*/}
                {/*>*/}
                {/*<Menu/>*/}
                {/*</Visibility>*/}

                <Container>
                    {this.props.children}
                </Container>
            </Fragment>
        )
    }
}

export default App