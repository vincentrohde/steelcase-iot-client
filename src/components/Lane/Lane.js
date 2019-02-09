import React from 'react';
import Rooms from '../../components/Rooms/Rooms';
import './Lane.scss';

const Lane = (props) => {
    const title = props.title || 'Räume';

    return (
        <div className="Lane">
            <h2 className="lane-title">{title}</h2>
            <Rooms className="rooms" />
        </div>
    );
}

export default Lane;