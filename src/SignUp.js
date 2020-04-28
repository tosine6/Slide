import React, {Component} from 'react';


export default class SignUpForm extends Component{
    constructor(props){
        super(props)
        this.state=({

        })
    }

    render(){
        return (
            <div className="container">
                <div className="image_container">
                    <img src="images/logo192.png" alt="logo" className="signin_img"></img>
                    <h2 class="form_title">Slide</h2>
                </div>
                <form class="form">
                    <div class="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" class="form-control" placeholder="Enter Username" required></input>   
                    </div>

                    <div class="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password" required></input>   
                    </div>

                    <button class="btn btn-danger" type="reset">Cancel</button>
                    <button type="Submit" class="btn btn-success  ml-3">Save</button>
                </form>
            </div>
        );
    }
}