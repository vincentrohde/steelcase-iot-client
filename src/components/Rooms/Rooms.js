import React from 'react';
import Room from '../../components/Room/Room';
import './Rooms.scss';

const Rooms = (props) => {
    const { rooms } = props;

    return (
        <div className="Rooms">
            {
                rooms.map((room, index) => <Room information={room} key={index} />)
            }
        </div>
    );
}

export default Rooms;