import React from 'react'
import Cartitem from '../../components/CartItem/Cartitem'
import { products } from '../../data'
import { Cont, Header, List, Product, ProductFeatures, ProductList } from './Cart.styles'

const Cart = () => {
  return <Cont>
    <Header>Your Cart</Header>
    <ProductFeatures>
      <Product>Product</Product>    
      <List>Price</List>
      <List>Quantity</List>
      <List>Total</List>
    </ProductFeatures>
    <ProductList>
      {
        products.map(el => <Cartitem key={el.id} el={el} />)
      }
    </ProductList>
  </Cont>
}

export default Cart