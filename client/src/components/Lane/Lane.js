import React from 'react';

import Rooms from '../Rooms/Rooms';

import './Lane.scss';

const Lane = (props) => {
    const { information } = props;

    return (
        <div className="Lane">
            <Rooms />
        </div>
    )
};

export default Lane;