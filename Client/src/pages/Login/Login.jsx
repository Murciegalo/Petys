import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginStart } from '../../redux/user/user.actions';
import { grabLoading, grabAuth } from '../../redux/user/user.selector';
import Spinner from '../../components/spinner/Spinner.component';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(grabLoading);
  const isAuth = useSelector(grabAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Link worked on Submit');
    dispatch(loginStart(email, password));
  };

  const dom = isLoading ? (
    <Spinner />
  ) : (
    <LoginForm
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
  return !isAuth ? dom : <Navigate to="/me" replace={true} />;
};

export default Login;
