import React from 'react';
import './CTAButton.scss';
import { Link } from 'react-router-dom';


// this is the component for the call to action Button

const CTAButton = () => {
    return (
        <Link className="CTAButton" to="/">Los geht's</Link>
    );
}
export default CTAButton;
