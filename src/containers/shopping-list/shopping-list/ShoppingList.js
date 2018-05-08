import React, {Component} from 'react'
import {Grid, GridColumn, GridRow, Header} from 'semantic-ui-react'
import InputAdd from "components/input/InputAdd";


const data = []

class ShoppingList extends Component {
    state = {
        inputLoading: false
    }

    startInputLoading = () => this.setState({inputLoading: true})

    stopInputLoading = () => this.setState({inputLoading: false})

    //TODO: buscar itens
    onActionClick = (value) => {
        this.startInputLoading()
        setTimeout(() => {
            console.log(value)
            this.stopInputLoading()
        }, Math.floor(Math.random() * 1000))
    }


    render() {
        const {inputLoading} = this.state

        return <Grid columns={9} centered>
            <GridRow>
                <GridColumn width={9}>
                    <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={9}>
                    {data.length === 0 && <Header as={'h2'} textAlign={'center'}>
                        Sem resultados
                        <Header.Subheader>Adicione um item para começar</Header.Subheader>
                    </Header>}
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default ShoppingList
