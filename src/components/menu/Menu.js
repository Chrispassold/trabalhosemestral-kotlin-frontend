import React from 'react'
import _ from 'lodash'
import {Container, Menu as MenuUI, MenuItem} from 'semantic-ui-react'
import Assets from 'components/assets/Assets'

const items = [
    {
        title: "Sair",
        as: 'a',
        href: '/signout',
        position: 'right'
    }
]

const Menu = () => <MenuUI
    borderless
    fixed='top' inverted
>
    <Container>
        <MenuItem as='a' header href={'/'}>
            <Assets
                size='mini'
                src={'/logo.png'}
                style={{marginRight: '1.5em'}}
            />

            To-Do
        </MenuItem>
        {_.map(items, (value, index) => {
            return <MenuItem key={index} as={value.as || null} position={value.position}
                             href={!!value.href ? value.href : '#'}> {value.title} </MenuItem>
        })}
    </Container>
</MenuUI>

export default Menu;