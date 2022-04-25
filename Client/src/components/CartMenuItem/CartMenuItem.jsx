import React, { useState } from 'react';
import { Button, TypeBtn } from '../Button/Button';
import { Cont, Product, ContImg, Desc, Img, Price, Quant, Text } from '../CartItem/CartItem.styles';

export const CartMenuItem = ({ name, price, imgCover, sellerName, photo }) => {
  const [units, setUnits] = useState(1);
  return (
    <Cont>
      <Product>
        <ContImg>
          <Img src={imgCover} />
        </ContImg>
        <Desc>
          <Text>{name}</Text>
          <Button btnType={TypeBtn.checkout}>Remove</Button>
        </Desc>
      </Product>
      <Price>{price}</Price>
      <Quant>{units}</Quant>
    </Cont>
  );
};
