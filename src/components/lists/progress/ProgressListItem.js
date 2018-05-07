import React from 'react'
import PropTypes from 'prop-types'
import {Card, Image, Progress} from 'semantic-ui-react'

const progressStyle = {
    marginBottom: 0
}

const ProgressListItem = ({data, onClick}) => <Card.Group>
    <Card fluid onClick={() => !!onClick && onClick()}>
        <Card.Content>
            <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg'/>
            <Card.Header>
                {data.title}
            </Card.Header>
            <Card.Meta>
                Criado em {data.created}
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Progress percent={data.percent} success size={'tiny'} style={progressStyle}/>
        </Card.Content>
    </Card>
</Card.Group>

ProgressListItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default ProgressListItem;