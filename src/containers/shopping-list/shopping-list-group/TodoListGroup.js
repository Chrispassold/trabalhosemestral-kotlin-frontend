import React, {Component} from 'react'
import {Button, Grid, GridColumn, Icon} from 'semantic-ui-react'
import _ from 'lodash'

import {browserHistory} from 'react-router'

import ProgressListItem from 'components/lists/progress/ProgressListItem'
import {generatedUUID} from "utils/commom";
import CreateListModal from "./create-list-modal/CreateListModal";

const data = [
    {
        id: generatedUUID(),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: generatedUUID(),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: generatedUUID(),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: generatedUUID(),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    },
    {
        id: generatedUUID(),
        title: 'Lista Big Supermercado',
        created: '06/05/2018',
        percent: Math.floor(Math.random() * 100)
    }
]

//TODO: Buscar listas
class TodoListGroup extends Component {

    state = {
        openNew: false
    }

    openNew = () => this.setState({openNew: true})

    closeNew = () => this.setState({openNew: false})

    componentDidMount() {
        // TodoListService.findAll()
        // TodoListService.remove(1)
        // TodoListService.findAll()
    }

    render() {
        const {openNew} = this.state

        return <div>
            <Grid>
                <GridColumn verticalAlign={'middle'} textAlign={'right'}>
                    <Button primary onClick={this.openNew}> <Icon name='add'/> Novo</Button>
                </GridColumn>
            </Grid>
            <Grid columns={3} stackable>
                {_.map(data, (value, index) => <GridColumn key={index}><ProgressListItem data={value}
                                                                                         onClick={() => browserHistory.push(`items/${value.id}`)}/></GridColumn>)}
            </Grid>
            {openNew && <CreateListModal open={openNew} onClose={this.closeNew}/>}
        </div>
    }
}

export default TodoListGroup