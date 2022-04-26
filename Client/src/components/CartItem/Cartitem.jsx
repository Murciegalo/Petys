import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, TypeBtn } from '../Button/Button';
import { Cont, Product, ContImg, Desc, Img, Price, Quant, Text } from './CartItem.styles';

const Cartitem = ({ el }) => {
  const dispatch = useDispatch();
  console.log('EL', el);
  return (
    <Cont>
      <Product>
        <ContImg>
          <Img src={el.imgCover} />
        </ContImg>
        <Desc>
          <Text>{el.sellerName}</Text>
        </Desc>
      </Product>
      <Price>{el.price}</Price>
      <Quant>{el.quantity}</Quant>
      <Button>Remove</Button>
    </Cont>
  );
};

export default Cartitem;
