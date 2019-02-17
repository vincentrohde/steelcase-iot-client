import React from 'react';
import './Order.scss';

const Order = (props) => {
    const { name } = props.information;

    return (
        <div className="Order" data-target={JSON.stringify(props.information)}>
            <h3 className="title">{name}</h3>
        </div>
    );
}

export default Order;