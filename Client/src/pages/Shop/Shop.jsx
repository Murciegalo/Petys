import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreviewCont } from '../../components/CategoriesPreviewCont/CategoriesPreviewCont';
import { getAllPetsStart } from '../../redux/pets/pet.actions';
import { groupItemsByCategory } from '../../redux/pets/pet.selector';

const Shop = () => {
  const dispatch = useDispatch();
  const data = useSelector(groupItemsByCategory);
  useEffect(() => {
    dispatch(getAllPetsStart());
    // eslint-disable-next-line
  }, []);
  console.log('DATA', data);
  return (
    <Routes>
      {/* <Categories categories={data} /> */}
      <Route index element={<CategoriesPreviewCont data={data} />} />
    </Routes>
  );
};

export default Shop;
