import React from 'react';
import { Provider } from "../../stores/Orders";
import UserCard from "./UserCard/UserCard";
import Orders from "./Orders/Orders";

import './Sideboard.scss';

const Sideboard = () => {
    return (
        <div className="Sideboard">
            <UserCard/>
            <Provider>
                <Orders />
            </Provider>
        </div>
    );
};

export default Sideboard;