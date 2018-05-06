import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    Menu as MenuUI,
    Container,
    MenuItem
} from 'semantic-ui-react'

import Colors from '../../util/color'

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: Colors.backgroudColor,
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}


const items = [
    {
        title: "Lista de compras",
        isHeader: true,
    },
    {
        title: "About",
        isHeader: false,
        as: 'a'
    }
]

const Menu = ({fixed = false}) => <MenuUI
    borderless
    fixed={fixed && 'top'}
    style={fixed ? fixedMenuStyle : menuStyle}
>
    <Container text>
        {_.map(items, (value) => {
            return <MenuItem as={value.as || null} header={value.isHeader || false}> {value.title} </MenuItem>
        })}
    </Container>
</MenuUI>

Menu.propTypes = {
    fixed: PropTypes.bool
}

export default Menu;