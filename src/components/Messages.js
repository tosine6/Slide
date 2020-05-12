import React from 'react';


const Messages = ({ messages, loading}) => {
    if (loading) {
        return <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    }

    const allMessages = messages.map((message, key) =>
    <div className="container-chat">
        <li key={message.id} value={message.id}>
        <img src="/images/victor.jpg" className="img-fluid rounded-circle mb-2" alt="user" style={{ height: "50px", width: "50px"}}/>
        <p>{message.text}</p>
        <span className="time-right">{message.sentTime}</span>
        </li>
    </div>
    )

    return (
        <div>
            {allMessages}
        </div>
    );
}


export default Messages;