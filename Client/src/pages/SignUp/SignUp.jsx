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
      <Header>Sign Up</Header>
      <Wrapper>
        <Form>
          <Input placeholder='Full Name' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Btn>Sign Up</Btn>
          <Text>Already have an account? Login</Text>
        </Form>
      </Wrapper>
    </Cont>
  )
}

export default SignUp