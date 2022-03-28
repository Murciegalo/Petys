import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResetPass from '../../components/ResetPass/ResetPass';
import { Cont, Header, Wrapper, Form, Input, Btn, Text } from './Login.styles';

const Login = () => {
  const [forgot, setForgot] = useState(false);

  return forgot ? (
    <ResetPass setForgot={setForgot} />
  ) : (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Btn>Sign In</Btn>
          <Text to="/signup">You don't have an account? SIGN UP</Text>
          <Text to="#" onClick={() => setForgot(true)}>
            Forgot your password?
          </Text>
        </Form>
      </Wrapper>
    </Cont>
  );
};

export default Login;
