import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { grabOneItemFromCategory } from '../../redux/pets/pet.selector';
import { Cont } from './ProductSpecs.styles';

const ShopItem = () => {
  const { category, itemId } = useParams();
  let shopItem = useSelector(grabOneItemFromCategory(category, itemId));
  console.log('OI', shopItem[0]);
  return <Cont>SINGLE PRODUCT PAGE</Cont>;
};

export default ShopItem;
