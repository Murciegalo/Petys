import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { grabOneItemFromCategory } from '../../redux/pets/pet.selector';
import {
  Cont,
  Section,
  Wrap,
  Pic,
  GridPics,
  Title,
  Text,
  Description,
  Total,
} from './SingleProduct.styles';

const SingleProduct = () => {
  const { category, itemId } = useParams();
  const { name, ratingsAvrgSeller, pedigreeM, pedigreeF, description, price, seller, imgs } =
    useSelector(grabOneItemFromCategory(category, itemId))[0];
  console.log(seller);
  return (
    <Cont>
      <Wrap>
        <GridPics>{imgs.length > 0 && imgs.map((el, I) => <Pic key={I} src={el} />)}</GridPics>
        <Section>
          <Title>{name}</Title>
          <Text>{pedigreeF}</Text>
          <Text>{pedigreeM}</Text>
          <Description>{description}</Description>
          <Total>{price}</Total>
          <Title>Seller</Title>
          <Title>{seller[0].name}</Title>
          <img src={seller[0].photo} alt="profile" />
          <Text>{ratingsAvrgSeller}</Text>
        </Section>
      </Wrap>
    </Cont>
  );
};

export default SingleProduct;
