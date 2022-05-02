import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logoutStart } from '../../redux/user/user.actions';
import CartMenu from '../CartMenu/CartMenu';
import { LoginIcon } from '../loginIcon/LoginIcon';
import { Logout } from '../logout/Logout';
import { Cont, Wrapp, Top, Bottom, Logo, IconItem, TextItem, CartNum } from './Nav.styles';
import { ReactComponent as CartSvg } from './cart.svg';
import { setIsCartOpen } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selector';

const Nav = () => {
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
          <LoginIcon />
          <IconItem to="#" onClick={() => dispatch(setIsCartOpen(true))} color="white">
            <CartSvg />
            <small>bag</small>
            <CartNum>{count}</CartNum>
          </IconItem>
          <CartMenu />
        </Top>
        <Wrapp>
          <Logo to="/">PETXys</Logo>
          <TextItem to="/shop">BEST SELLERS</TextItem>
          <TextItem to="/shop">SHOP ALL</TextItem>
          <TextItem to="/shop">THIS IS US</TextItem>
        </Wrapp>
        <Bottom>
          <Logout handleLogout={handleLogout} />
        </Bottom>
      </Cont>
      <Outlet />
    </>
  );
};

export default Nav;
