import React from 'react'
import PropTypes from 'prop-types'
import {Image} from 'semantic-ui-react'

const Assets = ({src, ...others}) => <Image {...others} src={process.env.PUBLIC_URL + '/assets' + src}/>

Assets.propTypes = {
    src: PropTypes.string.isRequired
}

export default Assets