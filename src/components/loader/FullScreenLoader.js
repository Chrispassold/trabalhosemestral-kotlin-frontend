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

const FullScreenLoader = ({active, message = "Carregando conteúdo..."}) => <Dimmer active={active} inverted>
    <Loader active={active} size={'large'}>{message}</Loader>
</Dimmer>

export default FullScreenLoader;