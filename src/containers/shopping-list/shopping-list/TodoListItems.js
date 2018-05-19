import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {Divider, Loader} from 'semantic-ui-react'
import EmptyDataMessage from "components/message/empty/EmptyDataMessage";
import If from "components/helper/If";
import HappyMessage from "components/message/success/HappyMessage";
import Item from "components/lists/item/Item";


export default class TodoListItems extends Component {

    filterOnlyChecked = (data) => !!data.checked

    filterOnlyNotChecked = (data) => !data.checked

    shouldComponentUpdate(nextProps) {
        if (!_.isEqual(nextProps.data, this.props.data)) {
            return true;
        }

        if (nextProps.loading !== this.props.loading) {
            return true;
        }

        return false;
    }

    buildItems = (data) => {
        return _.map(data, (current) => {
            return <Item key={current.id}
                         data={current}
                         onUpdate={this.props.onItemUpdate}
            />
        })
    }

    render() {
        const {data, loading = false} = this.props

        if (loading) {
            return <Loader active={loading}/>
        }

        if (!Array.isArray(data)) {
            console.error("Data is not an array")
            return null;
        }

        const doing = data.filter(this.filterOnlyNotChecked)
        const done = data.filter(this.filterOnlyChecked)


        if (!data.length) {
            return <EmptyDataMessage/>
        }

        return <Fragment>
            <If check={!doing.length}>
                <HappyMessage/>
            </If>

            <If check={!!doing.length}>
                {this.buildItems(doing)}
            </If>

            <If check={!!done.length && !!doing.length}>
                <Divider section/>
            </If>

            <If check={!!done.length}>
                {this.buildItems(done)}
            </If>
        </Fragment>
    }
}

TodoListItems.propTypes = {
    data: PropTypes.array.isRequired,
    onItemUpdate: PropTypes.func.isRequired,
    loading: PropTypes.bool,
}