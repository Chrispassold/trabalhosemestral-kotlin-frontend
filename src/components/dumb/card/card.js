import React from 'react';
import {Grid, Segment} from 'semantic-ui-react'

const Card = ({children}) => {
    return <Grid.Column>
        <Segment>{children}</Segment>
    </Grid.Column>;
};

export default Card;