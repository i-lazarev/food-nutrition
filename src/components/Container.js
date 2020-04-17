import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import Signup from "./Signup";
import Info from "./CreateAccount";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import OneRecipe from "./OneRecipe";
import { TokenContext, TokenProvider } from "./TokenContext";
import FavFood from "./FavFood";
import EditAccount from "./EditAccount";

export default function Container() {
  return (
    <TokenProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/create-account" component={Info} />
          <Route path="/edit-account-info" component={EditAccount} />
          <Route path="/favorite" component={FavFood} />
          <Route path="/recipes" exact component={Search} />
          <Route path="/recipe/:id" component={OneRecipe} />
        </Switch>
      </Router>
    </TokenProvider>
  );
}
