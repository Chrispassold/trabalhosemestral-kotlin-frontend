import React from 'react'
import {Container, Grid, Header, Progress} from 'semantic-ui-react'

import 'styling/semantic.less'
import Card from "./components/dumb/card/card";

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}

const App = () => (
    <div>
        <Container id={"root"}>
            <Header
                as='h3'
                content='Lista de compras'
                style={style.h3}
                textAlign='center'
            />
            <Grid container columns={1}>
                <Card>
                    <Progress percent={79} success/>
                </Card>
            </Grid>
        </Container>
    </div>
)

export default App
