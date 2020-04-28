import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export default class Login extends Component{

    constructor(props){
        super(props)
        this.state=({

        })
    }

    render(){
        return(
            <div className="container-fluid">
            <h1>Welcome to Login Form</h1>
            </div>
        );
    }
}