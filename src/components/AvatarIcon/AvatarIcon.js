import React from 'react';
import './AvatarIcon.scss';
import avatar from '../../assets/images/avatar.png';

// this is the Avatar icon TO-DO make add Icon and menu function

const AvatarIcon = () => {

    return (
        <div className="avatar-icon">
            <img className="icon" src={avatar}/>
        </div>
    );
}

export default AvatarIcon;