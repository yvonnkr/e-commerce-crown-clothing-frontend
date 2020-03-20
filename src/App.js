import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/signin-signup/SignInAndSignUp";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
