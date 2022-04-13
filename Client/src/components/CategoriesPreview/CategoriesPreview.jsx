import React from 'react';
import CategoriesPreviewItem from '../CategoriesPreviewItem/CategoriesPreviewItem';
import { Cont, Gri, Header } from './CategoriesPreview.styles';

const CategoriesPreview = ({ title, products }) => {
  return (
    <Cont>
      <Header>{title}</Header>
      <Gri>
        {products
          .filter((_, idx) => idx < 4)
          .map((el) => (
            <CategoriesPreviewItem key={el._id} product={el} />
          ))}
      </Gri>
    </Cont>
  );
};
export default CategoriesPreview;
