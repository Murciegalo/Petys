import React from 'react';
import CategoriesPreviewItem from '../CategoriesPreviewItem/CategoriesPreviewItem';
import { Cont, Gri, Header } from './CategoriesPreview.styles';

const CategoriesPreview = ({ title, products }) => {
  let text = title
    .split('-')
    .join(' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <Cont>
      <Header>{text}</Header>
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
