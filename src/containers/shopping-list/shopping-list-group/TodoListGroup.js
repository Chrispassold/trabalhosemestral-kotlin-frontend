import React, {Component} from 'react'
import {Button, Divider, Grid, GridColumn, Icon, Loader} from 'semantic-ui-react'
import _ from 'lodash'

import {browserHistory} from 'react-router'

import ProgressListItem from 'components/lists/progress/ProgressListItem'
import CreateListModal from "./create-list-modal/CreateListModal";
import * as Service from 'services/TodoListService'
import EmptyDataMessage from "components/message/empty/EmptyDataMessage";
import If from "../../../components/helper/If";

const style = {
    completed: {
        opacity: 0.5
    }
}

class TodoListGroup extends Component {

    state = {
        openNew: false,
        data: [],
        loadingSearch: false
    }

    componentDidMount() {
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

    buildItems = (data) => _.map(data, (value, index) => <GridColumn key={index}>
            <ProgressListItem data={value} onClick={() => browserHistory.push(`${value.id}/items`)}/>
        </GridColumn>
    )

    openNew = () => this.setState({openNew: true})

    closeNew = () => {
        this.setState({openNew: false})
        this.search()
    }

    startSearchLoading = () => this.setState({searchLoading: true})

    stopSearchLoading = () => this.setState({searchLoading: false})

    filterCompleted = (value) => value.percent >= 100

    filterNotCompleted = (value) => !this.filterCompleted(value)

    render() {
        const {openNew, data, loadingSearch} = this.state

        if (loadingSearch) {
            return <Loader active={loadingSearch}/>
        }

        const dataCompleted = data.filter(this.filterCompleted)
        const dataNotCompleted = data.filter(this.filterNotCompleted)

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
                <If check={dataNotCompleted.length > 0}>
                    <Grid columns={3} stackable>
                        {this.buildItems(dataNotCompleted)}
                    </Grid>
                </If>
                <If check={dataCompleted.length > 0}>
                    <If check={dataNotCompleted.length > 0} content={<Divider section/>}/>
                    <Grid columns={3} stackable style={style.completed}>
                        {this.buildItems(dataCompleted)}
                    </Grid>
                </If>
            </If>
            {openNew && <CreateListModal open={openNew} onClose={this.closeNew}/>}
        </div>
    }
}

export default TodoListGroup