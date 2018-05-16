import React, {Component} from 'react'
import {Grid, GridColumn, GridRow} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";
import * as Service from "services/TodoItemService"
import * as ServiceTodoList from "services/TodoListService"
import DataSegment from 'components/lists/item/DataSegment'
import {generatedUUID} from "../../../utils/commom";

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

    render() {
        const {inputLoading, data} = this.state

        console.log(data)

        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    <DataSegment data={data.filter(this.filterOnlyNotChecked)} label={'Fazer'}
                                 handleSearch={this.search}/>
                    <DataSegment data={data.filter(this.filterOnlyChecked)} label={'Feito'}
                                 handleSearch={this.search}/>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default TodoList
