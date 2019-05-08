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
        this.simulation = document.querySelector('.Simulation');
        this.simulationRect = this.simulation.getBoundingClientRect();

        this.openControllerSocket();

        this.openChairSocket();
    }

    componentWillUnmount() {
        if(this.socket) {
            this.socket.onclose = () => {
                console.log('Closed Camera Socket');
            };
            this.socket.close();
        }
    }

    initializeEventListeners() {
        const that = this;

        this.simulation.addEventListener("click", (event) => {
            const target = event.target;
            const chair = target.closest('.Chair');

            if (chair) {
                that.selectedChair = chair;
            } else {
                if (that.selectedChair) {
                    const { id } = that.selectedChair.dataset;
                    const message = {
                        receiver: 'controller',
                        content: [
                            {
                                id,
                                target: {
                                    x: event.clientX - that.simulationRect.left,
                                    y: event.clientY - that.simulationRect.top
                                }
                            }
                        ]
                    };

                    console.log('### message: ', message);
                    that.controllerSocket.send(JSON.stringify(message));
                }
            }
        });
    }

    openChairSocket() {
        const that = this;
        const conversionRate = 1;

        // for mock use mock/chair-server.js from the server repo
        // https://github.com/vincentrohde/iot_app_server
        that.socket = new WebSocket('ws://10.51.4.206:5678');

        that.socket.onmessage = function (event) {
            const chair = JSON.parse(event.data);
            chair.x = Math.round(chair.x * conversionRate);
            chair.y = Math.round(chair.y * conversionRate);

            const updatedChairs = that.updateChairInChairs(that.chairs, chair);
            that.chairs = updatedChairs;

            actions.updateChairs(that.chairs);
        };
    }

    openControllerSocket() {
        const that = this;
        that.controllerSocket = new WebSocket('ws://10.51.7.233:9898');

        that.controllerSocket.onclose = function() {
            console.log('Controller Socket connection is closed');
        };

        that.controllerSocket.onopen = function() {
            console.log('Controller Socket connection is open');
            that.initializeEventListeners();
        };
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
                            left: `${chair.x}px`,
                            top: `${chair.y}px`,
                            transform: `translate(-50%, -50%) rotate(${chair.bearing}deg)`,
                        };

                        return (
                            <Chair key={index} id={chair.id} isGrid={false} template={template} />
                        )
                    })
                }
            </div>
        );
    }
};

export default connect(({ chairs }) => ({ chairs }))(Simulation);


/*
const simulation = document.querySelector('.Simulation');
simulation.addEventListener("click", newChairpostion);

function newChairPosition(e) {
    const xPostion = e.clientX;
    const yPostion = e.clientY;

    const translateValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    chair.style.transform = translateValue;
}*/
