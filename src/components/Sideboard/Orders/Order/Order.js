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
            <div className={`container ${name}`}>
            </div>
        </div>
    );
}

export default Order;