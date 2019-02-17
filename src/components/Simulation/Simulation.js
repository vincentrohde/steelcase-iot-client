import React, { Component } from 'react';
import { connect, actions } from "../../stores/ChairsStore";

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
                        return (<div key={index} className="chair">
                            { `ID: ${chair.id}, X: ${chair.x}, Y: ${chair.y}, B: ${chair.bearing}` }
                        </div>);
                    })
                }
            </div>
        );
    }
};

export default connect(({ chairs }) => ({ chairs }))(Simulation);