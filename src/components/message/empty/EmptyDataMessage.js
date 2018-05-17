import React, {Fragment} from 'react'
import {Header} from 'semantic-ui-react'
import Assets from "components/assets/Assets";

const EmptyDataMessage = ({}) => <Fragment>
    <Assets src={'/svg/ops.svg'} size={'tiny'} centered/>
    <Header as={'h2'} textAlign={'center'}>
        Sem resultados
        <Header.Subheader>Adicione um item para começar</Header.Subheader>
    </Header>
</Fragment>

export default EmptyDataMessage