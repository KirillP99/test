import { createSelector } from 'reselect';

export const imagesSelector = createSelector(
  (state) => state.images.images,
  (images) => images,
);
