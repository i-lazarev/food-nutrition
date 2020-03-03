import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './stor'

// we import the (Provider) which gonna provide us with the state we created and we wrap it around our App component so every thing we put in the App gonna have access to the state
ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();
