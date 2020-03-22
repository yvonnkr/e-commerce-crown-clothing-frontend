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
