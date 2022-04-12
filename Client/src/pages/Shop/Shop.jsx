import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShopItem from '../../components/ShopItem/ShopItem';
import { getAllPetsStart } from '../../redux/pets/pet.actions';
import { Pomeranian } from '../../utils/data';
import { Cont, WrapperS } from './Shop.styles';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPetsStart());
  }, []);
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
