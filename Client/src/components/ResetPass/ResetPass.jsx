import React from 'react';
import { Cont, Header, Wrapper, Form, Input, Text } from '../../pages/Login/Login.styles';
import { Button, TypeBtn } from '../Button/Button';

const ResetPass = ({ setForgot }) => {
  return (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <span>Please input your email and we will send you a new password</span>
        <Form>
          <Input placeholder="Email" />
          <Button to="#" btnType={TypeBtn.signInUp}>
            Reset Password
          </Button>
        </Form>
        <Text to="#" onClick={() => setForgot(false)}>
          Cancel
        </Text>
      </Wrapper>
    </Cont>
  );
};

export default ResetPass;
