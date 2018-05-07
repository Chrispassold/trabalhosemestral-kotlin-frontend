import React, {Component} from 'react'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import {browserHistory} from 'react-router'

import Assets from "../../components/assets/Assets";
//TODO: fazer login
export default class Login extends Component {
    state = {
        user: undefined,
        password: undefined,
        loading: false,
    }

    onChangeUser = (e) => {
        const user = e.target.value
        if (user !== null && user.trim() !== "") {
            this.setState({user})
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

    submit = () => {
        if (this.isLoading()) return;

        this.startLoading()
        setTimeout(() => {
            this.stopLoading()
            browserHistory.push('/')
        }, 5000)
    }


    render() {

        const {loading} = this.state

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
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                onChange={this.onChangeUser}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.onChangePassword}
                            />

                            <Button primary fluid size='large' as={'a'} loading={loading} onClick={this.submit}>
                                Entrar
                            </Button>
                        </Segment>
                    </Form>
                    {/*<Message>*/}
                    {/*New to us? <a href='#'>Sign Up</a>*/}
                    {/*</Message>*/}
                </Grid.Column>
            </Grid>
        </div>
    }
}