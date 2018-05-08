import React, {Component} from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import _ from 'lodash'

import {browserHistory} from 'react-router'

import ProgressListItem from 'components/lists/progress/ProgressListItem'

const data = [
    {
        id: Math.floor(Math.random() * 100),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: Math.floor(Math.random() * 100),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: Math.floor(Math.random() * 100),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: Math.floor(Math.random() * 100),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: Math.floor(Math.random() * 100),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    }
]

//TODO: Buscar listas
class ShoppingListGroup extends Component {
    render() {
        return <div>
            <Grid columns={3} stackable>
                {_.map(data, (value, index) => <GridColumn key={index}><ProgressListItem data={value}
                                                                                         onClick={() => browserHistory.push(`items/${value.id}`)}/></GridColumn>)}
            </Grid>
        </div>
    }
}

export default ShoppingListGroup