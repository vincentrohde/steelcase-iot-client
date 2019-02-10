import React from 'react';
import '../AvatarIcon/AvatarIcon';
import '../Rooms/Rooms';
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import Rooms from "../Rooms/Rooms";
import Time from "../Time/Time";
import './UserCard.scss';


const UserCard = () => {
    return (
            <div className="UserCard">
                <div className="information-container">
                    <Rooms/>
                    <Time/>
                </div>
                <div className="AvatarIcon">
                    <AvatarIcon/>
                </div>
            </div>
    );
};

export default UserCard;