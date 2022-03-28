import React from 'react';
import { Link } from 'react-router-dom';
import { BsXCircleFill } from 'react-icons/bs';
import { Absol, Section, TextItem, IconItem, CheckoutList, Btn } from './CartMenu.styles';

const CartMenu = ({ toogle, setToogle }) => {
  return (
    <Absol $display={toogle}>
      <Section $justify="space-between">
        <TextItem>Your Cart</TextItem>
        <IconItem onClick={() => setToogle(!toogle)} color="black">
          <BsXCircleFill />
        </IconItem>
      </Section>
      <CheckoutList>
        <span>adfasdf</span>
        <span>adfasdf</span>
        <span>adfasdf</span>
      </CheckoutList>
      <Section $justify="space-between">
        <TextItem>TOTAL</TextItem>
        <TextItem>Money</TextItem>
      </Section>
      <Section $justify="end">
        <Btn onClick={() => setToogle(false)}>
          <Link to="/cart">Checkout</Link>
        </Btn>
      </Section>
    </Absol>
  );
};

export default CartMenu;
