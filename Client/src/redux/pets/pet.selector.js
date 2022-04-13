import { createSelector } from 'reselect';

// Input Selector
const getPets = (state) => state.pets.pets;

// Memoized Selectors

export const grabItem = (urlParam) =>
  createSelector([getPets], (petsCollection) => petsCollection[urlParam]);

export const selectItemsForPreview = createSelector([getPets], (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : [],
);
