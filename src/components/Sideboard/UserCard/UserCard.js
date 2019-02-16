import React from 'react';

import AvatarIcon from '../../AvatarIcon/AvatarIcon';
import Time from "./Time/Time";

import './UserCard.scss';


const UserCard = () => {
    return (
            <div className="UserCard">
                <div className="information-container">
                    <Time/>
                </div>
                <div className="AvatarIcon-container">
                        <div className="AvatarIcon-container_UserCard">
                            <AvatarIcon/>
                        </div>
                </div>
            </div>
    );
};

export default UserCard;