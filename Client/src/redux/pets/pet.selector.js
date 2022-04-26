import { createSelector } from 'reselect';
import { groupBy } from '../../utils/dbArrToObj';

// Input Selector
const getPetsState = (state) => state.pets;

// Memoized Selectors
export const selectItems = createSelector([getPetsState], (state) =>
  state.pets ? Object.keys(state.pets).map((key) => state.pets[key]) : [],
);

export const groupItemsByCategory = createSelector([selectItems], (wholeCollection) =>
  wholeCollection ? groupBy(wholeCollection, 'slug') : [],
);

export const grabItemsPerCategory = (urlParam) =>
  createSelector([groupItemsByCategory], (petsCollection) => petsCollection[urlParam]);

export const grabOneItemFromCategory = (urlParam, id) =>
  createSelector([groupItemsByCategory], (petsCollection) =>
    petsCollection[urlParam]?.filter((el) => el._id === id),
  );

export const grabIsLoading = createSelector([getPetsState], (el) => el.loading);
