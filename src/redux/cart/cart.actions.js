import { CartActionTypes } from "./cart-action-types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = cartItem => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
