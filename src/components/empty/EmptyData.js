import React from 'react'
import {Header} from 'semantic-ui-react'

const EmptyData = ({}) => <Header as={'h2'} textAlign={'center'}>
    Sem resultados
    <Header.Subheader>Adicione um item para começar</Header.Subheader>
</Header>

export default EmptyData