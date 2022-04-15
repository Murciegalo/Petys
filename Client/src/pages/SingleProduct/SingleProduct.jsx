import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { grabOneItemFromCategory } from '../../redux/pets/pet.selector';
import { Cont, Section, Wrap } from './SingleProduct.styles';

const SingleProduct = () => {
  const { category, itemId } = useParams();
  let shopItem = useSelector(grabOneItemFromCategory(category, itemId));
  console.log('OI', shopItem[0]);
  return (
    <Cont>
      <Wrap>
        <Section></Section>
        <Section></Section>
      </Wrap>
    </Cont>
  );
};

export default SingleProduct;
