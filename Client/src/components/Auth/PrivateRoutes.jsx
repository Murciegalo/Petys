import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grabAuth } from '../../redux/user/user.selector';

const PrivateRoute = () => {
  const location = useLocation();
  const isAuth = useSelector(grabAuth);
  const routing = isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
  return routing;
};
export default PrivateRoute;
