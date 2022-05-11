import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TypeBtn } from '../../components/Button/Button';
import { addItemCart } from '../../redux/cart/cart.actions';
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
  MenuBtns,
  Header,
} from './SingleProduct.styles';

const SingleProduct = () => {
  const navigate = useNavigate();
  const { category, itemId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(grabToken);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    isMounted && dispatch(getPetReviewsStarts({ itemId, token }));
    return () => {
      isMounted = false;
      controller.abort();
    };
    // eslint-disable-next-line
  }, [itemId, token]);

  const {
    name,
    ratingsAvrgSeller,
    pedigreeM,
    pedigreeF,
    description,
    price,
    seller,
    imgs,
    imgCover,
  } = useSelector(grabOneItemFromCategory(category, itemId))[0];

  const handleAdd = () => {
    let sellerName = seller[0].name;
    let photo = seller[0].photo;
    dispatch(addItemCart({ itemId, name, price, imgCover, sellerName, photo, quantity: 1 }));
  };
  return (
    <Cont>
      <MenuBtns>
        <Button btnType={TypeBtn.nav} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button btnType={TypeBtn.nav} onClick={handleAdd}>
          Add to bag
        </Button>
      </MenuBtns>
      <Wrap>
        <GridPics>{imgs.length > 0 && imgs.map((el, I) => <Pic key={I} src={el} />)}</GridPics>
        <Section>
          <Header>{name}</Header>
          <Text>{pedigreeF}</Text>
          <Text>{pedigreeM}</Text>
          <Description>{description}</Description>
          <Text>{price}</Text>
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
