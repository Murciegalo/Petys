import { useState } from 'react';
import { BsCart4, BsFillPersonFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { grabAuth, grabUser } from '../../redux/user/user.selector';
import CartMenu from '../CartMenu/CartMenu';
import { Cont, Wrapp, Left, Logo, Center, TextItem, Right, IconItem } from './Nav.styles';

const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const user = useSelector(grabUser);
  const isAuth = useSelector(grabAuth);
  const loginIcons =
    user && isAuth ? (
      <TextItem>
        <img src={`${user.photo}`} alt="profile" />
        <Link to="/me">{user.name.split(' ')[0]}</Link>
      </TextItem>
    ) : (
      <IconItem to="/login" color="white">
        <BsFillPersonFill />
      </IconItem>
    );
  return (
    <Cont>
      <Wrapp>
        <Left>
          <Logo to="/">PETXys</Logo>
        </Left>
        <Center>
          <TextItem>
            <Link to="/shop">Shop</Link>
          </TextItem>
        </Center>
        <Right>
          {loginIcons}
          <IconItem to="#" onClick={() => setToogle(!toogle)} color="white">
            <BsCart4 />
            <span>0</span>
          </IconItem>
        </Right>
      </Wrapp>
      <CartMenu toogle={toogle} setToogle={setToogle} />
    </Cont>
  );
};

export default Nav;
