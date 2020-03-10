import { createSelector } from "reselect";

const selectCollections = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.collections
);
