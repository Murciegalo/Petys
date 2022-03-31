import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/user/user.actions';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../../components/spinner/Spinner.component';
import { Cont, Header, Wrapper, Form, Input, Text } from '../../components/SignIn/Sign.styles';
import { Button, TypeBtn } from '../../components/Button/Button';

const SignUp = ({ loading, isAuth, err, register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return alert(`Sorry, passwords don't match`);
    }
    register(name, email, password, passwordConfirm);
  };

  return loading ? (
    <Spinner />
  ) : isAuth && !err ? (
    <Navigate to="/me" />
  ) : (
    <Cont>
      <Header>Sign Up</Header>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Full Name"
            value={name}
            minLength="3"
            required
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            required
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
            minLength="8"
            required
          />
          <Input
            onChange={(e) => setpasswordConfirm(e.target.value)}
            type="password"
            placeholder="Confirm password"
            value={passwordConfirm}
            required
          />
          <Button type="submit" btnType={TypeBtn.signInUp}>
            Sign Up
          </Button>
          <Text to="/login">Already have an account? Login</Text>
        </Form>
      </Wrapper>
    </Cont>
  );
};
SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  loading: PropTypes.bool,
  err: PropTypes.object,
};
const mapStateToProps = (state) => ({
  loading: state.user.loading,
  isAuth: state.user.isAuth,
  err: state.user.error,
});

export default connect(mapStateToProps, { register })(SignUp);
