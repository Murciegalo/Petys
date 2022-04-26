import React from 'react';
import { Wrapper, Img } from './GiftBoxesItem.styles';

const GiftBoxesItem = ({ el: { img } }) => {
  return (
    <Wrapper to="#">
      <Img src={img} />
    </Wrapper>
  );
};

export default GiftBoxesItem;
