import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginStart, removeAlert } from '../../redux/user/user.actions';
import { grabAuth } from '../../redux/user/user.selector';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(grabAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginStart(email, password));
    setTimeout(() => dispatch(removeAlert()), 1000);
  };

  const navigation = !isAuth ? (
    <LoginForm
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  ) : (
    <Navigate to="/me" replace={true} />
  );
  return navigation;
};

export default Login;
