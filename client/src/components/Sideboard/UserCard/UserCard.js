import React from 'react';

import AvatarIcon from '../../AvatarIcon/AvatarIcon';
import Time from "./Time/Time";

import './UserCard.scss';


const UserCard = (props) => {
    const { id } = props;

    return (
            <div className="UserCard">
                <div className="information-container">
                    <h2 className="title">Raum { id }</h2>
                    <Time />
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