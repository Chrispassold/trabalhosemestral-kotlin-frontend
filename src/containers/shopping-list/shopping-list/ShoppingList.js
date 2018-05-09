import React, {Component} from 'react'
import {Grid, GridColumn, GridRow} from 'semantic-ui-react'
import InputAdd from "components/fields/input/InputAdd";

import DataSegment from 'components/lists/item/DataSegment'
import {generatedUUID} from "../../../utils/commom";

class ShoppingList extends Component {
    state = {
        inputLoading: false,
        data: [{
            id: generatedUUID(),
            label: 'oi',
            checked: true
        }]
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

    filterOnlyDone = (data) => !!data.checked

    filterOnlyNotDone = (data) => !data.checked

    //todo: salvar
    save = (e, object) => {

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
                    <DataSegment data={data.filter(this.filterOnlyNotDone)} label={'Fazer'} onItemChange={console.log}/>
                    <DataSegment data={data.filter(this.filterOnlyDone)} label={'Feito'} onItemChange={console.log}/>
                </GridColumn>
            </GridRow>
        </Grid>
    }
}


export default ShoppingList
