import React from "react";

import CustomButton from "./../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import "./CartDropdown.scss";
import { selectCartItems } from "./../../redux/cart/cart-selectors";

const CartDropdown = () => {
  const state = useSelector(state => state);
  const cartItems = selectCartItems(state);

  return (
    <div className={`cart-dropdown`}>
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
