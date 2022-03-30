import React from 'react';
import { Cont, Header, Wrapper, Form, Input, Text } from '../../components/SignIn/Sign.styles';
import { Button, TypeBtn } from '../../components/Button/Button';

const SignUp = () => {
  return (
    <Cont>
      <Header>Sign Up</Header>
      <Wrapper>
        <Form>
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button btnType={TypeBtn.signInUp}>Sign Up</Button>
          <Text to="/login">Already have an account? Login</Text>
        </Form>
      </Wrapper>
    </Cont>
  );
};

export default SignUp;
