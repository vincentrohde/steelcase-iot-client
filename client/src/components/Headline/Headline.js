import React from 'react';
import './Headline.scss';

const Headline = (props) => {
    const title = props.title || 'Das ist eine Headline';

    return (
        <div className="Headline">{title}</div>
    );
}

export default Headline;