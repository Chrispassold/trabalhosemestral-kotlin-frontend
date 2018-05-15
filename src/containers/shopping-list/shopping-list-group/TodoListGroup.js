import React, {Component} from 'react'
import {Button, Grid, GridColumn, Icon} from 'semantic-ui-react'
import _ from 'lodash'

import {browserHistory} from 'react-router'

import ProgressListItem from 'components/lists/progress/ProgressListItem'
import CreateListModal from "./create-list-modal/CreateListModal";
import * as Service from 'services/TodoListService'
import EmptyData from "components/empty/EmptyData";
import If from "../../../components/helper/If";

class TodoListGroup extends Component {

    state = {
        openNew: false,
        data: []
    }

    openNew = () => this.setState({openNew: true})

    closeNew = () => {
        this.setState({openNew: false})
        this.search()
    }

    search = () => {
        Service.findAll()
            .then((responseModel) => {
                console.log(responseModel)
                this.setState({data: responseModel})
            })

    }

    componentDidMount() {
        this.search()
    }

    render() {
        const {openNew, data} = this.state

        return <div>
            <Grid>
                <GridColumn verticalAlign={'middle'} textAlign={'right'}>
                    <Button primary onClick={this.openNew}> <Icon name='add'/> Novo</Button>
                </GridColumn>
            </Grid>

            <If check={_.isEmpty(data)}>
                <EmptyData/>
            </If>

            <If check={!_.isEmpty(data)}>
                <Grid columns={3} stackable>
                    {_.map(data, (value, index) => <GridColumn key={index}>
                            <ProgressListItem data={value} onClick={() => browserHistory.push(`${value.id}/items`)}/>
                        </GridColumn>
                    )}
                </Grid>
            </If>
            {openNew && <CreateListModal open={openNew} onClose={this.closeNew}/>}
        </div>
    }
}

export default TodoListGroup