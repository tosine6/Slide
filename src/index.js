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
import List from './components/List';
import Chat from './components/Chat';
import SideNav from './components/SideNav';
import DragAndDrop from './components/DragAndDrop';
import DragAndDrop1 from './components/DragAndDrop1';
import FileList from './components/FileList';

const routing = (

    <Router>
        <Switch>
        <Route exact path="/file" component={FileList}/>
        <Route exact path="/drag1" component={DragAndDrop1}/>
        <Route exact path="/" component={DragAndDrop}/>
        <Route exact path="/chat1" component={Chat}/>
        <Route exact path="/chat" component={SideNav}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/order" component={OrderForm}/>
        <Route exact path="/welcome" component={Welcome}/>
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
