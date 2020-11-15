import React from 'react';
import { Link } from 'react-router-dom';

import './Room.scss';

const Room = (props) => {
    const { id } = props.information || '000';
    const {name} = props.information || 'Raum';
    const link = `/room/${id}`;

    return (
        <Link to={link} className="Room">{id} <span>{name}</span></Link>
    );
}

export default Room;