import React from 'react';
import Rooms from '../../components/Rooms/Rooms';
import './Lane.scss';

const Lane = (props) => {
    //const title = props.title || 'Räume';
    //const { Room } = props.information;

    return (
        <div className="Lane">
            <Rooms />
        </div>
    )
};

export default Lane;