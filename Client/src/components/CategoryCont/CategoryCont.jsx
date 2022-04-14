import React from 'react';
import { useParams } from 'react-router-dom';

export const CategoryCont = () => {
  const { category } = useParams();
  console.log(category, 'CATEGORY ROUTE');
  return <div>CategoryCont</div>;
};
