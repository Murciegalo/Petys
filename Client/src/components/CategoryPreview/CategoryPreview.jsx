import React from 'react';
import { formatText } from '../../utils/dbArrToObj';
import Card from '../Card/Card';
import { Cont, Gri, Header } from './CategoryPreview.styles';

const CategoryPreview = ({ title, products }) => {
  let text = formatText(title);
  return (
    <Cont>
      <Header>{text}</Header>
      <Gri>
        {products
          .filter((_, idx) => idx < 4)
          .map((el) => (
            <Card key={el._id} product={el} category={title} />
          ))}
      </Gri>
    </Cont>
  );
};
export default CategoryPreview;
