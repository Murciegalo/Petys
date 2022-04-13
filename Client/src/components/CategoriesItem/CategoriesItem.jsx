import React from 'react';
import { Option } from './CategoriesItem.styles';

export const CategoriesItem = ({ el }) => {
  let text = el
    .split('-')
    .join(' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return <Option to={text}>{text}</Option>;
};
