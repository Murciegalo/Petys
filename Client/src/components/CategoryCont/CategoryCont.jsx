import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { grabItemsPerCategory } from '../../redux/pets/pet.selector';
import { formatText } from '../../utils/dbArrToObj';
import { Button, TypeBtn } from '../Button/Button';
import Card from '../Card/Card';
import { Cont, Gri, Header } from './CategoryCont.styles';

export const CategoryCont = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  let header = formatText(category);
  const showCategory = useSelector(grabItemsPerCategory(category));
  return (
    <Cont>
      <Header>{header}</Header>
      <Button onClick={() => navigate(-1)} btnType={TypeBtn.signInUp}>
        Back
      </Button>
      <Gri>
        {showCategory.map((el) => (
          <Card key={el._id} product={el} category={category} />
        ))}
      </Gri>
    </Cont>
  );
};
