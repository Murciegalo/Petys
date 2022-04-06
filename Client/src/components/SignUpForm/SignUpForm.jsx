import React from 'react';
import { Button, TypeBtn } from '../../components/Button/Button';
import { Cont, Header, Wrapper, Form, Input, Text } from '../LoginForm/Form.styles';

export const SignUpForm = ({
  handleSubmit,
  name,
  setName,
  confirmPassword,
  setConfirmPassword,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <Cont>
      <Header>Sign Up</Header>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Fullname"
            required
          />
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
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Button btnType={TypeBtn.signInUp}>Sign Up</Button>
          <Text to="/login">Already have an account? Login</Text>
        </Form>
      </Wrapper>
    </Cont>
  );
};
