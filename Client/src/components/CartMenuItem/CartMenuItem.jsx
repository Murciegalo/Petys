import React, { useEffect } from 'react';
import { Button, TypeBtn } from '../Button/Button';
import { Cont, ContImg, Img, Desc, Text, Price, Quant } from './CartMenuItem.styles';

export const CartMenuItem = ({ el: { name, price, imgCover }, setTotalPrice }) => {
  useEffect(() => {
    setTotalPrice((prevState) => prevState + price);
  }, [price]);

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
      <Button btnType={TypeBtn.cartMenuItemBtn}>Remove</Button>
    </Cont>
  );
};
