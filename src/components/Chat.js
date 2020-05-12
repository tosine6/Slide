import React, {useState} from 'react';
import PropTypes from 'prop-types';
import User from './Users';
import UserChat from './UserChat';



const Chat = ({ users, read}) => {
    const [clicked, setClicked] = useState('');

    return(
        <div>
            <div>
            <nav className="sidebar">
                <div className="sidebar-content">
                    <ul className="nav flex-column nav-pills">
                        <User title="Adebiyi" lastMessage={<UserChat/>} setClicked={setClicked}/>
                    </ul>
                </div>
            </nav>
            </div>
            <div>allUsers</div>
            <div className="main">
             {clicked}
            </div>
        </div>
    );
}


Chat.propTypes ={
    create: PropTypes.func,
    read: PropTypes.func,
    update: PropTypes.func,
    destroy: PropTypes.func,
};

export default Chat;

