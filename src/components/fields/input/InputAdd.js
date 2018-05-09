import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'semantic-ui-react'

class InputAdd extends Component {

    state = {
        text: ''
    }

    isAddLoading = () => {
        return this.props.loading
    }

    onAddChange = (event, data) => {
        if (this.isAddLoading()) return;
        this.setState({text: data.value}, () => {
            if (this.state.text === null || this.state.text.length === 0) {
                this.props.onRequestHandle(this.state.text)
            }
        })
    }

    onActionClick = () => {
        if (!this.state.text.length || this.isAddLoading()) return;

        this.props.onRequestHandle(this.state.text)
    }

    onActionKeyPress = (e) => {
        if (this.isAddLoading()) return;

        const key = e.keyCode || e.which

        if (key === 13) { //enter
            this.onActionClick(e)
        }
    }

    render() {
        const {loading = false} = this.props
        return <Input fluid
                      loading={loading}
                      disabled={loading}
                      icon='add'
                      iconPosition={'left'}
                      action={{content: 'Adicionar', onClick: this.onActionClick}}
                      onChange={this.onAddChange}
                      onKeyPress={this.onActionKeyPress}
        />
    }
}

InputAdd.propTypes = {
    onRequestHandle: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default InputAdd
