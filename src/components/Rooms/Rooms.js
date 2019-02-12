import React, { Component } from 'react';
import { connect, actions } from "../../stores/Rooms";
import Room from './Room/Room';

import './Rooms.scss';

class Rooms extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const { rooms } = this.props.context;
        return (
            <div className="Rooms">
                {
                    rooms.map((room, index) => <Room information={room} key={index} />)
                }
            </div>
        );
    }
}

export default connect(state => ({ context: state }))(Rooms);