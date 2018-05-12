import React, {Component} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {Button, Input, Modal, Transition} from 'semantic-ui-react'
import {isEnterPressed} from "../../../../utils/commom";


export default class CreateListModal extends Component {

    state = {
        text: '',
        loading: false,
        errorAnimate: true
    }

    toggleAnimation = () => this.setState({errorAnimate: !this.state.errorAnimate})

    onInputChange = (e) => this.setState({text: !!e.target ? e.target.value.trim() : ''})

    startLoading = () => this.setState({loading: true})

    stopLoading = () => this.setState({loading: false})

    save = () => {
        const {text} = this.state

        if (_.isEmpty(text)) {
            this.toggleAnimation()
            return;
        }

        this.startLoading()
        setTimeout(() => {
            this.stopLoading()
        }, 2000)

        //
        // const model = new TodoListModel({
        //     name: text
        // })
        //
        // Service
        //     .insert(model)
        //     .then(console.log)
        //     .catch(console.error)
    }

    onKeyPressed = (e) => {
        if (isEnterPressed(e)) {
            return this.save()
        }
    }

    render() {
        const {errorAnimate, loading} = this.state
        return <Modal basic closeOnDimmerClick={false} size={'small'} dimmer={true} open={this.props.open}
                      onClose={this.props.onClose}>
            <Modal.Content>
                <Transition animation={'shake'} duration={300} visible={errorAnimate}>
                    <Input autoFocus inverted transparent fluid onKeyPress={this.onKeyPressed} disabled={loading}
                           loading={loading}
                           placeholder={'Ex.: Churras'} size={'massive'}
                           onChange={this.onInputChange}/>
                </Transition>
            </Modal.Content>
            <Modal.Actions>
                <Button inverted color={'red'} icon='cancel' labelPosition='left' content={'NOPE'}
                        onClick={this.props.onClose}/>
                <Button inverted color={'green'} icon='checkmark' labelPosition='right' content='Do it!'
                        onClick={this.save}/>
            </Modal.Actions>
        </Modal>
    }
}

CreateListModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
}