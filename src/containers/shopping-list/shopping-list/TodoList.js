import React, {Component} from 'react'
import {Grid, GridColumn, GridRow,} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";
import * as Service from "services/TodoItemService"
import * as ServiceTodoList from "services/TodoListService"
import _ from "lodash";
import TodoListItems from "./TodoListItems";
import TodoItemModel from "model/TodoItemModel";
import EditableHeader from "components/fields/header/EditableHeader";
import FullScreenLoader from "../../../components/loader/FullScreenLoader";

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

    getIdTodoList = () => this.props.params.id

    refreshTodoList = () => {
        this.setState({todoList: undefined})
        return ServiceTodoList
            .findById(this.getIdTodoList())
            .then((response) => {
                if (_.isEmpty(response)) return new Promise.reject(new Error("Todo list not found"))
                return response
            }).then((response) => {
                this.setState({todoList: response})
                return response
            });
    }

    getTodoList = () => {
        if (!_.isEmpty(this.state.todoList)) {
            return new Promise((resolve) => {
                return resolve(this.state.todoList)
            })
        }

        return this.refreshTodoList()
    }

    search = () => {
        this.startSearchLoading()
        return Service
            .findAll(this.state.todoList)
            .then((arrResponse) => this.setState({data: arrResponse}))
            .finally(this.stopSearchLoading)
    }

    onAdd = (value) => {
        this.startInputLoading()

        this.getTodoList()
            .then((todoList) => {
                const object = new TodoItemModel({name: value, todoList: todoList})
                return Service
                    .insert(object)
                    .then(() => this.search())
            })
            .finally(this.stopInputLoading)
            .finally(() => {
                if (this.inputAddRef) {
                    this.inputAddRef.focus()
                }
            })

    }

    onTodoListUpdate = (text) => {
        this.getTodoList()
            .then((todoList) => {
                todoList.name = text
                return ServiceTodoList.update(this.getIdTodoList(), todoList)
                    .then(this.refreshTodoList)
            })
    }

    startInputLoading = () => !this.state.inputLoading && this.setState({inputLoading: true})

    stopInputLoading = () => this.state.inputLoading && this.setState({inputLoading: false})

    startSearchLoading = () => !this.state.searchLoading && this.setState({searchLoading: true})

    stopSearchLoading = () => this.state.searchLoading && this.setState({searchLoading: false})

    render() {
        const {inputLoading, todoList, data, searchLoading} = this.state

        if (!todoList) {
            return <FullScreenLoader/>
        }

        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <EditableHeader text={todoList.name} onSave={this.onTodoListUpdate}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd ref={(ref) => this.inputAddRef = ref} loading={inputLoading}
                              onRequestHandle={this.onAdd}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    <TodoListItems data={data} loading={searchLoading} onItemUpdate={this.search}/>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default TodoList
