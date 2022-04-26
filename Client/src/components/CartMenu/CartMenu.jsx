import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsCaretDown,
  BsExclamationSquare,
} from 'react-icons/bs';
import { Absol, Flag, Section, TextItem } from './CartMenu.styles';
import { Button, TypeBtn } from '../Button/Button';
import { CartMenuItem } from '../CartMenuItem/CartMenuItem';
import { setIsCartOpen } from '../../redux/cart/cart.actions';
import {
  grabCartItems,
  grabIsCartOpen,
  selectCartCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';

const CartMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCartOpen = useSelector(grabIsCartOpen);
  const cartItems = useSelector(grabCartItems);
  // const cartCount = useSelector(selectCartCount);
  // const total = useSelector(selectCartTotal);
  const handleCheckout = () => {
    dispatch(setIsCartOpen(false));
    navigate('/cart');
  };
  const display =
    cartItems.length > 0 && cartItems.map((el) => <CartMenuItem key={el.itemId} el={el} />);
  return (
    <Absol $display={isCartOpen}>
      <Section $justify="space-between">
        <TextItem color={'#455'} size={'12px'} onClick={() => dispatch(setIsCartOpen(false))}>
          <BsArrowLeftShort /> Keep Shopping
        </TextItem>
        <TextItem onClick={() => dispatch(setIsCartOpen(false))} color={'#455'} size={'12px'}>
          <BsCaretDown />
        </TextItem>
      </Section>
      <Section $column="column">
        <h3 style={{ margin: '2px' }}>Shopping Bag</h3>
        {/* <p style={{ margin: '2px' }}>({cartCount} items)</p> */}
      </Section>
      <Section $column="column">{display}</Section>
      <Section $justify="end">
        <TextItem $padding="1rem">Total:</TextItem>
        {/* <TextItem $padding="1rem">${total}</TextItem> */}
      </Section>
      <Flag>
        You have earned <b>FREE</b> shipping
      </Flag>
      <Button btnType={TypeBtn.cart} onClick={handleCheckout}>
        Checkout
      </Button>
    </Absol>
  );
};

export default CartMenu;
