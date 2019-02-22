import React from 'react';
import './AddButton.scss';
import { Link } from 'react-router-dom';

const AddButton = (props) => {
    const title = props.title || '';
    const linkTo = props.link || '/';

    return (
        <div className="AddButton-inner">
            <Link className="AddButton" to={linkTo}>{title}</Link>
        </div>
    );
}

export default AddButton;
