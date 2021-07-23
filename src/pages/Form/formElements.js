import styled from "styled-components";
import {Link} from 'react-router-dom'

export const WrapperCenter = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
`

export const Title = styled.h1`
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
`

export const Form = styled.form`
  padding: 0 40px;
  box-sizing: border-box;
`

export const WrapperInput = styled.div`
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;

`

export const Input = styled.input`
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
  &:focus ~ Label{
    top: -5px;
  color: #2691d9;
  }

  &:valid ~ Label{
    top: -5px;
  color: #2691d9;
}

&:focus ~ span::before{
    width: 100%;
}

&:valid ~ span::before{
    width:100%;
}


`

export const Span = styled.span`

&:before{
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: .5s;
}
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: .5s;
`

export const Btn = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-top:10px;
`

export const P = styled(Link)`
   color: #2691d9;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`


export const Suggestion = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
`

export const ForgotPassword = styled(Link)`
 text-decoration:none;
 margin: -5px 0 30px 5px;
  color: #a6a6a6;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`