import React from 'react';
import { Cont, Img } from './ShopItem.styles';

const ShopItem = ({ el }) => {
  return (
    <Cont to={`${el._id}`}>
      <Img src={el.imgCover} />
    </Cont>
  );
};

export default ShopItem;
