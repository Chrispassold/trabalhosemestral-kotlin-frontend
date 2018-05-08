import React from 'react'
import PropTypes from 'prop-types'
import {Checkbox, Segment} from 'semantic-ui-react'

const ShoppingListItem = ({data, onClick}) => <Segment>
    <Checkbox label={data}/>
</Segment>

ShoppingListItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
}

export default ShoppingListItem;