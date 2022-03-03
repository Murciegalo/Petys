import React from 'react';
import { BsCart4, BsFillPersonFill, BsXCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {
  Cont,
  Wrapp,
  Left,
  Logo,
  Center,
  TextItem,
  Right,
  IconItem,
  Absol,
  Section,
  CheckoutList,
  Btn
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
        <IconItem color='white'>
          <Link to='/login'>
            <BsFillPersonFill />
          </Link>
        </IconItem>
        <IconItem color='white'>
          <Link to='/cart'>
            <BsCart4 />
          </Link>
          <span>2</span>
        </IconItem>
      </Right>
    </Wrapp>
      <Absol>
        <Section justify='space-between'>
          <TextItem>Your Cart</TextItem>
          <IconItem color='black'><BsXCircleFill /></IconItem>
        </Section>
        <CheckoutList>
            <span>adfasdf</span>
            <span>adfasdf</span>
            <span>adfasdf</span>
        </CheckoutList>
        <Section justify='space-between'>
          <TextItem>TOTAL</TextItem>
          <TextItem>Money</TextItem>
        </Section>
        <Section justify='end'>
          <Btn>Payment</Btn>
        </Section>
      </Absol>
  </Cont>;
};

export default Nav;
