import React from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { grabIsLoading } from '../../redux/pets/pet.selector';
import Categories from '../CategoriesNav/CategoriesNav';
import Spinner from '../Spinner/Spinner.component';

export const CategoriesPreviewCont = ({ data }) => {
  const isLoading = useSelector(grabIsLoading);
  // const display =
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Categories categories={data} />
      {Object.keys(data).map((title) => {
        const products = data[title];
        return <CategoryPreview key={title} data={data} title={title} products={products} />;
      })}
    </>
  );
};
