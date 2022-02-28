import React from 'react'
import { Cont, Header, List, Product, ProductsList } from './Cart.styles'

const Cart = () => {
  return <Cont>
    <Header>Your Cart</Header>
    <ProductsList>
      <Product>Product</Product>    
      <List>Price</List>
      <List>Quantity</List>
      <List>Total</List>
    </ProductsList>
  </Cont>
}

export default Cart