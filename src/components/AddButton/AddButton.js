import React from 'react';
import './AddButton.scss';
import { Link } from 'react-router-dom';

const AddButton = (props) => {
    const title = props.title || '';
    const linkTo = props.link || '/';

    return (
        <Link className="AddButton" to={linkTo}>{title}</Link>
    );
}

export default AddButton;
