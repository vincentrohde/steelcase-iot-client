/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import UserCard from "./UserCard/UserCard";
import Orders from "./Orders/Orders";

import './Sideboard.scss';

class Sideboard extends Component{
    constructor(props) {
        super();
        this.props = props;
        this.chairs = [];
    }

    componentWillMount() {
        this.openChairSocket();
    }

    componentDidMount() {
        const sideboard = document.querySelector('.Sideboard');
        const openTargetSocket = this.openTargetSocket.bind(this);

        sideboard.addEventListener('click', function(event) {
            const target = event.target;
            if(target.classList.contains('Order')) {
                openTargetSocket();
            }
        });

    }



    openChairSocket() {
        const that = this;
        const socket = new WebSocket('ws://localhost:5000');

        socket.onmessage = function (event) {
            const chair = JSON.parse(event.data);
            const updatedChairs = that.updateChairInChairs(that.chairs, chair);
            that.chairs = updatedChairs;
        }
    }

    openTargetSocket() {
        const connection = new WebSocket('ws://10.51.7.233:9898');
        const message = {
            "reciver" : "controller",
            "targets" : [
                {
                    "id": 1,
                    "target": {
                        "x": 4,
                        "y": 1,
                        "bearing": 90
                    }
                },
                {
                    "id": 2,
                    "target": {
                        "x": 4,
                        "y": 2,
                        "bearing": 90
                    }
                },
                {
                    "id": 3,
                    "target": {
                        "x": 4,
                        "y": 3,
                        "bearing": 90
                    }
                },
                {
                    "id": 4,
                    "target": {
                        "x": 4,
                        "y": 4,
                        "bearing": 90
                    }
                }
            ]
        };

        connection.onopen = function() {
            connection.onmessage = function (response) {
                const { data } = response;
                console.log(data);
            };

            connection.send(JSON.stringify(message));

            connection.onclose = function() {
                console.log('connection is closed');
            };
        }
    }

    updateChairInChairs(chairs, item) {
        const filteredChairs = chairs.filter(chair => item.id !== chair.id);
        return [...filteredChairs, item];
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