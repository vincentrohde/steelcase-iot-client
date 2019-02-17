import React, { Component } from 'react';
import UserCard from "./UserCard/UserCard";
import Orders from "./Orders/Orders";

import './Sideboard.scss';

class Sideboard extends Component{
    constructor(props) {
        super();
        this.props = props;
    }

    componentWillMount() {}

    componentDidMount() {
        const sideboard = document.querySelector('.Sideboard');
        const openTargetSocket = this.openTargetSocket.bind(this);

        sideboard.addEventListener('click', function(event) {
            const target = event.target;
            if(target.classList.contains('Order')) {
                const orderTarget = target.dataset.target;
                openTargetSocket(orderTarget);
            }
        });

    }

    openTargetSocket(target) {
        const connection = new WebSocket('ws://10.51.7.233:9898');

        connection.onopen = function() {
            connection.onmessage = function (response) {
                const { data } = response;
                console.log(data);
            };

            connection.send(target);

            connection.onclose = function() {
                console.log('connection is closed');
            };
        }
    }

    render() {
        return (
            <div className="Sideboard">
                <UserCard/>
                <Orders/>
            </div>
        );
    }
}

export default Sideboard;