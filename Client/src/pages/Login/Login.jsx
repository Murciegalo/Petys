import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, TypeBtn } from '../../components/Button/Button';
import { login } from '../../store/user/user.actions';
import { Cont, Header, Wrapper, Form, Input, Text } from './Login.styles';

const Login = ({ isAuth, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    isAuth && navigate('/me');
  };
  return (
    <Cont>
      <Header>Sign In</Header>
      <Wrapper>
        <Form onSubmit={handleLogin}>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
