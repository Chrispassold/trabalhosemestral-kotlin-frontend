import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {browserHistory} from 'react-router'
import _ from 'lodash'

import {auth, firebase} from 'components/firebase'
import Assets from "components/assets/Assets";
import FullScreenLoader from "components/loader/FullScreenLoader";
import TextErrorMessage from "components/message/error/TextErrorMessage";
import {validateEmail, validatePassword} from "utils/validation";
import SigninForm from "./SigninForm";

export default class Signin extends Component {
    state = {
        user: undefined,
        password: undefined,
        loading: false,
        loadingContent: true,
        errorMessage: []
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            if (!!authUser) {
                browserHistory.push('/')
                return;
            }

            this.setState({
                loadingContent: false
            })
        });
    }

    onChangeUser = (e) => {
        const user = e.target.value
        if (user !== null && user.trim() !== "") {
            this.setState({user: user})
        } else {
            this.setState({user: undefined})
        }
    }

    onChangePassword = (e) => {
        const password = e.target.value
        if (password !== null && password.trim() !== "") {
            this.setState({password})
        } else {
            this.setState({password: undefined})
        }
    }

    startLoading = () => {
        this.setState({loading: true})
    }

    stopLoading = () => {
        this.setState({loading: false})
    }

    isLoading = () => {
        return this.state.loading
    }

    setError = (message) => {
        this.setState({errorMessage: message})
    }

    isFormValid = () => {
        const {user, password} = this.state
        let errors = []

        const messagePassword = validatePassword(password)
        const messageEmail = validateEmail(user)
        if (messageEmail.isValid) {
            errors.push(messageEmail.message)
        }

        if (messagePassword.isValid) {
            errors.push(messagePassword.message)
        }

        if (errors.length > 0) {
            this.setError(errors)
        }
        return errors.length === 0
    }

    submit = () => {
        if (this.isLoading()) return

        const isFormValid = this.isFormValid()
        if (isFormValid) {
            this.startLoading()

            auth.doSignInWithEmailAndPassword(this.state.user, this.state.password)
                .catch((error) => {
                    this.setError([auth.handleError(error)])
                })
                .finally(this.stopLoading)
        }
    }


    render() {

        const {loading, loadingContent, errorMessage} = this.state


        if (loadingContent) {
            return <FullScreenLoader active={loadingContent}/>
        }

        return <div className='login-form'>
            {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
            <Grid
                textAlign='center'
                style={{height: '100%'}}
                verticalAlign='middle'
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <Assets size={'small'} src={'/logo.png'} style={{padding: 20}} centered/>

                    {!_.isEmpty(errorMessage) &&
                    <TextErrorMessage list={errorMessage}/>
                    }

                    <SigninForm onSubmit={this.submit} onChangeUser={this.onChangeUser}
                                onChangePassword={this.onChangePassword} loading={loading}/>

                    {/*<Message>*/}
                    {/*New to us? <a href='#'>Sign Up</a>*/}
                    {/*</Message>*/}
                </Grid.Column>
            </Grid>
        </div>
    }
}