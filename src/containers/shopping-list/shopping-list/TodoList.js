import React, {Component} from 'react'
import {Divider, Grid, GridColumn, GridRow} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";
import * as Service from "services/TodoItemService"
import * as ServiceTodoList from "services/TodoListService"
import {generatedUUID} from "utils/commom";
import _ from "lodash";
import Item from "components/lists/item/Item";
import EmptyDataMessage from "components/message/empty/EmptyDataMessage";
import If from "components/helper/If";
import HappyMessage from "components/message/alright/HappyMessage";

class TodoList extends Component {
    state = {
        inputLoading: false,
        data: []
    }

    componentDidMount() {
        this.search()
    }

    getTodoList = () => ServiceTodoList.findById(this.props.params.id)

    search = () => {
        this.getTodoList().then((todoList) => {
            Service
                .findAll(todoList)
                .then((arrResponse) => this.setState({data: arrResponse}))
        })
    }

    startInputLoading = () => this.setState({inputLoading: true})

    stopInputLoading = () => this.setState({inputLoading: false})

    addData = (value) => {
        const data = this.state.data
        data.push({
            id: generatedUUID(),
            label: value,
            checked: false
        })
        this.setState({data})
    }

    //TODO: buscar itens
    onActionClick = (value) => {
        this.startInputLoading()
        setTimeout(() => {
            this.stopInputLoading()
            this.addData(value)
        }, Math.floor(Math.random() * 1000))
    }

    filterOnlyChecked = (data) => !!data.checked

    filterOnlyNotChecked = (data) => !data.checked

    save = (e, object) => {
        this.getTodoList().then((todoList) => {
            object.todoList = todoList
            Service.insert(object).then(console.log)
        })
    }

    buildItems = (data) => {
        return _.map(data, (current) => {
            return <Item key={current.id}
                         data={current}
                         handleSearch={this.search}
            />
        })
    }

    render() {
        const {inputLoading, data} = this.state
        const dataEmpty = !data.length
        const doing = data.filter(this.filterOnlyNotChecked)
        const done = data.filter(this.filterOnlyChecked)

        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    <If check={dataEmpty}>
                        <EmptyDataMessage/>
                    </If>

                    <If check={!dataEmpty && !doing.length}>
                        <HappyMessage/>
                    </If>

                    <If check={!!doing.length}>
                        {this.buildItems(doing)}
                    </If>

                    <If check={!!data.length}>
                        <Divider section/>
                    </If>

                    <If check={!!done.length}>
                        {this.buildItems(done)}
                    </If>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default TodoList
