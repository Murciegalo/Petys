import React from 'react';
import { Link } from 'react-router-dom';
import { Cont, Img } from './Card.styles';

const Card = ({ category, product }) => {
  return (
    <Cont>
      <Link to={`/${category}/${product._id}`}>
        <Img src={product.imgCover} />
      </Link>
    </Cont>
  );
};

export default Card;
