import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react'
import TodoItemModel from "model/TodoItemModel";
import * as Service from "services/TodoItemService";
import CheckBoxItem from "components/fields/checkbox/CheckBoxItem";

class Item extends Component {
    updateStatus = (object) => {
        Service
            .toggleChecked(object)
            .catch(console.error)
            .finally(this.props.onUpdate)
    }

    render() {
        const {data, ...rest} = this.props

        delete rest.onUpdate

        return <Segment>
            <Grid>
                <GridRow>
                    <GridColumn verticalAlign={'middle'} width={14}>
                        <CheckBoxItem
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
    onUpdate: PropTypes.func.isRequired
}

export default Item;