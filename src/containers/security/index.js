import React, {Component} from 'react'
import _ from 'lodash'
import {browserHistory} from 'react-router'
import {firebase} from 'components/firebase'
import FullScreenLoader from "components/loader/FullScreenLoader";

export default class AuthorizationProvider extends Component {

    state = {
        authUser: null,
        loaded: false
    }

    componentDidMount() {
        this.setState(() => ({loaded: false}))
        setTimeout(() => {
            firebase.auth.onAuthStateChanged(authUser => {
                !!authUser
                    ? this.setState(() => ({authUser, loaded: true}))
                    : this.setState(() => ({authUser: null, loaded: true}));
            });
        }, 1000)
    }

    render() {

        if (!this.state.loaded) {
            return <FullScreenLoader active={!this.state.loaded}/>
        }

        if (_.isEmpty(this.state.authUser)) {
            browserHistory.push('signin')
            return null;
        }

        return this.props.children;
    }
}