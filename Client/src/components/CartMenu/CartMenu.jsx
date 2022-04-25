import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Absol, Section, TextItem } from './CartMenu.styles';
import { Button, TypeBtn } from '../Button/Button';
import { getCartItems } from '../../redux/cart/cart.selector';
import { useSelector } from 'react-redux';
import { CartMenuItem } from '../CartMenuItem/CartMenuItem';

const CartMenu = ({ toogle, setToogle }) => {
  const navigate = useNavigate();
  const cart = useSelector(getCartItems);
  const handleCheckout = () => {
    setToogle(false);
    navigate('/cart');
  };
  const display = cart.length > 0 && cart.map((el) => <CartMenuItem key={el.itemId} el={el} />);
  return (
    <Absol $display={toogle}>
      <Section $justify="space-between">
        <TextItem color={'#455'} size={'12px'} onClick={() => setToogle(!toogle)}>
          <BsArrowLeftShort /> Keep Shopping
        </TextItem>
        <TextItem color={'#455'} size={'12px'}>
          Checkout
          <BsArrowRightShort />
        </TextItem>
      </Section>
      <Section $column="column">
        <h3 style={{ margin: '2px' }}>Shopping Bag</h3>
        <p style={{ margin: '2px' }}>({cart.length} items)</p>
      </Section>
      <Section $column="column">{display}</Section>
      <Section $justify="space-between">
        <TextItem>TOTAL</TextItem>
        <TextItem>Money</TextItem>
      </Section>
      <Section $justify="end">
        <Button btnType={TypeBtn.cart} onClick={handleCheckout}>
          Checkout
        </Button>
      </Section>
    </Absol>
  );
};

export default CartMenu;
