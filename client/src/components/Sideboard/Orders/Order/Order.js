import React from 'react';
import './Order.scss';

const Order = (props) => {
    const {name, positions} = props.information;
    const target = {
        receiver: "controller",
        targets: positions
    }

    let feServer = new WebSocket("ws://192.168.8.102:9898");

    feServer.onopen = function () {
        console.log("connected");

    }

    function sendMessage(name) {
        console.log(name);
        feServer.send(JSON.stringify(
            {
                receiver: 'controller',
                content: [
                    {
                        id: 115,
                        target: {
                            x: 2,
                            y: 1
                        }
                    },
                    {
                        id: 8,
                        target: {
                            x: 1,
                            y: 1
                        }
                    }
                ]
            }));
        if (name === "discussion") {
            //feServer.send(JSON.stringify({formation: 3}));
        } else if (name === "lane_vertical") {
            feServer.send(JSON.stringify({formation: 4}));
        } else if (name === "lane_horizontal") {
            feServer.send(JSON.stringify({formation: 1}));
        }
    }

    return (
        <div className="Order" onClick={sendMessage.bind(this, name)} data-target={JSON.stringify(target)}>
            <div className="discussion">
            </div>
        </div>
    );
}

export default Order;