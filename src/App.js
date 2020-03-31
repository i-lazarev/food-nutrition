import React from 'react';
import './App.css';
import Container from './Components/Container';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import LoginHeader from './Components/LoginHeader';
import HomePage from './Components/HomePage'
import { RecipeProvider } from './Components/ContextAPI'

function App() {

  return (
    <RecipeProvider>
      <div className="App">
        
        <Router>
          {/* <Route container={Container} /> */}
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/LoginHeader" component={LoginHeader} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </div>
    </RecipeProvider>
  );
}

export default App;
