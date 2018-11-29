import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Signup from './components/auth/Signup';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" component={Signup} />
        </App>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
