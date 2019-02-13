import React from 'react';
import UserCard from "./UserCard/UserCard";
import Orders from "./Orders/Orders";

import './Sideboard.scss';

const Sideboard = () => {
    return (
        <div className="Sideboard">
            <UserCard/>
            <Orders />
        </div>
    );
};

export default Sideboard;