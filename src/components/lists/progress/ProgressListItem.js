import React from 'react'
import {Header, Icon, Label, Progress, Segment} from 'semantic-ui-react'

const ProgressListItem = () => <Segment>
    <Header as={'h4'}>Compras BIG</Header>
    <Progress size={'medium'} attached={'bottom'} percent={Math.floor(Math.random() * 100)} success={true}/>
    <Label image size={'mini'}>
        <img src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg'/>
        Christian
    </Label>
    <Label size={'mini'}>
        <Icon name='calendar'/> 06/05/2018
    </Label>


</Segment>

export default ProgressListItem;