import React from 'react';
import { CategoriesItem } from '../CategoriesItem/CategoriesItem';
import { Cont } from './Categories.styles';

export const Categories = ({ categories }) => {
  const display =
    categories !== null &&
    Object.keys(categories).map((el, I) => <CategoriesItem key={I} el={el} />);
  return <Cont>{display}</Cont>;
};
