import React, { Component } from 'react';
import { connect } from "../../../stores/Store";
import Order from "./Order/Order";
import AddButton from "../../AddButton/AddButton";

import './Orders.scss';

class Orders extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const { orders } = this.props;

        return (
            <div className="OrderLane-container">
                {/*<div className="title-container">*/}
                    {/*<h3 className="title">Anordnungen</h3>*/}
                {/*</div>*/}
                <div className="AddButton-container">
                    <AddButton/>
                </div>
                {
                    orders.map((order, index) => <Order information={order} key={index} />)
                }
            </div>
        );
    }
};

export default connect(({ orders }) => ({ orders }))(Orders);