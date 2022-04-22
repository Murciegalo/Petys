import React from 'react';
import { Link } from 'react-router-dom';
import { Caption, Cont, ContImg, Img, Text, Title } from './Card.styles';

const Card = ({ category, product }) => {
  return (
    <Cont>
      <ContImg>
        <Link to={`/${category}/${product._id}`}>
          <Img src={product.imgCover} alt="sample35" />
          <Caption>
            <Title>
              Buy <Text> Pet</Text>
            </Title>
          </Caption>
        </Link>
      </ContImg>
    </Cont>
  );
};

export default Card;
