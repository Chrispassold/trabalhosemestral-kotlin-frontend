import React, {Component} from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import InputAdd from "components/input/InputAdd";


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
            <GridColumn width={9}>
                <InputAdd loading={inputLoading} onRequestHandle={this.onActionClick}/>
            </GridColumn>
        </Grid>
    }
}


export default ShoppingList
