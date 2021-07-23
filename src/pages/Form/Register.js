import React from 'react'
import './formElements'
import { Title, WrapperCenter, Form, WrapperInput, Input, Span, Btn, Suggestion, P,Label } from './formElements'

const Register = () => {
    return (
        <WrapperCenter>
            <Title>
                SignUp
            </Title>
            <Form>
                <WrapperInput>
                    <Input required />
                    <Span />
                    <Label>Username</Label>
                </WrapperInput>
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
                <WrapperInput>
                    <Input required />
                    <Span />
                    <Label>Repeat Password</Label>
                </WrapperInput>

                <Btn>Register</Btn>
                <Suggestion>Already have an account? <P> SignIn</P></Suggestion>
            </Form>
        </WrapperCenter>
    )
}

export default Register
