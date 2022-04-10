import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { grabAuth, grabLoading, grabUser } from '../../redux/user/user.selector';
import { logoutStart } from '../../redux/user/user.actions';
import CartMenu from '../CartMenu/CartMenu';
import { LoginIcon } from '../loginIcon/LoginIcon';
import { Logout } from '../logout/Logout';
import { Cont, Wrapp, Logo, TextItem, IconItem } from './Nav.styles';

const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const user = useSelector(grabUser);
  const isAuth = useSelector(grabAuth);
  const isLoading = useSelector(grabLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log('Corri');
    dispatch(logoutStart());
  };
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
        <Logout handleLogout={handleLogout} isAuth={isAuth} isLoading={isLoading} />
      </Wrapp>
      <CartMenu toogle={toogle} setToogle={setToogle} />
    </Cont>
  );
};

export default Nav;
