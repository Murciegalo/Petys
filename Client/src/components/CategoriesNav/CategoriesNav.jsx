import React from 'react';
import { Cont, Option } from './CategoriesNav.styles';

export const Categories = ({ categories }) => {
  const display =
    categories !== null &&
    Object.keys(categories).map((el, I) => {
      let text = el
        .split('-')
        .join(' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return <Option to={el}>{text}</Option>;
    });
  return <Cont>{display}</Cont>;
};
