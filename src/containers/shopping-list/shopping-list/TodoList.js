import React, {Component} from 'react'
import {Grid, GridColumn, GridRow} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";
import * as Service from "services/TodoItemService"
import * as ServiceTodoList from "services/TodoListService"
import _ from "lodash";
import TodoListItems from "./TodoListItems";
import TodoItemModel from "model/TodoItemModel";

class TodoList extends Component {
    state = {
        inputLoading: false,
        data: [],
        todoList: undefined,
        error: false,
        searchLoading: true
    }

    componentDidMount() {
        this.getTodoList()
            .then(() => {
                return this.search()
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
            }).then((response) => {
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

    startSearchLoading = () => this.setState({searchLoading: true})

    stopSearchLoading = () => this.setState({searchLoading: false})

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

    render() {
        const {inputLoading, data, searchLoading} = this.state
        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    <TodoListItems data={data} loading={searchLoading}/>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default TodoList
