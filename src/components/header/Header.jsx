import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "./../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "./../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { signOutStart } from "./../../redux/user/user.actions";
import "./Header.scss";

const Header = () => {
  const state = useSelector(state => state);
  const currentUser = selectCurrentUser(state);
  const hidden = selectCartHidden(state);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/contact">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
