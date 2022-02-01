import React from 'react';
import {
  Cont,
  Wrapp,
  Logo,
  Text,
  TextItem,
  Icons
} from './Nav.styles'


const Nav = () => {
  return <Cont>
    <Wrapp>
      <Logo>PETys</Logo>
      <Text>
        <TextItem>About Us</TextItem>
        <TextItem>Shop</TextItem>
      </Text>
      <Icons>
        
      </Icons>
    </Wrapp>
  </Cont>;
};

export default Nav;
