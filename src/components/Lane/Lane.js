import React from 'react';
import Rooms from '../../components/Rooms/Rooms';
import './Lane.scss';

const Lane = () => {
    return (
        <div className="Lane">
            <h2 className="lane-title">This a label</h2>
            <Rooms />
        </div>
    );
}

export default Lane;