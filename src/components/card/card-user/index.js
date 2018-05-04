import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

const CardUser = ({user}) => <Card>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
    <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>{user.age}</Card.Meta>
    </Card.Content>
    {/*<Card.Content extra>*/}
    {/*<a>*/}
    {/*<Icon name='user'/>*/}
    {/*10 Friends*/}
    {/*</a>*/}
    {/*</Card.Content>*/}
</Card>

export default CardUser