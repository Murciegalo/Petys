import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TypeBtn } from '../../components/Button/Button';
import { grabOneItemFromCategory } from '../../redux/pets/pet.selector';
import { getPetReviewsStarts } from '../../redux/reviews/review.actions';
import { grabToken } from '../../redux/user/user.selector';
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
  ContBtn,
  Btn,
} from './SingleProduct.styles';

const SingleProduct = () => {
  const navigate = useNavigate();
  const { category, itemId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(grabToken);
  useEffect(() => {
    dispatch(getPetReviewsStarts({ itemId, token }));
  }, [itemId, token]);

  const { name, ratingsAvrgSeller, pedigreeM, pedigreeF, description, price, seller, imgs } =
    useSelector(grabOneItemFromCategory(category, itemId))[0];

  const handleAdd = () => {
    console.log('added');
  };
  return (
    <Cont>
      <Button onClick={() => navigate(-1)} btnType={TypeBtn.signInUp}>
        Back
      </Button>
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
      <Btn onClick={handleAdd}>Add to Bag</Btn>
    </Cont>
  );
};

export default SingleProduct;
