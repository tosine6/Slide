import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';


const List = ({ create, read, update, destroy }) => {
    const [clicked, setClicked] = useState('');

    return(
        <div>
            <h1>The last clicked button is {clicked}</h1>
            <ul>
                <ListItem title="Create" action={create} setClicked={setClicked}/>
                <ListItem title="Read" action={read} setClicked={setClicked}/>
                <ListItem title="Update" action={update} setClicked={setClicked}/>
                <ListItem title="Delete" action={destroy} setClicked={setClicked}/>
            </ul>
        </div>
    );
}


List.propTypes ={
    create: PropTypes.func,
    read: PropTypes.func,
    update: PropTypes.func,
    destroy: PropTypes.func,
};

export default List;