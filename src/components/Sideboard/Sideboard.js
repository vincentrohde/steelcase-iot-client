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

    openChairSocket() {
        const that = this;
        const socket = new WebSocket('ws://localhost:5000');

        socket.onmessage = function (event) {
            const chair = JSON.parse(event.data);
            const updatedChairs = that.updateChairInChairs(that.chairs, chair);
            that.chairs = updatedChairs;
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
};

export default Sideboard;