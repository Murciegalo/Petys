import React from 'react'
import { 
  Cont, 
  Header, 
  Wrapper, 
  Form, 
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
        <Btn onClick={() => setForgot(false)}>Cancel</Btn>
      </Wrapper>
  </Cont>
}

export default ResetPass