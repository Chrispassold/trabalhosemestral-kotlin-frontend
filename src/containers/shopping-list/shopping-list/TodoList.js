import React, {Component} from 'react'
import {Grid, GridColumn, GridRow} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";
import * as Service from "services/TodoItemService"
import * as ServiceTodoList from "services/TodoListService"
import _ from "lodash";
import Item from "components/lists/item/Item";
import TodoListItems from "./TodoListItems";
import OmgMessage from "components/message/error/OmgMessage";
import If from "components/helper/If";
import TodoItemModel from "model/TodoItemModel";

class TodoList extends Component {
    state = {
        inputLoading: false,
        data: [],
        todoList: undefined,
        error: false,
        loadingSearch: false
    }

    componentDidMount() {
        this.getTodoList()
            .then(() => {
                return this.search()
            })
            .catch((error) => {
                this.setState({error: true})
            })
    }

    getTodoList = () => {
        if (!_.isEmpty(this.state.todoList)) {
            return new Promise(() => this.state.todoList)
        }

        return ServiceTodoList
            .findById(this.props.params.id)
            .then((response) => {
                if (_.isEmpty(response)) return new Promise.reject(new Error("Todo list not found"))
                return response
            }).then(() => {
                this.setState({todoList: response})
            });
    }

    search = () => {
        this.startSearchLoading()
        return Service
            .findAll(this.state.todoList)
            .then((arrResponse) => this.setState({data: arrResponse}))
            .finally(this.stopSearchLoading)
    }

    startInputLoading = () => this.setState({inputLoading: true})

    stopInputLoading = () => this.setState({inputLoading: false})

    startSearchLoading = () => this.setState({loadingSearch: true})

    stopSearchLoading = () => this.setState({loadingSearch: false})

    onActionClick = (value) => {
        this.startInputLoading()

        this.getTodoList().then((todoList) => {
            const object = new TodoItemModel({name: value, todoList: todoList})
            Service
                .insert(object)
                .then(() => this.search())
                .finally(this.stopInputLoading)
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
        const {inputLoading, data, error, loadingSearch} = this.state


        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    <If check={error}>
                        <OmgMessage/>
                    </If>

                    <If check={!error}>
                        <TodoListItems data={data} loading={loadingSearch}/>
                    </If>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default TodoList
