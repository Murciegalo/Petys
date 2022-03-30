import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../store/user/user.actions';
import { Signin } from '../../components/SignIn/Signin';
import Spinner from '../../components/spinner/Spinner.component';

const Login = ({ isAuth, loading, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  const dom = loading ? (
    <Spinner />
  ) : (
    <Signin
      handleLogin={handleLogin}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
  return !isAuth ? dom : <Navigate to="/me" replace={true} />;
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { login })(Login);
