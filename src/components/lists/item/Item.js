import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react'
import CheckboxCheckGreen from "components/fields/checkbox/CheckboxCheckGreen";
import TodoItemModel from "model/TodoItemModel";
import * as Service from "services/TodoItemService";

class Item extends Component {
    updateStatus = (object) => {
        Service
            .toggleChecked(object)
            .catch(console.error)
            .finally(() => !!this.props.handleSearch && this.props.handleSearch())
    }

    render() {
        const {data, ...rest} = this.props

        delete rest.handleSearch

        return <Segment>
            <Grid>
                <GridRow>
                    <GridColumn verticalAlign={'middle'} width={14}>
                        <CheckboxCheckGreen
                            {...rest}
                            onChange={() => this.updateStatus(data)}
                            name={data.name.replace(' ', '_').concat(`_${data.id}`)}
                            label={data.name}
                            checked={!!data.checked}
                        />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    }
}

Item.propTypes = {
    data: PropTypes.instanceOf(TodoItemModel),
    handleSearch: PropTypes.func
}

export default Item;