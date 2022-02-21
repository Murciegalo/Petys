import React from 'react'
import { 
  Cont,
  Header,
  Wrapper,
  Form,
  Input,
  Btn,
  Text 
} from '../Login/Login.styles'

const SignUp = () => {
  return (
    <Cont>
      <Header>Login</Header>
      <Wrapper>
        <Form>
          <Input placeholder='Full Name' />
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

export default SignUp