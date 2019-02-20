import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Lane from '../../components/Lane/Lane';
import './Dashboard.scss';
import '../Page.scss';

class Dashboard extends Component {
    constructor(props)
    {
        super();
        this.props = props;
    }

    componentDidMount() {
        document.title = 'Smart Chairs';
    }

    render() {
        return (
            <div className="DashboardPage wavy-gradient">
                <div className="content-container">
                    <Navigation/>
                    <Lane />
                </div>
            </div>
        )
    }
};

export default Dashboard;