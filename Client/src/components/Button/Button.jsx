import React from 'react';
import { BaseBtn, NavBtn, CheckoutBtn, LSBtn, CartBtn } from './Button.styles';

export const TypeBtn = {
  base: 'base',
  nav: 'nav',
  checkout: 'checkout',
  signInUp: 'signInUp',
  cart: 'cart',
};

const getBtn = (btnType = TypeBtn.base) =>
  ({
    [TypeBtn.base]: BaseBtn,
    [TypeBtn.nav]: NavBtn,
    [TypeBtn.checkout]: CheckoutBtn,
    [TypeBtn.signInUp]: LSBtn,
    [TypeBtn.cart]: CartBtn,
  }[btnType]);

export const Button = ({ children, btnType, ...otherProps }) => {
  const CustomBtn = getBtn(btnType);
  return <CustomBtn {...otherProps}>{children}</CustomBtn>;
};
