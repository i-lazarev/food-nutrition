import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
//import HomePage from "./components/HomePage";
//import Login from "./components/Login";
import OneRecipe from "./components/OneRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApiProvider } from "./components/ApiContext";

const App = () => {
  return (
    <ApiProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/recipies" exact component={Search} />
            <Route path="/recipies/:id" component={OneRecipe} />
            {/* <Route path="/login" exact component={Login} /> */}
          </Switch>
        </div>
      </Router>
    </ApiProvider>
  );
};

export default App;
