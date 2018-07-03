import React from 'react'
import PropTypes from 'prop-types'
import {Card, Progress} from 'semantic-ui-react'
import {humanize} from "utils/date";


const progressStyle = {
    marginBottom: 0
}
//todo: deleção ou completar botoes de acao
const ProgressListItem = ({data, onClick}) => <Card.Group>
    <Card fluid onClick={() => !!onClick && onClick()}>
        <Card.Content>
            {/*<RandomAvatarImage floated='right' size='mini'/>*/}
            <Card.Header>
                {data.name}
            </Card.Header>
            <Card.Meta>
                {!!data.updatedAt && `Atualizado em ${humanize(data.updatedAt)}`}
                {!data.updatedAt && `Criado em ${humanize(data.createdAt)}`}
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Progress percent={!!data.percent ? data.percent : 0} color={data.percent < 100 ? 'blue' : 'green'}
                      size={'tiny'} style={progressStyle}/>
        </Card.Content>
        {/*<Card.Content extra>*/}
        {/*<div className='ui two buttons'>*/}
        {/*<Button basic color='green'>Terminar</Button>*/}
        {/*<Button basic color='red'>Excluir</Button>*/}
        {/*</div>*/}
        {/*</Card.Content>*/}
    </Card>
</Card.Group>

ProgressListItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default ProgressListItem;