import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { grabAuth, grabLoading, grabUser } from '../../redux/user/user.selector';
import { logoutStart } from '../../redux/user/user.actions';
import CartMenu from '../CartMenu/CartMenu';
import { LoginIcon } from '../loginIcon/LoginIcon';
import { Logout } from '../logout/Logout';
import { Cont, Wrapp, Top, Bottom, Logo, IconItem, TextItem, CartNum } from './Nav.styles';
import { ReactComponent as CartSvg } from './cart.svg';
const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const user = useSelector(grabUser);
  const isAuth = useSelector(grabAuth);
  const isLoading = useSelector(grabLoading);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutStart());
  };
  return (
    <>
      <Cont>
        <Top>
          <LoginIcon user={user} isAuth={isAuth} />
          <IconItem to="#" onClick={() => setToogle(!toogle)} color="white">
            <CartSvg />
            <small>bag</small>
            <CartNum>1</CartNum>
          </IconItem>
          <CartMenu toogle={toogle} setToogle={setToogle} />
        </Top>
        <Wrapp>
          <Logo to="/">PETXys</Logo>
          <TextItem to="/shop">/ Shop /</TextItem>
        </Wrapp>
        <Bottom>
          <Logout handleLogout={handleLogout} isAuth={isAuth} isLoading={isLoading} />
        </Bottom>
      </Cont>
      <Outlet />
    </>
  );
};

export default Nav;
