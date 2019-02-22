import React from 'react';
import Headline from '../../components/Headline/Headline';
import AvatarIcon from '../../components/AvatarIcon/AvatarIcon';
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