import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



export default class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            passowrd: ''
        }
    }


    handleClick(event){
        var baseUrl = "http://localhost:8081/api/";
        var Self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.passowrd,
        }

        // axios.post(baseUrl + 'login', payload)
        // .then(function (response){
        //     if(response.data.code == 200){
        //         console.log("LOgin Successful")
        //     }
        // })
    }

    render(){

        // return (
        //     <section>
        //         <div class="container_admin">
        //                     <div className="image_container">
        //                         <img src="images/logo192.png" alt="logo" className="signin_img"></img>
        //                         <h2 class="form_title">Internet Solutions</h2>
        //                     </div>
        //                     <form method="POST" class="" id="login-form">
        //                         <div class="form-group1">
        //                             <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
        //                             <input type='text' placeholder='Enter email' name='emailAddress' onChange={this.handleChange}></input>
        //                         </div>
        //                         <div class="form-group">
        //                             <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
        //                             <input type='password' placeholder='Enter Password' name='password' onChange={this.handleChange}></input>
        //                         </div>
        //                     </form>
        //                     <div class="form_group form_button">
        //                         <p class="validationError">{this.state.errors}</p>
        //                         <button onClick={this.login} class="form_submit">Log in</button>
        //                 </div>
        //             </div>
        //     </section>
        // );

        return (
            <section>
                <div class="container_admin">
                            <div className="image_container">
                                <img src="images/is-logo.png" alt="logo" className="signin_img"></img>
                                <h2 class="form_title">Slide</h2>
                            </div>
                            <form method="POST" class="" id="">
                                <div className="form-group">
                                    <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type='text' placeholder='Enter email' name='emailAddress' onChange={this.handleChange}></input>
                                    
                                </div>
                                <div class="form-group">
                                    <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                    <input type='password' placeholder='Enter Password' name='password' onChange={this.handleChange}></input>
                                </div>
                            </form>
                            <div class="form_group form_button">
                                <p class="validationError">{this.state.errors}</p>
                                <button onClick={this.login} class="form_submit">Log in</button>
                        </div>
                    </div>
            </section>
        );


        // return(
        //     <div className="container-fluid">
        //         <MuiThemeProvider>
        //             <div>
        //                 <h4>Slide</h4>

        //                 <div>
        //                     <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
        //                     <TextField hintText="Enter your name" floatingLabelText="Username" onChange={(event, newValue) =>
        //                     this.setState({username:newValue})}
        //                 />
        //                 </div>
        //                 <div>
        //                     <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
        //                     <TextField type="password" hintText="Enter your password" floatingLabelText="Password" onChange={(event, newValue) => 
        //                     this.setState({password:newValue})}/>
        //                 </div>

        //                 <button className="btn btn-primary" onClick={(event)=>this.handleClick(event)} style={style}>Submit</button>
        //             </div>
        //         </MuiThemeProvider>
        //     </div>
        // );
    }
}

const style ={
    margin: 15,
}