import React from 'react'
import PropTypes from 'prop-types'
import {Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react'
import CheckboxCheckGreen from "components/fields/checkbox/CheckboxCheckGreen";
import TodoItemModel from "model/TodoItemModel";

const Item = ({data, ...rest}) => <Segment>
    <Grid>
        <GridRow>
            <GridColumn verticalAlign={'middle'} width={14}>
                <CheckboxCheckGreen {...rest} name={data.name.replace(' ', '_').concat(`_${data.id}`)} label={data.name}
                                    checked={!!data.checked}/>
            </GridColumn>
        </GridRow>
    </Grid>
</Segment>

Item.propTypes = {
    data: PropTypes.instanceOf(TodoItemModel)
}

export default Item;