import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage'
import LoginHeader from './LoginHeader'

export default function Container() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/LoginHeader" component={LoginHeader} />
                <Route path="/Login" component={Login} />
            </Switch>
        </Router>
    );
}
