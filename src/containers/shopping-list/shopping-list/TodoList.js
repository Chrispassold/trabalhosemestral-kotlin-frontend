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

class TodoList extends Component {
    state = {
        inputLoading: false,
        data: [],
        todoList: undefined,
        error: false,
        loadingInitialData: false
    }

    componentDidMount() {
        this.getTodoList()
            .then((response) => {
                if (!response) return new Promise.reject(new Error("Todo list not found"))
                this.search()
            })
            .catch((error) => {
                console.error(error)
                this.setState({error: true})
            })
    }

    getTodoList = () => {
        if (this.state.todoList) {
            return new Promise(() => this.state.todoList)
        }

        return ServiceTodoList
            .findById(this.props.params.id)
            .then((response) => {
                this.setState({todoList: response})
                return response
            });
    }

    search = () => {
        Service
            .findAll(this.state.todoList)
            .then((arrResponse) => this.setState({data: arrResponse}))
    }

    startInputLoading = () => this.setState({inputLoading: true})

    stopInputLoading = () => this.setState({inputLoading: false})

    //TODO: buscar itens
    onActionClick = (value) => {
        this.startInputLoading()
        setTimeout(() => {
            this.stopInputLoading()
        }, Math.floor(Math.random() * 1000))
    }

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
        const {inputLoading, data, error, loadingInitialData} = this.state


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
                        <TodoListItems data={data} loading={loadingInitialData}/>
                    </If>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default TodoList
