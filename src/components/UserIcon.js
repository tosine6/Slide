import React from 'react';


const UserIcon = ({ users, loading}) => {
    if (loading) {
        return <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    }

    const userName = users.map((user, key) =>
    <div >
        <li className="nav-item" key={user.id} value={user.id}>
            <a className="font-weight-bold nav-link">
            <img src="/images/victor.jpg" className="img-fluid rounded-circle mb-2" alt="user" style={{ height: "50px", width: "50px"}}/>
            <p>{user.userName}</p>
            </a><hr/>
        </li>
    </div>
    )

    return (
        <div>
            {userName}
        </div>
    );
}


export default UserIcon;