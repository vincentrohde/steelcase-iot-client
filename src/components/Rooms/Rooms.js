import React, { Component } from 'react';
import { connect, actions } from "../../stores/Store";
import Room from './Room/Room';

import './Rooms.scss';

class Rooms extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    addRoom() {
        const newRoom = {
            id: 420,
            name: 'Biologie'
        };
        actions.addRoom(newRoom);
    }

    render() {
        const { rooms } = this.props;
        return (
            <div className="Rooms">
                {
                    rooms.map((room, index) => <Room information={room} key={index} />)
                }
            </div>
        );
    }
}

export default connect(({ rooms }) => ({ rooms }))(Rooms);