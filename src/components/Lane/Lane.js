import React from 'react';
import { Provider } from "../../stores/Rooms";

import Rooms from '../../components/Rooms/Rooms';

import './Lane.scss';

const Lane = (props) => {
    const { information } = props;

    return (
        <div className="Lane">
            <Provider>
                <Rooms rooms={information.rooms} />
            </Provider>
        </div>
    )
};

export default Lane;