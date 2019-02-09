import React from 'react';
import './OrderLane.scss';
import AddButton from "../AddButton/AddButton";


// this is for the component for the OrderLane

const OrderLane = () => {
    return (
        <div className="OrderLane-container">
            <div className="OrderLane-box"></div>
            <div className="OrderLane-box right"></div>
            <div className="OrderLane-box"></div>
            <div className="AddButton-container right"><AddButton/></div>
        </div>
    );
};

export default OrderLane;