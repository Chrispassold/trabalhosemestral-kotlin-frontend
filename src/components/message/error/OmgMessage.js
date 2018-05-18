import React, {Fragment} from 'react'
import {Header} from 'semantic-ui-react'
import Assets from "components/assets/Assets";

const OmgMessage = ({}) => <Fragment>
    <Assets src={'/svg/omg.svg'} size={'tiny'} centered/>
    <Header as={'h2'} textAlign={'center'}>
        Eita
        <Header.Subheader>Alguma coisa errada não esta certa</Header.Subheader>
    </Header>
</Fragment>

export default OmgMessage