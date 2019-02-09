import React from 'react';
import './Room.scss';

// this is for the component for the individual rooms

const Room = (props) => {

    const roomNr = props.roomNr || 1.06;

    return (
        <div className="Room">{roomNr}</div>
    );
}

export default Room;