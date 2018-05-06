import React from 'react'
import {Grid, GridColumn, Header} from 'semantic-ui-react';

const NotFound = () => <Grid
    textAlign='center'
    style={{height: '100%'}}
    verticalAlign='middle'
>
    <GridColumn style={{maxWidth: 450, margin: 50}}>
        <Header as='h2' textAlign='center'>
            Opss.. This page is not found!
        </Header>
    </GridColumn>
</Grid>

export default NotFound