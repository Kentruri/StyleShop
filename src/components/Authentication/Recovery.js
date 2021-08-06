import React, { useState } from 'react'

import { Title, WrapperCenter, Form, WrapperInput, Input, Span, Label, Btn,Suggestion } from './FormElements.js'
import { withRouter, useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import { auth } from '../../firebase/Utils'


const Recovery = async => {
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState([])
    let history = useHistory();
    const onSubmit = async data => {
        try {
            const { Email } = data

            const config = {
                url: "http://localhost:3000/Login"
            }

            await auth.sendPasswordResetEmail(Email, config).then(() => history.push("/Login"))
        } catch (error) {
            const err = [error.message]
            setErrors(err)
        }
    }
    return (
        <WrapperCenter>
            <Title>
                Recover password
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <WrapperInput>
                    <Input required {...register("Email")} />
                    <Span />
                    <Label>Email</Label>
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
                <Btn type="submit">Send</Btn>
            </Form>
        </WrapperCenter>
    )
}

export default withRouter(Recovery);
