import React,{useState} from 'react'

import { Title, WrapperCenter, Form, WrapperInput, Input, Span, Btn, Suggestion,ForgotPassword, P, Label } from './FormElements.js'
import {signInWithGoogle} from "../../firebase/Utils"
import { auth} from '../../firebase/Utils'
import {withRouter } from 'react-router-dom';
import { useForm } from "react-hook-form";



const Login = props => {

    const [errors,setErrors] = useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        try {

            await auth.signInWithEmailAndPassword(data.Email, data.Password);
            props.history.push('/');
      
          } catch (error) {
            
            setErrors([error.message])
          }
    }
    return (
        <WrapperCenter>
            <Title>
                Login
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <WrapperInput>
                    <Input required {...register("Email")} />
                    <Span />
                    <Label>Email</Label>
                </WrapperInput>
                <WrapperInput>
                    <Input type="password" required {...register("Password")} />
                    <Span />
                    <Label>Password</Label>
                </WrapperInput>

                <ForgotPassword to="/Recover">Forgot password?</ForgotPassword>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <Suggestion key={index}>
                                    {err}
                                </Suggestion>
                            );
                        })}
                    </ul>
                )}
                <Btn type="submit">Login</Btn>
                
                <Suggestion> <P onClick={signInWithGoogle}>Login With Google</P></Suggestion>
                <Suggestion>Not a member?<P> Signup</P></Suggestion>
            </Form>
        </WrapperCenter>
    )
}

export default withRouter(Login);
