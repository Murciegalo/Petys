import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ShopItem from '../../components/ShopItem/ShopItem';
import { getAllPetsStart } from '../../redux/pets/pet.actions';
import { Pomeranian } from '../../utils/data';
import { Cont, WrapperF, Option, WrapperS } from './Shop.styles';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPetsStart());
  }, []);
  return (
    <Cont>
      <WrapperF>
        <Option to="/shop/luludepomerania">Lulu de Pomerania</Option>
        <Option to="/shop/luludepomerania">Shih Tzu</Option>
        <Option to="/shop/luludepomerania">Poodle</Option>
        <Option to="/shop/luludepomerania">Golden Retriever</Option>
        <Option to="/shop/luludepomerania">Yorkshire</Option>
        <Option to="/shop/luludepomerania">Husky Siberiano</Option>
        <Option to="/shop/luludepomerania">Buldogue francês</Option>
      </WrapperF>
      <WrapperS>
        {Pomeranian.map((el) => (
          <ShopItem key={el.id} el={el} />
        ))}
      </WrapperS>
    </Cont>
  );
};

export default Shop;
