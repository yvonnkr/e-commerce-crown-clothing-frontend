import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "./../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const cartItems = selectCartItems(state);
  const history = useHistory();

  return (
    <div className={`cart-dropdown`}>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
