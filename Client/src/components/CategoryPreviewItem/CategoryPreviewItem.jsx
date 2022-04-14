import React from 'react';
import { Link } from 'react-router-dom';
import { Cont, Img } from './CategoryPreviewItem.styles';

const CategoryPreviewItem = ({ product }) => {
  return (
    <Cont>
      <Link to={`${product._id}`}>
        <Img src={product.imgCover} />
      </Link>
    </Cont>
  );
};

export default CategoryPreviewItem;
