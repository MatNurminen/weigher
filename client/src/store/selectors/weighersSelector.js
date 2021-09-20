import { createSelector } from 'reselect';

const weigher = (state) => state.weigherReducer;

export const getSumWeights = createSelector(weigher, ({ weighers }) => {
  return weighers.reduce((subtotal, item) => subtotal + item.weight, 0);
});

export const sortedWeights = createSelector(
  weigher,
  ({ weighers, orderField }) => {
    return weighers.sort((a, b) => {
      if (a[orderField] > b[orderField]) {
        return 1;
      } else if (a[orderField] < b[orderField]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
);
