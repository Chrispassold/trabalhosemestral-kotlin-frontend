import React from 'react'
import PropTypes from 'prop-types'
import {Transition} from 'semantic-ui-react'

const Shake = ({visible, duration = 300, children}) => <Transition animation={'shake'} duration={duration}
                                                                   visible={visible}>
    {children}
</Transition>

Shake.propTypes = {
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
}

export default Shake