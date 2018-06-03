import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Header, Input} from 'semantic-ui-react'
import {isEnterPressed} from "utils/commom";
import Shake from "components/animations/Shake";
import If from "components/helper/If";

class EditableHeader extends Component {

    state = {
        text: this.props.text || '',
        errorToggle: true,
        loading: false,
        editing: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        return {
            text: nextProps.text
        }
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

        this.toggleEditing()
    }

    onActionKeyPress = (e) => {
        if (isEnterPressed(e)) {
            this.save(e)
        }
    }

    render() {
        const {text, loading, editing, errorToggle} = this.state
        return <Fragment>
            <If check={!editing}>
                <Header as='h2' style={{opacity: 0.5}} content={text} onDoubleClick={this.toggleEditing}/>
            </If>
            <Shake visible={errorToggle}>
                <If check={editing}>
                    <Input fluid
                           as={'h2'}
                           className={'header'}
                           style={{opacity: 0.8}}
                           transparent
                           loading={loading}
                           disabled={loading}
                           value={text}
                           onChange={this.onChange}
                           onKeyPress={this.onActionKeyPress}
                    />
                </If>
            </Shake>
        </Fragment>
    }
}

EditableHeader.propTypes = {
    text: PropTypes.string.isRequired,
}

export default EditableHeader
