import React from 'react'
import _ from 'lodash'
import {Container, Menu as MenuUI, MenuItem} from 'semantic-ui-react'
import Assets from 'components/assets/Assets'

import {Redirect} from 'react-router'

const items = [
    {
        title: "Login",
        as: 'a',
        href: '/login'
    }
]

const Menu = () => <MenuUI
    borderless
    fixed='top' inverted
>
    <Container>
        <MenuItem as='a' header onClick={() => <Redirect to={'/'}/>}>
            <Assets
                size='mini'
                src={'/logo.png'}
                style={{marginRight: '1.5em'}}
            />

            Lista de compras
        </MenuItem>
        {_.map(items, (value, index) => {
            return <MenuItem key={index} as={value.as || null}
                             href={!!value.href ? value.href : '#'}> {value.title} </MenuItem>
        })}
    </Container>
</MenuUI>

export default Menu;