import React from 'react'
import {Image} from 'semantic-ui-react'

const Assets = ({src, ...others}) => <Image {...others} src={process.env.PUBLIC_URL + '/assets' + src}/>

export default Assets