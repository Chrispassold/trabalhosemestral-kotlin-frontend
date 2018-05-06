import React, {Component} from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import _ from 'lodash'

import ProgressListItem from 'components/lists/progress/ProgressListItem'

const formatGridContainer = {
    marginTop: '50px'
}

class Home extends Component {
    render() {
        return <div style={formatGridContainer}>
            <Grid columns={1} stackable>
                {_.times(10, (index) => <GridColumn key={index}><ProgressListItem/></GridColumn>)}
            </Grid>
        </div>
    }
}

export default Home