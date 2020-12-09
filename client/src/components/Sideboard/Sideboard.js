import React, { Component } from 'react';
import { connect } from "../../stores/Store";

import UserCard from "./UserCard/UserCard";
import Orders from "./Orders/Orders";
import CTAButton from '../CTAButton/CTAButton';

import './Sideboard.scss';

class Sideboard extends Component{
    constructor(props) {
        super();
        this.props = props;
        this.chairs = this.props.chairs;
        this.id = this.props.id;
    }

    componentWillMount() {}

    componentDidMount() {
        const sideboard = document.querySelector('.Sideboard');
        const openTargetSocket = this.openTargetSocket.bind(this);
        const fillTargetsWithChairs = this.fillTargetsWithChairs.bind(this);

        sideboard.addEventListener('click', function({ target }) {
            if(target.classList.contains('Order')) {
                const orderTarget = JSON.parse(target.dataset.target);

                // prevent websocket creation if chairs and targets don't
                // match up
                if(fillTargetsWithChairs(orderTarget)) {
                    openTargetSocket(orderTarget);
                }
            }
        });

    }

    openTargetSocket(order) {
        const connection = new WebSocket('ws://192.168.8.102:9898');
        console.log(order);

        connection.onopen = function() {
            connection.onmessage = function (response) {
                const { data } = response;
                console.log(data);
            };

            connection.send(order);

            connection.onclose = function() {
                console.log('connection is closed');
            };
        }
    }

    fillTargetsWithChairs({ targets }) {
        const chairs = this.props.chairs;

        if(chairs.length !== targets.length) {
            return false;
        }

        targets.forEach((target, index) => {
            const chair = chairs[index];
            target.id = chair.id;
        });

        return true;
    }

    render() {
        return (
            <div className="Sideboard">
                <UserCard id={this.id} />
                <Orders />
                <div className="cta-container">
                    <CTAButton title={"zu den Räumen"} />
                </div>
            </div>
        );
    }
}

export default connect(({ chairs }) => ({ chairs }))(Sideboard);