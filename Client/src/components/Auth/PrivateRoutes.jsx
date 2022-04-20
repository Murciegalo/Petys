import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grabAuth, grabRole } from '../../redux/user/user.selector';

const PrivateRoute = () => {
  const location = useLocation();
  const isAuth = useSelector(grabAuth);
  const role = useSelector(grabRole);
  console.log('ROLE', role);

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace={true} />;
};
export default PrivateRoute;
