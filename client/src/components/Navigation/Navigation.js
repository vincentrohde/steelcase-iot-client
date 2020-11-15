import React from 'react';
import Headline from '../Headline/Headline';
import AvatarIcon from '../AvatarIcon/AvatarIcon';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Headline title={"Smart Chairs"} />
            <div className="AvatarIcon-container_Navigation">
                <AvatarIcon/>
            </div>
        </div>
    );
}

export default Navigation;