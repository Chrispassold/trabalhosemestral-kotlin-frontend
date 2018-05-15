import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from "lodash";
import {Header, Segment} from 'semantic-ui-react'
import {If} from "components/helper/index";
import Item from "components/lists/item/Item";
import EmptyData from "components/empty/EmptyData";

const DataSegment = ({data, label, onItemChange}) => <Fragment>
    <Header as={'h3'} attached='top' block>
        {label}
    </Header>
    <Segment attached>
        <If check={!data.length}>
            <EmptyData/>
        </If>
        <If check={!!data.length}>
            {_.map(data, (current, index) => {
                return <Item key={index}
                             data={current}
                             onChange={(e) => !!onItemChange && onItemChange(e, current)}
                />
            })}
        </If>
    </Segment>
</Fragment>

DataSegment.propTypes = {
    data: PropTypes.array.isRequired,
    onItemChange: PropTypes.func
}

export default DataSegment