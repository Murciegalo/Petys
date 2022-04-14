import React from 'react';
import CategoryPreviewItem from '../CategoryPreviewItem/CategoryPreviewItem';
import { Cont, Gri, Header } from './CategoryPreview.styles';

const CategoryPreview = ({ title, products }) => {
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
            <CategoryPreviewItem key={el._id} product={el} />
          ))}
      </Gri>
    </Cont>
  );
};
export default CategoryPreview;
