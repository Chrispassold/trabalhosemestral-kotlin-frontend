import React from 'react'
import PropTypes from 'prop-types'

const If = ({check, children}) => check ? children : null

If.propTypes = {
    check: PropTypes.bool.isRequired
}

export default If