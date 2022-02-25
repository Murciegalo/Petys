import React from 'react'
import { 
  Btn,
  Cont, Form, Header, Input, Text, Wrapper 
} from './Login.styles'

const Login = () => {
  return (
    <Cont>
      <Header>Login</Header>
      <Wrapper>
        <Form>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Btn>Sign In</Btn>
          <Text>Create Account</Text>
          <Text>Forgot your password?</Text>
        </Form>
      </Wrapper>
    </Cont>
  )
}

export default Login