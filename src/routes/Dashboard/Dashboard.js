import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Lane from '../../components/Lane/Lane';
import './Dashboard.scss';
import '../Page.scss';

class Dashboard extends Component {
    constructor(props) {
        super();
        this.probs = props;
    }

    render() {
        return (
            <div className="Page">
                    <Navigation className="Navigation" />
                    <Lane className="Lane" />
            </div>
        )
    }
};

export default Dashboard;