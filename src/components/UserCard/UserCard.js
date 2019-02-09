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
                <div className="box-left">
                    <Rooms/>
                    <Time/>
                </div>
                <div className="box-right">
                    <div className="inner-box">
                    <AvatarIcon/>
                    </div>
                </div>
            </div>
    );
};

export default UserCard;