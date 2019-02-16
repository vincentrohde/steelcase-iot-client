import React from 'react';
import './AvatarIcon.scss';
const avatar = require('../../assets/images/avatar.png');

// this is the Avatar icon TO-DO make add Icon and menu function

const AvatarIcon = () => {
    return (
          <img className="icon" src={avatar}/>
    );
}

export default AvatarIcon;