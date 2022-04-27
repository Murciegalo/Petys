import React from 'react';
import { useSelector } from 'react-redux';
import { grabCartItems, grabIsShipFormOpen, selectCartTotal } from '../../redux/cart/cart.selector';
// import { Button, TypeBtn } from '../../components/Button/Button';
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
  Btn,
} from './Cart.styles';
import { ShippingForm } from '../../components/ShippingForm/ShippingForm';

const Cart = () => {
  const cartItems = useSelector(grabCartItems);
  const isShipFormOpen = useSelector(grabIsShipFormOpen);
  const total = useSelector(selectCartTotal);

  const display = isShipFormOpen && <ShippingForm />;
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
              {display}
            </InfoItems>
            <InfoItems>
              <Text>Grand total:</Text>
              <Text>{}</Text>
            </InfoItems>
          </Info>
          <Btn>Pay</Btn>
        </Order>
      </Cont>
    </>
  );
};

export default Cart;
