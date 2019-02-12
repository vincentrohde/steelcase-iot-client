import React from 'react';
import Rooms from '../../components/Rooms/Rooms';
import './Lane.scss';
import {Link} from "react-router-dom";

const Lane = (props) => {
    const title = props.title || '';
    const linkTo = props.link || '/roomoverview';

    //const { Room } = props.information;

    return (
        <div className="Lane">
            <Link className="Lane-Link" to={linkTo}>{title}
            <Rooms/>
            </Link>
        </div>
    )
};

export default Lane;