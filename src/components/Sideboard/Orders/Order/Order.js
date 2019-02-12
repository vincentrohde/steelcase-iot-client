import React from 'react';
import './Order.scss';

const Order = (props) => {
    const { name } = props.information;

    return (
        <div className="Order">
            <h3 className="title">{name}</h3>
        </div>
    );
}

export default Order;