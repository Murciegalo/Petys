import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemCart } from '../../redux/cart/cart.actions';
import { TextBtn } from '../../pages/Cart/Cart.styles';
import { Cont, Product, ContImg, Desc, Img, Price, Quant, Text, Remove } from './CartItem.styles';

const Cartitem = ({ el }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeItemCart(el.itemId));
  };
  return (
    <Cont>
      <Product>
        <ContImg>
          <Img src={el.imgCover} />
        </ContImg>
        <Desc>
          <Text>{el.name}</Text>
          <Text>{el.sellerName}</Text>
        </Desc>
      </Product>
      <Price>$ {el.price}</Price>
      {/* <Quant>{el.quantity}</Quant> */}
      <Remove>
        <TextBtn onClick={handleDelete}>Remove</TextBtn>
      </Remove>
    </Cont>
  );
};

export default Cartitem;
