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
        this.openTargetSocket();
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

    render() {
        return (
            <div className="Sideboard">
                <UserCard/>
                <Orders/>
            </div>
        );
    }
};

export default Sideboard;