import React, {Component} from 'react'
import _ from 'lodash'
import {Grid, GridColumn, GridRow, Header, List} from 'semantic-ui-react'
import InputAdd from "components/input/InputAdd";
import {If} from "components/helper";
import ShoppingListItem from "../../../components/lists/item/ShoppingListItem";


class ShoppingList extends Component {
    state = {
        inputLoading: false,
        data: []
    }

    startInputLoading = () => this.setState({inputLoading: true})

    stopInputLoading = () => this.setState({inputLoading: false})

    addData = (value) => {
        const data = this.state.data
        data.push(value)
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


    render() {
        const {inputLoading, data} = this.state

        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>

                    <If check={data.length === 0}>
                        <Header as={'h2'} textAlign={'center'}>
                            Sem resultados
                            <Header.Subheader>Adicione um item para começar</Header.Subheader>
                        </Header>
                    </If>

                    <If check={data.length > 0}>
                        <List as='ol'>
                            {_.map(data, (current, index) => {
                                return <ShoppingListItem key={index} data={current}/>
                            })}
                        </List>
                    </If>

                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default ShoppingList
