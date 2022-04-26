import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { grabAuth, grabUser } from '../../redux/user/user.selector';
import { logoutStart } from '../../redux/user/user.actions';
import CartMenu from '../CartMenu/CartMenu';
import { LoginIcon } from '../loginIcon/LoginIcon';
import { Logout } from '../logout/Logout';
import { Cont, Wrapp, Top, Bottom, Logo, IconItem, TextItem, CartNum } from './Nav.styles';
import { ReactComponent as CartSvg } from './cart.svg';
import { setIsCartOpen } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selector';

const Nav = () => {
  const user = useSelector(grabUser);
  const isAuth = useSelector(grabAuth);
  const count = useSelector(selectCartCount);
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
          <IconItem to="#" onClick={() => dispatch(setIsCartOpen(true))} color="white">
            <CartSvg />
            <small>bag</small>
            <CartNum>{count}</CartNum>
          </IconItem>
          <CartMenu />
        </Top>
        <Wrapp>
          <Logo to="/">PETXys</Logo>
          <TextItem to="/shop">/ Shop /</TextItem>
        </Wrapp>
        <Bottom>
          <Logout handleLogout={handleLogout} isAuth={isAuth} />
        </Bottom>
      </Cont>
      <Outlet />
    </>
  );
};

export default Nav;
