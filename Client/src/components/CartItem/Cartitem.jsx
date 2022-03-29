import React from 'react';
import { Button, TypeBtn } from '../Button/Button';
import { Cont, Product, ContImg, Desc, Img, Price, Quant, Text, Total } from './CartItem.styles';

const Cartitem = ({ el }) => {
  return (
    <Cont>
      <Product>
        <ContImg>
          <Img src={el.img} />
        </ContImg>
        <Desc>
          <Text>{el.desc}</Text>
          <Button btnType={TypeBtn.cart}>Remove</Button>
        </Desc>
      </Product>
      <Price>{el.price}</Price>
      <Quant>{el.units}</Quant>
      <Total>{el.price}</Total>
    </Cont>
  );
};

export default Cartitem;
