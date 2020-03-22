import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const itemsCount = selectCartItemsCount(state);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
