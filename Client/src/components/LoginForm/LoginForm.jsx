import React from 'react';
import { Button, TypeBtn } from '../../components/Button/Button';
import { Cont, Header, Wrapper, Form, Input, Text } from './Form.styles';

export const LoginForm = ({ handleSubmit, email, setEmail, password, setPassword }) => {
  return (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Input
            type="password"
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
          <Text to="/forgotPassword">Forgot your password?</Text>
        </Form>
      </Wrapper>
    </Cont>
  );
};
