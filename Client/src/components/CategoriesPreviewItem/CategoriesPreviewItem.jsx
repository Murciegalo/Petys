import React from 'react';
import { Link } from 'react-router-dom';
import { Cont, Img } from './CategoriesPreviewItem.styles';

const CategoriesPreviewItem = ({ product }) => {
  return (
    <Cont>
      <Link to={`${product._id}`}>
        <Img src={product.imgCover} />
      </Link>
    </Cont>
  );
};

export default CategoriesPreviewItem;
