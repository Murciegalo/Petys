import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cont, 
  Header, 
  Wrapper, 
  Form, 
  BtnII,
  Input,
  Btn
} from '../../pages/Login/Login.styles'

const ResetPass = ({setForgot}) => {
  return <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <span>Please input your email and we will send you a new password</span>
        <Form>
          <Input placeholder='Email' />
          <Btn>Reset Password</Btn>
        </Form>
        <BtnII onClick={() => setForgot(false)}>Back to Login page</BtnII>
      </Wrapper>
  </Cont>
}

export default ResetPass