import React from 'react'
import PropTypes from 'prop-types'
import {Button, Form, Segment} from 'semantic-ui-react'

const SigninForm = ({onSubmit, onChangeUser, onChangePassword, loading = false}) => (
    <Form size='large' onSubmit={onSubmit}>
        <Segment stacked>
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail'
                onChange={onChangeUser}
            />
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Senha'
                type='password'
                autoComplete="off"
                onChange={onChangePassword}
            />

            <Button primary fluid size='large' loading={loading} onClick={onSubmit}>
                Entrar
            </Button>
        </Segment>
    </Form>
)

SigninForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChangeUser: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default SigninForm