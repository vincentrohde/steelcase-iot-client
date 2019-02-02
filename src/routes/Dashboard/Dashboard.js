import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Lane from '../../components/Lane/Lane';

class Dashboard extends Component {
    constructor(props) {
        super();
        this.probs = props;
    }

    render() {
        return (
            <div className="Page">
                <Navigation />
                <Lane />
            </div>
        )
    }
};

export default Dashboard;