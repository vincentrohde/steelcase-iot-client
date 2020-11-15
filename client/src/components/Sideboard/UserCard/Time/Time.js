import React from 'react';
import './Time.scss';

const Time = (props) => {
    const title = props.title || '12:00 - 14:30';

    return (
        <div className="Time">{title}</div>
    );
};

export default Time;