import React from 'react';
import { Link } from 'react-router-dom';

import './Room.scss';

const Room = (props) => {

    const {roomdescription} = "Raum";
    const { id } = props.information || '000';
    const link = `/room/${id}`;

    return (
        <Link to={link} className="Room"> {id}</Link>
    );
}

export default Room;