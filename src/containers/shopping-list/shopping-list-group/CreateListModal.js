import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Input, Modal} from 'semantic-ui-react'

const style = {
    input: {
        color: 'rgba(255, 255, 255, 0.87) !important',
    }
}//todo: mudar cor para branco

export default class CreateListModal extends Component {

    render() {
        return <Modal basic size={'small'} dimmer={true} open={this.props.open} onClose={this.props.onClose}>
            <Modal.Content>
                <Input autoFocus transparent fluid placeholder={'Ex.: Churras'}
                       size={'massive'} style={style.input}/>
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