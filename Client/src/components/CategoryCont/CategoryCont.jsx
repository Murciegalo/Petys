import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { grabItemsPerCategory } from '../../redux/pets/pet.selector';
import { formatText } from '../../utils/dbArrToObj';
import Card from '../Card/Card';
import { Cont, Gri, Header } from './CategoryCont.styles';

export const CategoryCont = () => {
  const { category } = useParams();
  let header = formatText(category);
  const showCategory = useSelector(grabItemsPerCategory(category));
  return (
    <Cont>
      <Header>{header}</Header>
      <Gri>
        {showCategory.map((el) => (
          <Card key={el._id} product={el} />
        ))}
      </Gri>
    </Cont>
  );
};
