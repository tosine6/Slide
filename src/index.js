import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Route,BrowserRouter as Router} from 'react-router-dom';

import SignUpForm from './SignUp';
import Login from './Login';
import Home from './components/Home';
import Welcome from './components/Welcome';
import OrderForm from './components/OrderForm';
import Game from './components/Game';

const routing = (

    <Router>
        <Switch>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/order" component={OrderForm}/>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/signup" component={SignUpForm}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/app" component={App}/>
        </Switch>
    </Router>

)


ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
