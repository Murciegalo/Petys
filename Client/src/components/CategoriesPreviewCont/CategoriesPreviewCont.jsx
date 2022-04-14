import React from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { Categories } from '../../components/Categories/Categories';

export const CategoriesPreviewCont = ({ data }) => {
  return (
    <>
      <Categories categories={data} />
      {Object.keys(data).map((title) => {
        const products = data[title];
        return <CategoryPreview key={title} data={data} title={title} products={products} />;
      })}
    </>
  );
};
