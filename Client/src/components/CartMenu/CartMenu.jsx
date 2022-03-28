import React from 'react';
import { BsXCircleFill } from 'react-icons/bs';
import { Absol, Section, TextItem, IconItem, CheckoutList } from './CartMenu.styles';
import { Button, TypeBtn } from '../Button/Button';

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
        <Button to="/cart" btnType={TypeBtn.cart} onClick={() => setToogle(false)}>
          Checkout
        </Button>
      </Section>
    </Absol>
  );
};

export default CartMenu;
