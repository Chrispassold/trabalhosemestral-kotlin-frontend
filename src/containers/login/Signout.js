import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import {auth} from 'components/firebase'
import FullScreenLoader from "../../components/loader/FullScreenLoader";

export default class Signout extends Component {

    componentDidMount() {
        setTimeout(() => {
            auth.doSignOut()
                .finally(() => browserHistory.push('signin'))
        }, 1000)
    }

    render() {
        return <FullScreenLoader active={true} message={"Saindo..."}/>
    }
}