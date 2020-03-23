/**
 *npm i reselect
 *  Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
    Selectors are composable. They can be used as input to other selectors.
 */

import { createSelector } from "reselect";

//TWO TYPES OF SELECTORS

//#1.input selector  --takes in state and returns a slice of it (1 layer usaully) --doesn't use createSelector
const selectCart = state => state.cart;

//#2.output selector  --uses createSelector and input selector to build themselves
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accumilatedQuantity, cartItem) => {
      return accumilatedQuantity + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accumilatedQuantity, cartItem) => {
    return accumilatedQuantity + cartItem.quantity * cartItem.price;
  }, 0)
);
