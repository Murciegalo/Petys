import {useState} from 'react';
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CartMenu from '../CartMenu/CartMenu';
import {
  Cont,
  Wrapp,
  Left,
  Logo,
  Center,
  TextItem,
  Right,
  IconItem
} from './Nav.styles'

const Nav = () => {
  const [toogle, setToogle] = useState(false)
  return <Cont>
    <Wrapp>
      <Left>
        <Logo>
          <Link to='/'>
            PETXys
          </Link>
        </Logo>
      </Left>
      <Center>
        <TextItem>
          <Link to='/shop'>
            Shop
          </Link>
        </TextItem>
      </Center>
      <Right>
        <IconItem color='white'>
          <Link to='/login'>
            <BsFillPersonFill />
          </Link>
        </IconItem>
        <IconItem
          onClick={() => setToogle(!toogle)} 
          color='white'
        >
          <BsCart4 />
        </IconItem>
      </Right>
    </Wrapp>
      <CartMenu toogle={toogle} setToogle={setToogle} />
  </Cont>;
};

export default Nav;
