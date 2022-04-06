import React from 'react';
import { Button, TypeBtn } from '../../components/Button/Button';
import { Cont, Header, Wrapper, Form, Input, Text } from '../LoginForm/Form.styles';

export const ResetPassForm = ({ handleSubmit, email, setEmail }) => {
  return (
    <Cont>
      <Header>Forgot Password</Header>
      <Wrapper>
        <span>Please input your email and we will send you a new password</span>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your_email@example.com"
            required
          />
          <Button type="submit" btnType={TypeBtn.signInUp}>
            Reset Password
          </Button>
        </Form>
        <Text to="/login">Cancel</Text>
      </Wrapper>
    </Cont>
  );
};
