import React from 'react';
import { grabAlert, grabError, grabLoading } from '../../redux/user/user.selector';
import { Button, TypeBtn } from '../../components/Button/Button';
import { Cont, Header, Wrapper, Form, Input, Text, Alert } from './Form.styles';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner.component';

export const LoginForm = ({ handleSubmit, email, setEmail, password, setPassword }) => {
  const isError = useSelector(grabError);
  const isAlert = useSelector(grabAlert);
  const isLoading = useSelector(grabLoading);
  const notification = isAlert && isError !== null && <Alert>{isError.msg}</Alert>;
  return isLoading ? (
    <Spinner />
  ) : (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        {notification}
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
