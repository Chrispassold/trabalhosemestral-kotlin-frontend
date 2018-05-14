import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'semantic-ui-react'
import {isEnterPressed} from "utils/commom";
import Shake from "components/animations/Shake";

class InputAdd extends Component {

    state = {
        text: '',
        errorToggle: true
    }

    isAddLoading = () => {
        return this.props.loading
    }

    onAddChange = (event, data) => {
        if (this.isAddLoading()) return;
        this.setState({text: data.value}, () => {
            if (this.state.text.length === 0) {
                if (this.props.onClear) {
                    this.props.onClear()
                }
            }
        })
    }

    clearText = () => {
        this.setState({text: ''})
    }

    onActionClick = (e) => {

        !!e && e.preventDefault()

        if (this.isAddLoading()) return;

        const {text} = this.state

        if (!!text) {
            this.props.onRequestHandle(text)
        } else {
            this.toggleAnimation()
        }
    }

    onActionKeyPress = (e) => {
        if (this.isAddLoading()) return;

        if (isEnterPressed(e)) {
            this.onActionClick(e)
        }
    }

    toggleAnimation = () => this.setState({errorToggle: !this.state.errorToggle})

    render() {
        const {loading = false, autoFocus = true} = this.props
        return <Shake visible={this.state.errorToggle}>
            <Input fluid
                   autoFocus={autoFocus}
                   loading={loading}
                   disabled={loading}
                   defaultValue={this.state.text}
                   icon='add'
                   iconPosition={'left'}
                   action={{content: 'Adicionar', onClick: this.onActionClick, primary: true}}
                   onChange={this.onAddChange}
                   onKeyPress={this.onActionKeyPress}
            />
        </Shake>
    }
}

InputAdd.propTypes = {
    onRequestHandle: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    loading: PropTypes.bool,
    autoFocus: PropTypes.bool,
}

export default InputAdd
