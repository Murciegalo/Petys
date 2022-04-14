import React from 'react';
import { formatText } from '../../utils/dbArrToObj';
import { Cont, Option } from './CategoriesNav.styles';

export const Categories = ({ categories }) => {
  const display =
    categories !== null &&
    Object.keys(categories).map((el, I) => {
      let text = formatText(el);
      return <Option to={el}>{text}</Option>;
    });
  return <Cont>{display}</Cont>;
};
