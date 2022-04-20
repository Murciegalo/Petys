import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grabAuth } from '../../redux/user/user.selector';

const PrivateRoute = () => {
  const isAuth = useSelector(grabAuth);
  const location = useLocation();
  return isAuth ? Outlet : <Navigate to="/login" state={{ from: location }} replace={true} />;
};
export default PrivateRoute;
