import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from "lodash";
import {Header, Segment} from 'semantic-ui-react'
import {If} from "components/helper/index";
import Item from "components/lists/item/Item";

const DataSegment = ({data, label, onItemChange}) => <Fragment>
    <Header as={'h3'} attached='top' block>
        {label}
    </Header>
    <Segment attached>
        <If check={!data.length}>
            <Header as={'h2'} textAlign={'center'}>
                Sem resultados
                <Header.Subheader>Adicione um item para começar</Header.Subheader>
            </Header>
        </If>
        <If check={!!data.length}>
            {_.map(data, (current, index) => {
                return <Item key={index}
                             isDone={current.checked}
                             data={current.label}
                             onChange={(e) => !!onItemChange && onItemChange(e, current)}
                />
            })}
        </If>
    </Segment>
</Fragment>

DataSegment.propTypes = {
    data: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    onItemChange: PropTypes.func
}

export default DataSegment