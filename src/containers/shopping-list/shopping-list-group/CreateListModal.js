import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Input, Modal} from 'semantic-ui-react'

export default class CreateListModal extends Component {

    render() {
        return <Modal basic size={'small'} dimmer={true} open={this.props.open} onClose={this.props.onClose}>
            <Modal.Header>Nova lista</Modal.Header>
            <Modal.Content>
                <Input/>
            </Modal.Content>
            <Modal.Actions>
                <Button inverted color={'red'} content={'NOPE'} onClick={this.props.onClose}/>
                <Button inverted color={'green'} icon='checkmark' labelPosition='right' content='Do it!'/>
            </Modal.Actions>
        </Modal>
    }
}

CreateListModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onRequest: PropTypes.func.isRequired,
}