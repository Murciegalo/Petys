import React from 'react';
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import {
  Cont,
  Wrapp,
  Left,
  Logo,
  Center,
  TextItem,
  Right,
  IconItem,
  CartNum
} from './Nav.styles'

const Nav = () => {
  return <Cont>
    <Wrapp>
      <Left>
        <Logo>PETYs</Logo>
      </Left>
      <Center>
        <TextItem>About Us</TextItem>
        <TextItem>Shop</TextItem>
      </Center>
      <Right>
        <IconItem><BsFillPersonFill /></IconItem>
        <IconItem>
          <BsCart4 />
        </IconItem>
      </Right>
    </Wrapp>
  </Cont>;
};

export default Nav;
