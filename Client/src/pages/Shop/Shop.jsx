import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreviewCont } from '../../components/CategoriesPreviewCont/CategoriesPreviewCont';
import { CategoryCont } from '../../components/CategoryCont/CategoryCont';
import { getAllPetsStart } from '../../redux/pets/pet.actions';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPetsStart());
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ 'background-color': '#f2f7ff' }}>
      <Routes>
        <Route index element={<CategoriesPreviewCont />} />
        <Route path=":category" element={<CategoryCont />} />
      </Routes>
    </div>
  );
};

export default Shop;
