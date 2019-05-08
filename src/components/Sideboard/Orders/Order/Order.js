import React from 'react';
import './Order.scss';

const Order = (props) => {
    const {name, positions} = props.information;
    const target = {
        receiver: "controller",
        targets: positions
    }

    let feServer = new WebSocket("ws://10.51.7.233:9898");

    feServer.onopen = function () {
        console.log("connected");

    }

    function sendMessage(name) {
        console.log(name);
        if (name === "discussion") {
            feServer.send(JSON.stringify({formation: 3}));
        } else if (name === "lane_vertical") {
            feServer.send(JSON.stringify({formation: 4}));
        } else if(name === "lane_horizontal"){
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