import { createSelector } from 'reselect';

const sums = (state) => state.weigherReducer.weighers;
console.log('TEST', sums);

export const getSumWeights = createSelector(sums, (items) => {
  return items.reduce((subtotal, item) => subtotal + item.weight, 0).toFixed(2);
});
