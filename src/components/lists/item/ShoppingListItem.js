import React from 'react'
import PropTypes from 'prop-types'
import {Segment} from 'semantic-ui-react'
import CheckboxCheckGreen from "components/fields/checkbox/CheckboxCheckGreen";

const ShoppingListItem = ({data, isDone = false, onClick}) => <Segment>
    <CheckboxCheckGreen label={data} checked={isDone}/>
</Segment>

ShoppingListItem.propTypes = {
    data: PropTypes.any,
    onClick: PropTypes.func
}

export default ShoppingListItem;