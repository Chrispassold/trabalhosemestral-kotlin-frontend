import React from 'react'
import PropTypes from 'prop-types'
import {Grid, GridColumn, GridRow, Icon, Segment} from 'semantic-ui-react'
import CheckboxCheckGreen from "components/fields/checkbox/CheckboxCheckGreen";

const ShoppingListItem = ({data, isDone = false, onChange}) => <Segment>
    <Grid>
        <GridRow>
            <GridColumn verticalAlign width={15}>
                <CheckboxCheckGreen label={data} defaultChecked={isDone} onChange={onChange}/>
            </GridColumn>
            <GridColumn verticalAlign textAlign={'right'}>
                <Icon size={'small'} floated={'right'} name='delete'/>
            </GridColumn>
        </GridRow>
    </Grid>
</Segment>

ShoppingListItem.propTypes = {
    data: PropTypes.any,
    onClick: PropTypes.func
}

export default ShoppingListItem;