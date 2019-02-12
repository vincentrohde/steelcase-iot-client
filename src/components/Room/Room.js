import React from 'react';
import './Room.scss';

const Room = (props) => {

    const { id } = props.information || '000';

    return (
        <div className="Room">{id}</div>
    );
}

export default Room;