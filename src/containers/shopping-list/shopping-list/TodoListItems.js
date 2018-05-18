import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Divider, Loader} from 'semantic-ui-react'
import EmptyDataMessage from "components/message/empty/EmptyDataMessage";
import If from "components/helper/If";
import HappyMessage from "components/message/alright/HappyMessage";

export default class TodoListItems extends Component {

    filterOnlyChecked = (data) => !!data.checked

    filterOnlyNotChecked = (data) => !data.checked

    render() {
        const {data, loading = false} = this.props.data

        if (loading) {
            return <Loader active={this.prop.loading}/>
        }

        if (!Array.isArray(data)) {
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
    loading: PropTypes.bool
}