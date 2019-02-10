import React from 'react';
import './AvatarIcon.scss';

// this is the Avatar icon TO-DO make add Icon and menu function

const AvatarIcon = (props) => {

    const LinkTo = props.link || '/';

    return (
      <link className="AvatarIcon" to={LinkTo}></link>
    );
}

export default AvatarIcon;