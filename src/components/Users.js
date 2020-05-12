import React from 'react';
import PropTypes from 'prop-types';

const User = ({title, setClicked, lastMessage}) => {
    return(
        <div>
            <li className="nav-item" onClick={() => {setClicked(lastMessage)}}>
				<a className="font-weight-bold nav-link">
                <img src="/images/victor.jpg" className="img-fluid rounded-circle mb-2" alt="user" style={{ height: "50px", width: "50px"}}/>
                <span className="align-middle">{title}</span>
            	</a>
			</li>
        </div>
    );
};

User.propTypes = {
    action: PropTypes.func,
    setClicked: PropTypes.func,
    title: PropTypes.string,
};

export default User;
