import React from 'react'
import './formElements'
import { Title, WrapperCenter, Form, WrapperInput, Input, Span, Btn, Suggestion,ForgotPassword, P, Label } from './formElements'

const Login = () => {
    return (
        <WrapperCenter>
            <Title>
                Login
            </Title>
            <Form>

                <WrapperInput>
                    <Input required />
                    <Span />
                    <Label>Email</Label>
                </WrapperInput>
                <WrapperInput>
                    <Input required />
                    <Span />
                    <Label>Password</Label>
                </WrapperInput>

                <ForgotPassword>Forgot password?</ForgotPassword>
                <Btn>Login</Btn>
                <Suggestion>Not a member?<P> Signup</P></Suggestion>
            </Form>
        </WrapperCenter>
    )
}

export default Login
