import React from 'react';
import './AvatarIcon.scss';
const avatar = require('../../assets/images/avatar.png');

// this is the Avatar icon TO-DO make add Icon and menu function

const AvatarIcon = () => {
    return (
      <div className="AvatarIcon">
          <img className="icon" src={avatar}/>
      </div>
    );
}

export default AvatarIcon;