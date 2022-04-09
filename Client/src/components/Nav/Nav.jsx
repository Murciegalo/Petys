import { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutStart } from '../../redux/user/user.actions';
import { grabAuth, grabUser } from '../../redux/user/user.selector';
import CartMenu from '../CartMenu/CartMenu';
import { LoginIcon } from '../loginIcon/LoginIcon';
import { Cont, Wrapp, Logo, TextItem, IconItem } from './Nav.styles';

const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const user = useSelector(grabUser);
  const isAuth = useSelector(grabAuth);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    console.log('Corri');
    dispatch(logoutStart());
  };
  const logOut = isAuth && <TextItem onClick={handleLogout}>Logout</TextItem>;
  return (
    <Cont>
      <Wrapp>
        <Logo to="/">PETXys</Logo>
        <LoginIcon user={user} isAuth={isAuth} />
        <TextItem>
          <Link to="/shop">Shop</Link>
        </TextItem>
        <IconItem to="#" onClick={() => setToogle(!toogle)} color="white">
          <BsCart4 />
          <span>0</span>
        </IconItem>
        {logOut}
      </Wrapp>
      <CartMenu toogle={toogle} setToogle={setToogle} />
    </Cont>
  );
};

export default Nav;
