import React, { useState } from 'react';
import { Button, TypeBtn } from '../../components/Button/Button';
import ResetPass from '../../components/ResetPass/ResetPass';
import { Cont, Header, Wrapper, Form, Input, Text } from './Login.styles';

const Login = () => {
  const [forgot, setForgot] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Link worked on Submit');
  };
  return forgot ? (
    <ResetPass setForgot={setForgot} />
  ) : (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            minLength="8"
            required
          />
          <Button type="submit" btnType={TypeBtn.signInUp}>
            Sign In
          </Button>
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
