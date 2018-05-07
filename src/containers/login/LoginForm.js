import React from 'react'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import Assets from "../../components/assets/Assets";

const LoginForm = () => (
    <div className='login-form'>
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
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button primary fluid size='large' as={'a'} href={'/'}>Entrar</Button>
                    </Segment>
                </Form>
                {/*<Message>*/}
                {/*New to us? <a href='#'>Sign Up</a>*/}
                {/*</Message>*/}
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm