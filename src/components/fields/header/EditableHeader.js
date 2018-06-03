import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Form, Header, Input} from 'semantic-ui-react'
import Shake from "components/animations/Shake";
import If from "components/helper/If";

class EditableHeader extends Component {

    state = {
        text: this.props.text || '',
        errorToggle: true,
        loading: false,
        editing: false
    }

    toggleAnimation = () => this.setState({errorToggle: !this.state.errorToggle})

    toggleEditing = () => this.setState({editing: !this.state.editing})

    onChange = (e) => {
        this.setState({text: e.target.value})
    }

    save = (e) => {
        const {text} = this.state
        e.preventDefault()

        if (text.length === 0) {
            this.toggleAnimation()
            return;
        }

        this.props.onSave(text)
        this.toggleEditing()
    }

    render() {
        const {text, loading, editing, errorToggle} = this.state
        return <Fragment>
            <If check={!editing}>
                <Header as='h2' style={{opacity: 0.5}} content={text} onDoubleClick={this.toggleEditing}/>
            </If>
            <Shake visible={errorToggle}>
                <If check={editing}>
                    <Form onSubmit={this.save}>
                        <Input fluid
                               transparent
                               as={'h2'}
                               className={'header'}
                               style={{opacity: 0.8}}
                               loading={loading}
                               disabled={loading}
                               value={text}
                               onChange={this.onChange}
                        />
                    </Form>
                </If>
            </Shake>
        </Fragment>
    }
}

EditableHeader.propTypes = {
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired
}

export default EditableHeader
