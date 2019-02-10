import React, { Component } from 'react';

import Sideboard from '../../components/Sideboard/Sideboard';

import './RoomOverview.scss';

class RoomOverview extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        document.title = 'RoomOverview';
    }

    render() {
        return (
            <div className="RoomOverviewPage">
                <div className="RoomOverview-container">
                    <div className="Simulation"></div>
                    <Sideboard/>
                </div>
            </div>
        )
    }
}

export default RoomOverview;