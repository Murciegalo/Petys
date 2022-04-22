import React from 'react';
import { Link } from 'react-router-dom';
import { Caption, Cont, ContImg, Img, Text, Title } from './Card.styles';

const Card = ({ category, product }) => {
  return (
    <Cont class="snip1104">
      <ContImg>
        <Img src={product.imgCover} alt="sample35" />
        <Caption>
          <Link to={`/${category}/${product._id}`}>
            <Title>
              Buy <Text> Pet</Text>
            </Title>
          </Link>
        </Caption>
      </ContImg>
    </Cont>
  );
};

export default Card;
