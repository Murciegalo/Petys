import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grabAuth } from '../../redux/user/user.selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(grabAuth);
  return isAuth ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
