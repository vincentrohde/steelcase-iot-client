import React from 'react';
import Rooms from '../../components/Rooms/Rooms';
import './Lane.scss';

const Lane = (props) => {
    const title = props.title || 'Räume';
    const { rooms } = props.information;

    return (
        <div className="Lane">
            <h2 className="title">{title}</h2>
            <Rooms />
        </div>
    );
}

export default Lane;