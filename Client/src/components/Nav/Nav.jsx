import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsCart4, BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartMenu from '../CartMenu/CartMenu';
import { Cont, Wrapp, Left, Logo, Center, TextItem, Right, IconItem } from './Nav.styles';

const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const loginIcons = currentUser ? (
    <TextItem>
      <img src={`${currentUser.photo}`} alt="profile" />
      <Link to="/me">{currentUser.name}</Link>
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
          </IconItem>
        </Right>
      </Wrapp>
      <CartMenu toogle={toogle} setToogle={setToogle} />
    </Cont>
  );
};

export default Nav;
