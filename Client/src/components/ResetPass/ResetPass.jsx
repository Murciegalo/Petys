import { useState } from 'react';
import { Cont, Header, Wrapper, Form, Input, Text } from '../../pages/Login/Login.styles';
import { Button, TypeBtn } from '../Button/Button';

const ResetPass = ({ setForgot }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('I am working');
  };
  return (
    <Cont>
      <Header>Sign In</Header>
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
        <Text to="#" onClick={() => setForgot(false)}>
          Cancel
        </Text>
      </Wrapper>
    </Cont>
  );
};

export default ResetPass;
