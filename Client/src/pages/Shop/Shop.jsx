import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreviewCont } from '../../components/CategoriesPreviewCont/CategoriesPreviewCont';
import { CategoryCont } from '../../components/CategoryCont/CategoryCont';
import { getAllPetsStart } from '../../redux/pets/pet.actions';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    isMounted && dispatch(getAllPetsStart());
    return () => {
      isMounted = false;
      controller.abort();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreviewCont />} />
      <Route path=":category" element={<CategoryCont />} />
    </Routes>
  );
};

export default Shop;
