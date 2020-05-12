import React, {Component} from 'react';
import axios from 'react-axios';
import UserIcon from './UserIcon';
import UserChat from './UserChat';
import TopNavBar from './TopNavBar';



export default class SideNav extends Component{
    constructor(props){
        super(props)
        this.state={
            users: [],
            user: {},
            messages: {}
        }
    }


    fetchUsers = () => {
        // const token = window.sessionStorage.getItem("jwt");
        fetch('http://localhost:8088/api/users/')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    users: responseData,
                });
            })
            .catch(err => console.error(err));
    }


    fetchUser = () => {
        // const token = window.sessionStorage.getItem("jwt");
        fetch('http://localhost:8088/api/users/1')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    user: responseData,
                });
            })
            .catch(err => console.error(err));
    }

    fetchMessage = () => {
        // const token = window.sessionStorage.getItem("jwt");
        fetch('http://localhost:8088/api/messages/')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    message: responseData,
                });
            })
            .catch(err => console.error(err));
    }

    componentDidMount(){
        this.fetchUsers();
    }

    render(){
        const {users} = this.state;

        return(
            <div>
                <div>
                <nav className="sidebar">
                    <div className="sidebar-content">
                        <UserIcon users={users}/>
                    </div>
                </nav>
                </div>
                <div className="main">
                <div>
                    {/* <TopNavBar/> */}
                </div>
                    <UserChat/>
                </div>
            </div>
        );
    }
}