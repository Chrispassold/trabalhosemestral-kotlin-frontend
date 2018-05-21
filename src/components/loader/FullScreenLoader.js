import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react'

const style = {
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 10000,
        backgroudColor: 'red'
    }
}

const FullScreenLoader = ({active}) => <Dimmer active={active} inverted>
    <Loader active={active} size={'large'}>Carregando conteúdo...</Loader>
</Dimmer>

export default FullScreenLoader;