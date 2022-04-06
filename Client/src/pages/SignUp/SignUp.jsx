import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerStart } from '../../redux/user/user.actions';
import { grabLoading, grabAuth } from '../../redux/user/user.selector';
import Spinner from '../../components/spinner/Spinner.component';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

const SignUp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(grabLoading);
  const isAuth = useSelector(grabAuth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      throw alert(`Sorry, passwords don't match`);
    }
    dispatch(registerStart(name, email, password));
  };

  const dom = isLoading ? (
    <Spinner />
  ) : (
    <SignUpForm
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
    />
  );
  return !isAuth ? dom : <Navigate to="/me" replace={true} />;
};

export default SignUp;
