import React from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import LoginHeader from './Components/LoginHeader';
import HomePage from './Components/HomePage'

function App() {

  return (
    <div className="App">
      <Router>
      <Container/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/LoginHeader" component={LoginHeader} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
