import { createSelector } from 'reselect';
import { groupBy } from '../../utils/dbArrToObj';

// Input Selector
const getPets = (state) => state.pets.pets;

// Memoized Selectors
export const selectItems = createSelector([getPets], (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const grabItemsPerCategory = (urlParam) =>
  createSelector([getPets], (petsCollection) => petsCollection[urlParam]);

export const groupItemsByCategory = createSelector([selectItems], (wholeCollection) =>
  wholeCollection ? groupBy(wholeCollection, 'slug') : [],
);
