import React,{useState} from 'react'
import { withRouter } from 'react-router-dom';
import { Title, WrapperCenter, Form, WrapperInput, Input, Span, Btn, Suggestion, P, Label } from './FormElements.js'
import { useForm } from "react-hook-form";
import {auth,handleUserProfile} from '../../firebase/Utils'

const Register = props => {
    
    const { register, handleSubmit } = useForm();
    const [errors,setErrors] = useState([])
    
    const onSubmit = async data => {
        console.log(data)

        const {displayName,Email,Password,RPassword} = data

        if(Password !== RPassword){
            const err = ['Password Don\'t match'];
            setErrors(err)
            return;
        }

        setErrors([])

        try{
            console.log(Email,Password)
            const {user} = await auth.createUserWithEmailAndPassword(Email,Password);
            console.log(user)
            await handleUserProfile(user,{displayName});
            props.history.push('/');

        }
        catch(error){
              console.log(error.message)
              const err = [error.message]
              setErrors(err)
              
        }
          
    };
    
    return (
        <WrapperCenter>
            <Title>
                SignUp
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <WrapperInput>
                    <Input type="text" required {...register("displayName")} />
                    <Span />
                    <Label>Full Name</Label>
                </WrapperInput>
                <WrapperInput>
                    <Input type="mail" required {...register("Email")} />
                    <Span />
                    <Label>Email</Label>
                </WrapperInput>
                <WrapperInput>
                    <Input type="password" required {...register("Password")} />
                    <Span />
                    <Label>Password</Label>
                </WrapperInput>
                <WrapperInput>
                    <Input type="password" required {...register("RPassword")} />
                    <Span />
                    <Label>Repeat Password</Label>
                </WrapperInput>

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

                <Btn type="submit">Register</Btn>
                <Suggestion>Already have an account? <P> SignIn</P></Suggestion>
            </Form>
        </WrapperCenter>
    )
}

export default withRouter(Register);