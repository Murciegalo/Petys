import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grabAuth } from '../../redux/user/user.selector';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(grabAuth);
  const routing = isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
  return routing;
};
export default PrivateRoute;
