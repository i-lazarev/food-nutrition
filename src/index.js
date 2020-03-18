import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// we import the (Provider) which gonna provide us with the state we created and we wrap it around our App component so every thing we put in the App gonna have access to the state
ReactDOM.render(

    <div>
        <App />
    </div>

    , document.getElementById('root'));

serviceWorker.unregister();
