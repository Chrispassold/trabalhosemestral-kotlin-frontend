import React from 'react'
import PropTypes from 'prop-types'

const If = ({check, children, content}) => check ? (!!content ? content : children) : null

If.propTypes = {
    check: PropTypes.bool.isRequired,
    content: PropTypes.node
}

export default If