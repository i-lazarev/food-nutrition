import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from './Login';

import HomePage from './HomePage'

export default function Container() {
    return (
        <div>
            <Link to='/' >{HomePage}</Link>
            <Link to='/Login'>{Login}</Link>
        </div>

    );
}
