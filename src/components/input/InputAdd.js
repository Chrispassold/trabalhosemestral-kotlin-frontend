import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input} from 'semantic-ui-react'

class InputAdd extends Component {

    state = {
        addText: ''
    }

    isAddLoading = () => {
        return this.props.loading
    }

    onAddChange = (event, data) => {
        if (this.isAddLoading()) return;
        this.setState({addText: data.value}, () => {
            if (this.state.addText === null || this.state.addText.length === 0) {
                this.onActionClick()
            }
        })
    }

    onActionClick = () => {
        if (this.isAddLoading()) return;

        this.props.onRequestHandle(this.state.addText)
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
