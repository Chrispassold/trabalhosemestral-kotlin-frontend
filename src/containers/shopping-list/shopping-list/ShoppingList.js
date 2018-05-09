import React, {Component} from 'react'
import _ from 'lodash'
import {Grid, GridColumn, GridRow, Header, Segment} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";
import {If} from "components/helper";
import ShoppingListItem from "components/lists/item/ShoppingListItem";


class ShoppingList extends Component {
    state = {
        inputLoading: false,
        todo: [],
        done: [{
            label: 'oi'
        }]
    }

    startInputLoading = () => this.setState({inputLoading: true})

    stopInputLoading = () => this.setState({inputLoading: false})

    addData = (value) => {
        const data = this.state.todo
        data.push(value)
        this.setState({todo: data})
    }

    //TODO: buscar itens
    onActionClick = (value) => {
        this.startInputLoading()
        setTimeout(() => {
            this.stopInputLoading()
            this.addData(value)
        }, Math.floor(Math.random() * 1000))
    }


    render() {
        const {inputLoading, todo, done} = this.state

        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>

                    <Header as={'h3'} attached='top' block>
                        Fazer
                    </Header>
                    <Segment attached>

                        <If check={!todo.length}>
                            <Header as={'h2'} textAlign={'center'}>
                                Sem resultados
                                <Header.Subheader>Adicione um item para começar</Header.Subheader>
                            </Header>
                        </If>

                        <If check={!!todo.length}>
                            {_.map(todo, (current, index) => {
                                return <ShoppingListItem key={index} data={current}/>
                            })}
                        </If>
                    </Segment>

                    <Header as={'h3'} attached='top' block>
                        Feito
                    </Header>
                    <Segment attached>
                        <If check={!done.length}>
                            <Header as={'h2'} textAlign={'center'}>
                                Sem resultados
                                <Header.Subheader>Adicione um item para começar</Header.Subheader>
                            </Header>
                        </If>
                        <If check={!!done.length}>
                            {_.map(done, (current, index) => {
                                return <ShoppingListItem key={index} isDone={true} data={current.label}/>
                            })}
                        </If>
                    </Segment>

                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default ShoppingList
