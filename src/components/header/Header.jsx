import React from "react";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

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
import "./Header.scss";

const Header = () => {
  const state = useSelector(state => state);
  const currentUser = selectCurrentUser(state);
  const hidden = selectCartHidden(state);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/contact">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
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
