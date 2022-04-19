import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPreviewCont } from '../../components/CategoriesPreviewCont/CategoriesPreviewCont';
import { CategoryCont } from '../../components/CategoryCont/CategoryCont';
import { getAllPetsStart } from '../../redux/pets/pet.actions';
import { groupItemsByCategory } from '../../redux/pets/pet.selector';

const Shop = () => {
  const dispatch = useDispatch();
  const [shopItems, setShopItems] = useState([]);
  const data = useSelector(groupItemsByCategory);
  useEffect(() => {
    dispatch(getAllPetsStart());
    setShopItems(data);
    // eslint-disable-next-line
  }, []);
  return (
    <Routes>
      <Route path=":category" element={<CategoryCont />} />
      <Route index element={<CategoriesPreviewCont data={shopItems} />} />
    </Routes>
  );
};

export default Shop;
