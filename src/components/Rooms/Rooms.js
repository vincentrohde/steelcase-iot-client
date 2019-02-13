import React, { Component } from 'react';
import { connect, actions } from "../../stores/Rooms";
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
        actions.add(newRoom);
    }

    render() {
        const { rooms } = this.props.context;
        return (
            <div className="Rooms">
                <button onClick={this.addRoom}>Add Room</button>
                {
                    rooms.map((room, index) => <Room information={room} key={index} />)
                }
            </div>
        );
    }
}

export default connect(state => ({ context: state }))(Rooms);