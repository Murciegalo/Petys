import React from 'react';
import { useSelector } from 'react-redux';
import { grabCartItems } from '../../redux/cart/cart.selector';
import { Button, TypeBtn } from '../../components/Button/Button';
import Cartitem from '../../components/CartItem/Cartitem';
import { Cont, Header, ProductList } from './Cart.styles';

const Cart = () => {
  const cartItems = useSelector(grabCartItems);
  return (
    <>
      <Header>Your Cart</Header>
      <Cont>
        <ProductList>
          {cartItems.map((el) => (
            <Cartitem key={el.itemId} el={el} />
          ))}
        </ProductList>
        <div>
          <Button btnType={TypeBtn.signInUp}>Pay</Button>
        </div>
      </Cont>
    </>
  );
};

export default Cart;
