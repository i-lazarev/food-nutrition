import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import Signup from './Signup';
import Info from './Info';


export default function Container() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/sign-up" component={Signup} />
          <Route path="/create-account" component={Info} />
          
        </Switch>
      </Router>
    );
}
