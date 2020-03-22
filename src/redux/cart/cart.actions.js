import { CartActionTypes } from "./cart-action-types";

export const toggleCartHidden = () => dispatch => {
  dispatch({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  });
};
