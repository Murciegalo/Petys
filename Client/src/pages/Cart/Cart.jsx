import React from 'react';
import { useSelector } from 'react-redux';
import { grabCartItems, selectCartCount, selectCartTotal } from '../../redux/cart/cart.selector';
import { Button, TypeBtn } from '../../components/Button/Button';
import Cartitem from '../../components/CartItem/Cartitem';
import {
  Cont,
  Header,
  Info,
  InfoItems,
  Order,
  ProductList,
  Text,
  TextBtn,
  Title,
} from './Cart.styles';

const Cart = () => {
  const cartItems = useSelector(grabCartItems);
  const cartCount = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  return (
    <>
      <Header>Shopping Bag</Header>
      <Cont>
        <ProductList>
          {cartItems.map((el) => (
            <Cartitem key={el.itemId} el={el} />
          ))}
        </ProductList>
        <Order>
          <Title>Info</Title>
          <Info>
            <InfoItems>
              <Text>Subtotal:</Text>
              <Text>$ {total}</Text>
            </InfoItems>
            <InfoItems>
              <Text>Shipping:</Text>
              <TextBtn>Add Info</TextBtn>
            </InfoItems>
            <InfoItems>
              <Text>Grand total:</Text>
              <Text>{}</Text>
            </InfoItems>
          </Info>
          <Button btnType={TypeBtn.signInUp}>Pay</Button>
        </Order>
      </Cont>
    </>
  );
};

export default Cart;
