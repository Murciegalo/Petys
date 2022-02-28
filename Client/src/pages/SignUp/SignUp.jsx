import React from 'react'
import { Link } from 'react-router-dom'
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
          <Text>
            <Link to='/login'>
              Already have an account? Login
            </Link>
          </Text>
        </Form>
      </Wrapper>
    </Cont>
  )
}

export default SignUp