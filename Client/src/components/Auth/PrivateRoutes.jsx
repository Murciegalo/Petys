import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grabAuth, grabRole } from '../../redux/user/user.selector';

const PrivateRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const isAuth = useSelector(grabAuth);
  const role = useSelector(grabRole);
  console.log('ROLE', role);

  const routing =
    isAuth && role?.find((role) => allowedRoles.includes(role)) ? (
      <Outlet />
    ) : isAuth ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace={true} />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace={true} />
    );
  return routing;
};
export default PrivateRoute;
