import React from 'react';
import './AvatarIcon.scss';
const avatar = require('../../assets/images/avatar.png');

const AvatarIcon = () => {
    return (
      <div className="AvatarIcon">
          <img className="icon" alt="User Avatar" src={avatar}/>
      </div>
    );
}

export default AvatarIcon;