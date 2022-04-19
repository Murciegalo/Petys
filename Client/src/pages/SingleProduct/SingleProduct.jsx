import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { grabOneItemFromCategory } from '../../redux/pets/pet.selector';
import { getPetReviewsStarts } from '../../redux/reviews/review.actions';
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPetReviewsStarts(itemId));
  }, [itemId]);

  const { name, ratingsAvrgSeller, pedigreeM, pedigreeF, description, price, seller, imgs } =
    useSelector(grabOneItemFromCategory(category, itemId))[0];

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
