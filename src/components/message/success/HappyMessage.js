import React, {Fragment} from 'react'
import {Header} from 'semantic-ui-react'
import Assets from "components/assets/Assets";

const HappyMessage = ({}) => <Fragment>
    <Assets src={'/svg/happy.svg'} size={'tiny'} centered/>
    <Header as={'h2'} textAlign={'center'}>
        Vá se divertir
        <Header.Subheader>Está tudo certo por aqui!</Header.Subheader>
    </Header>
</Fragment>

export default HappyMessage