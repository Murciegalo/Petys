import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemCart } from '../../redux/cart/cart.actions';
import { Button, TypeBtn } from '../Button/Button';
import { Cont, ContImg, Img, Desc, Text, Price, Quant } from './CartMenuItem.styles';

export const CartMenuItem = ({ el: { itemId, name, price, imgCover } }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeItemCart(id));
  };
  return (
    <Cont>
      <ContImg>
        <Img src={imgCover} />
      </ContImg>
      <Desc>
        <Text>{name}</Text>
        <Price>${price}</Price>
        <Quant>1</Quant>
      </Desc>
      <Button onClick={() => handleDelete(itemId)} btnType={TypeBtn.cartMenuItemBtn}>
        Remove
      </Button>
    </Cont>
  );
};
