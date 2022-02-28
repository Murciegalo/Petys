import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Btn,
  Cont, Form, Header, Input, Text, Wrapper 
} from './Login.styles'

const Login = () => {
  return (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <Form>
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Btn>Sign In</Btn>
          <Text>
            <Link to='/signup'>
              You don't have an account? SIGN UP
            </Link>
          </Text>
          <Text>
            <Link to='/forgotPassword'>
              Forgot your password?
            </Link>
          </Text>
        </Form>
      </Wrapper>
    </Cont>
  )
}

export default Login