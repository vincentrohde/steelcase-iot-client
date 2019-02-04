import React from 'react';
import './AddButton.scss';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <Link className="AddButton" to="/">+</Link>
    );
}

export default AddButton;