import { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/user/user.actions';
// import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Cont, Header, Wrapper, Form, Input, Text } from '../../components/SignIn/Sign.styles';
import { Button, TypeBtn } from '../../components/Button/Button';

const SignUp = ({ isAuth, loading, register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      return alert(`Sorry, passwords don't match`);
    }
    register(name, email, password);
  };
  return (
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
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="Confirm password"
            value={confirmPass}
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
};
const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { register })(SignUp);

// return onLoading ? <Spinner /> :
// !onLoading && isAuth && !error ? <Redirect to='/me'/> :
