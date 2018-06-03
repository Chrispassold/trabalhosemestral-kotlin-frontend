import React from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Loader} from 'semantic-ui-react'

const FullScreenLoader = ({active = true, message = 'Carregando conteúdo...'}) => <Dimmer active={active} inverted>
    <Loader active={active} size={'large'}>{message}</Loader>
</Dimmer>

FullScreenLoader.propTypes = {
    active: PropTypes.bool
}

export default FullScreenLoader;