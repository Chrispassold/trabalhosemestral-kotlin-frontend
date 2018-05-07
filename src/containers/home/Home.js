import React, {Component} from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import _ from 'lodash'

import ProgressListItem from 'components/lists/progress/ProgressListItem'

const formatGridContainer = {
    marginTop: '50px'
}

const data = [
    {
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    }
]


class Home extends Component {
    render() {
        return <div style={formatGridContainer}>
            <Grid columns={3} stackable>
                {_.map(data, (value, index) => <GridColumn key={index}><ProgressListItem data={value}/></GridColumn>)}
            </Grid>
        </div>
    }
}

export default Home