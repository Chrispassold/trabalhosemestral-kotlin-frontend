import React from 'react'
import {Card, Image, Progress} from 'semantic-ui-react'

const ProgressListItem = ({data}) => <Card.Group>
    <Card fluid>
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
            <Progress attached={'bottom'} percent={data.percent} success={true}/>
        </Card.Content>
    </Card>
</Card.Group>

export default ProgressListItem;