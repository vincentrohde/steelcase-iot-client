import React from 'react';
import './Order.scss';

const Order = (props) => {
    const { name, positions } = props.information;
    const target = {
        receiver: "controller",
        targets: positions
    }

    return (
        <div className="Order" data-target={JSON.stringify(target)}>
            <h3 className="title">{name}</h3>
        </div>
    );
}

export default Order;