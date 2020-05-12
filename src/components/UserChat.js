import React, {Component} from 'react';
import ChatFooter from './ChatFooter';
import axios from 'react-axios';
import Messages from './Messages';
import webshare from 'react-web-share-api';


export default class ChatPage extends Component{
    constructor(props){
        super(props)
        this.state={
            users: [],
            user: {},
            messages: []
        }
    }


    // fetchUsers = () =>{
    //     axios.get('http://localhost:8088/api/users/')
    //     .then((reponse) => {
    //         this.setState={
    //             message: reponse.data
    //         }
    //         console.log(reponse.data)
    //         console.log(reponse.status)
    //         console.log(reponse.statusText)
    //         console.log(reponse.headers)
    //         console.log(reponse.config)
    //     });
    // }

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

    fetchMessages = () => {
        // const token = window.sessionStorage.getItem("jwt");
        const url = "http://localhost:8088/api/users/1"
        fetch(url)
        // fetch('http://localhost:8088/api/users/'+this.state.user.id)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    messages: responseData.message,
                });
                console.log(responseData)
                console.log(responseData.message)
            })
            .catch(err => console.error(err));
    }

    componentDidMount(){
        this.fetchUsers();
        this.fetchUsers();
        this.fetchMessages();
    }

    render(){
        const {users, user, messages} = this.state;
        return(
            <div>
                <div className="container-chat">
                    <img src="/images/logo192.png" className="" alt="user" style={{ height: "50px", width: "50px"}}/>
                    <p>Hello. How are you today?</p>
                    <span className="time-right">12:00</span>
                </div>
                <div>
                    <Messages messages={messages}/>
                </div>
                <div><ChatFooter/></div>
            </div>
        );
    }
}