import React from 'react';
import { Cont, Img } from './ShopItem.styles';

const ShopItem = ({ el }) => {
  return (
    <Cont to={`${el.id}`}>
      <Img src={el.img} />
    </Cont>
  );
};

export default ShopItem;
