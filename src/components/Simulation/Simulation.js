import React, { Component } from 'react';
import { connect, actions } from "../../stores/ChairsStore";

import Chair from "../Chair/Chair"

import './Simulation.scss';

class Simulation extends Component{
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

        // for mock use mock/chair-server.js from the server repo
        // https://github.com/vincentrohde/iot_app_server
        const socket = new WebSocket('ws://localhost:5000');

        socket.onmessage = function (event) {
            const chair = JSON.parse(event.data);
            const updatedChairs = that.updateChairInChairs(that.chairs, chair);
            that.chairs = updatedChairs;

            actions.updateChairs(that.chairs);
        }
    }

    updateChairInChairs(chairs, item) {
        const filteredChairs = chairs.filter(chair => item.id !== chair.id);
        return [...filteredChairs, item];
    }

    render() {
        const { chairs } = this.props;
        return (
            <div className="Simulation">
                {
                    chairs.map((chair, index) => {
                        const template = {
                            transform: `translate(${chair.x}px, ${chair.y}px) rotate(${chair.bearing}deg)`
                        }

                        return (
                            <Chair key={index} isGrid={false} template={template} />
                        )
                    })
                }

            </div>
        );
    }
};

export default connect(({ chairs }) => ({ chairs }))(Simulation);