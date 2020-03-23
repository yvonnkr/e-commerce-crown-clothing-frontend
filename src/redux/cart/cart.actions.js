import { CartActionTypes } from "./cart-action-types";

export const toggleCartHidden = () => dispatch => {
  dispatch({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  });
};

export const addItem = item => dispatch => {
  dispatch({
    type: CartActionTypes.ADD_ITEM,
    payload: item
  });
};

export const removeItem = item => dispatch => {
  dispatch({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  });
};

export const clearItemFromCart = cartItem => dispatch => {
  dispatch({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: cartItem
  });
};
