import React from 'react'
import {Message} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TextErrorMessage = ({header = 'Eita!', content = 'Alguma coisa errada não esta certa', list = []}) => <Message
    error={true}
    header={header}
    content={list.length > 0 ? undefined : content}
    list={list}
/>

TextErrorMessage.propTypes = {
    header: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default TextErrorMessage