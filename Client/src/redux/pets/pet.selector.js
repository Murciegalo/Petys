import { createSelector } from 'reselect';
import { arrTransformer, convertCollectionsSnapshotToMap } from '../../utils/dbArrToObj';

// Input Selector
const getPets = (state) => state.pets;

// Memoized Selector
export const grabPetCategories = createSelector([getPets], (el) =>
  convertCollectionsSnapshotToMap(el.pets),
);

export const grabCategories = createSelector([grabPetCategories], (el) => arrTransformer(el));
