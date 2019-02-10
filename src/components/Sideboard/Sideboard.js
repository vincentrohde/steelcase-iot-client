import React from 'react';
import UserCard from "../UserCard/UserCard";
import OrderLane from "../OrderLane/OrderLane";
import './Sideboard.scss';


const Sideboard = () => {
    return (
        <div className="Sideboard">
          <UserCard/>
          <OrderLane/>
        </div>
    );
};

export default Sideboard;