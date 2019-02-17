import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Lane from '../../components/Lane/Lane';
import './Dashboard.scss';
import '../Page.scss';

class Dashboard extends Component {
    constructor(props)
    {
        super();
        this.probs = props;
    }

    render() {
        var roomdescription= "Räume";
        return (
            <div className="DashboardPage wavy-gradient">
                <div className="Navigation-container">
                    <Navigation/>
                </div>
                <div className="Lane-container">
                    <h2 className="title">{roomdescription}</h2>
                    <Lane />
                </div>
            </div>
        )
    }
};

export default Dashboard;