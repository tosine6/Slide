import React, {Component} from 'react';


export default class TopNavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            user: {},
        }
    }

    render(){

        const myStyle ={
            cursor: "pointer",
            fontSize: "30px"
        }
        return(
            <div>
                <nav className="navbar navbar-expand navbar-light sticky-top" style={{background: "#01e2ff"}}>
                <form className="">
                    <input className="form-control from-control-no-border navbar-search mr-sm-2"
                    type="text" placeholder="Search ..." arial-label="Search"/>
                </form>
                <div className="navbar-collapse collapse">
					<ul className="navbar-nav ml-auto">

						<li className="nav-item dropdown">
							<a className="nav-icon dropdown-toggle ml-2 d-inline-block d-sm-none" href="#" data-toggle="dropdown">
								<div className="position-relative">
									<i className="align-middle mt-n1" data-feather="settings"></i>
								</div>
							</a>
							<a className="nav-link nav-link-user dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                            <img src="images/user.png" alt="user" className="avatar img-fluid rounded mr-1" style={{ height: "30px", width: "30px"}}/><span class="text-dark">{this.state.user.name}</span>
                            </a>
							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item" href="/profile">Profile</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/profile">My Profile</a>
                                <a className="dropdown-item" href="/logout">Sign Out</a>
							</div>
						</li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}