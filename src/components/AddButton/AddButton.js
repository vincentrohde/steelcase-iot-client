import React from 'react';
import './AddButton.scss';
import { Link } from 'react-router-dom';

const AddButton = (props) => {
    const title = props.title || 'füge eine Sitzordnung hinzu';
    const LinkTo = props.link || '/';

    return (
        <Link className="AddButton" to={LinkTo}>{title}</Link>
    );
}

export default AddButton;