import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
//import Container from "./components/Container";
import OneRecipe from "./components/OneRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApiProvider } from "./components/ApiContext"

const App = () => {
  return (
    <ApiProvider>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/recipies" exact component={Search} />
          <Route path="/recipies/:id" component={OneRecipe} />
        </Switch>
      </div>
    </Router>
    </ApiProvider>
  );
};

export default App;
