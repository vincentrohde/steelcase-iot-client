import React, { Component } from 'react';
import { connect, actions } from "../../stores/Store";

import Chair from "../Chair/Chair"

import './Simulation.scss';

class Simulation extends Component{
    constructor(props) {
        super();
        this.props = props;
        this.chairs = [];
    }

    componentDidMount() {
        const simulation = document.querySelector('.Simulation');
        const simulationStyles = window.getComputedStyle(simulation, null);
        const simulationWidthPX = simulationStyles.getPropertyValue('width');

        const simulationWidth = Number(simulationWidthPX.substring(0, simulationWidthPX.length - 2));
        const chairWidth = 200;
        const conversionRate = this.calculateConversionFactor(simulationWidth - chairWidth);

        this.openChairSocket(conversionRate);
    }

    openChairSocket(conversionRate) {
        const that = this;

        // for mock use mock/chair-server.js from the server repo
        // https://github.com/vincentrohde/iot_app_server
        const socket = new WebSocket('ws://localhost:5000');

        socket.onmessage = function (event) {
            const chair = JSON.parse(event.data);
            chair.x = Math.round(chair.x * conversionRate);
            chair.y = Math.round(chair.y * conversionRate);

            const updatedChairs = that.updateChairInChairs(that.chairs, chair);
            that.chairs = updatedChairs;

            actions.updateChairs(that.chairs);
        }
    }

    updateChairInChairs(chairs, item) {
        const filteredChairs = chairs.filter(chair => item.id !== chair.id);
        return [...filteredChairs, item];
    }

    calculateConversionFactor(width) {
        return (width / 1008);
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