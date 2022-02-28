import React from 'react';
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
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
        {/* <TextItem>About Us</TextItem> */}
        <TextItem>
          <Link to='/shop'>
            Shop
          </Link>
        </TextItem>
      </Center>
      <Right>
        <IconItem>
          <Link to='Login'>
            <BsFillPersonFill />
          </Link>
        </IconItem>
        <IconItem>
          <Link to='Login'>
            <BsCart4 />
          </Link>
        </IconItem>
      </Right>
    </Wrapp>
  </Cont>;
};

export default Nav;
