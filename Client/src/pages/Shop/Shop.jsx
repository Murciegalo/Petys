import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShopItem from '../../components/ShopItem/ShopItem';
import { getAllPetsStart } from '../../redux/pets/pet.actions';
import { selectItemsForPreview } from '../../redux/pets/pet.selector';
import { Pomeranian } from '../../utils/data';
import { Cont, WrapperS } from './Shop.styles';

const Shop = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectItemsForPreview);
  useEffect(() => {
    dispatch(getAllPetsStart());
  }, []);
  console.log('DATA', data);
  return (
    <Cont>
      <WrapperS>
        {Pomeranian.map((el) => (
          <ShopItem key={el.id} el={el} />
        ))}
      </WrapperS>
    </Cont>
  );
};

export default Shop;
