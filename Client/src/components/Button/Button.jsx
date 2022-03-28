import React from 'react';
import { BaseBtn } from './Button.styles';

export const TypeBtn = {
  cart: 'cart',
  checkout: 'checkout',
  signInUp: 'signInUp',
};

export const Button = ({ children, btnType, ...otherProps }) => {
  return <BaseBtn className={`btn-container ${TypeBtn[btnType]}`}>{children}</BaseBtn>;
};
