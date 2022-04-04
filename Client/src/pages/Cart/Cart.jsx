import React from 'react';
import { Button, TypeBtn } from '../../components/Button/Button';
import Cartitem from '../../components/CartItem/Cartitem';
import { products } from '../../utils/data';
import {
  Cont,
  Header,
  List,
  Product,
  ProductFeatures,
  ProductList,
  Total,
  Text,
} from './Cart.styles';

const Cart = () => {
  return (
    <Cont>
      <Header>Your Cart</Header>
      <ProductFeatures>
        <Product>Product</Product>
        <List>Price</List>
        <List>Quantity</List>
        <List>Total</List>
      </ProductFeatures>
      <ProductList>
        {products.map((el) => (
          <Cartitem key={el.id} el={el} />
        ))}
      </ProductList>
      <Total>
        <Text>TOTAL</Text>
        <Text>300 $</Text>
      </Total>
      <Button btnType={TypeBtn.signInUp}>Pay</Button>
    </Cont>
  );
};

export default Cart;
