import React, {Component} from 'react'
import {Button, Grid, GridColumn, Icon, Loader} from 'semantic-ui-react'
import _ from 'lodash'

import {browserHistory} from 'react-router'

import ProgressListItem from 'components/lists/progress/ProgressListItem'
import CreateListModal from "./create-list-modal/CreateListModal";
import * as Service from 'services/TodoListService'
import EmptyDataMessage from "components/message/empty/EmptyDataMessage";
import If from "../../../components/helper/If";

class TodoListGroup extends Component {

    state = {
        openNew: false,
        data: [],
        loadingSearch: false
    }

    openNew = () => this.setState({openNew: true})

    closeNew = () => {
        this.setState({openNew: false})
        this.search()
    }

    search = () => {
        this.startSearchLoading()
        Service.findAll()
            .then((responseModel) => {
                this.setState({data: responseModel})
            })
            .finally(this.stopSearchLoading)

    }

    startSearchLoading = () => this.setState({loadingSearch: true})

    stopSearchLoading = () => this.setState({loadingSearch: false})

    componentDidMount() {
        this.search()
    }

    render() {
        const {openNew, data, loadingSearch} = this.state

        if (loadingSearch) {
            return <Loader active={loadingSearch}/>
        }

        return <div>
            <Grid>
                <GridColumn verticalAlign={'middle'} textAlign={'right'}>
                    <Button primary onClick={this.openNew}> <Icon name='add'/> Novo</Button>
                </GridColumn>
            </Grid>

            <If check={_.isEmpty(data)}>
                <EmptyDataMessage/>
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