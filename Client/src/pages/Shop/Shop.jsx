import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../../components/Categories/Categories';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import { getAllPetsStart } from '../../redux/pets/pet.actions';
import { groupItemsByCategory } from '../../redux/pets/pet.selector';
import { Cont, WrapperS } from './Shop.styles';

const Shop = () => {
  const dispatch = useDispatch();
  const data = useSelector(groupItemsByCategory);
  useEffect(() => {
    dispatch(getAllPetsStart());
    // eslint-disable-next-line
  }, []);
  console.log('DATA', data);
  return (
    <>
      <Cont>
        <Categories categories={data} />
      </Cont>
      <Cont>
        {Object.keys(data).map((title) => {
          const products = data[title];
          return <CategoriesPreview key={title} title={title} products={products} />;
        })}
      </Cont>
      <WrapperS>
        {/* {Pomeranian.map((el) => (
          <ShopItem key={el.id} el={el} />
        ))} */}
      </WrapperS>
    </>
  );
};

export default Shop;
