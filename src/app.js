import React, {Component} from 'react'
import {Container, Grid} from 'semantic-ui-react'

import 'styling/semantic.less'

class App extends Component {
    render() {
        return (
            <Grid className={"grid-container"}>
                <Container id={"content-container"}>
                    {this.props.children}
                </Container>
            </Grid>
        )
    }
}

export default App