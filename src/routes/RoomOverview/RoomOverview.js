import React, { Component } from 'react';
import { Provider } from "../../stores/ChairsStore";

import Simulation from '../../components/Simulation/Simulation';
import Sideboard from '../../components/Sideboard/Sideboard';

import './RoomOverview.scss';

class RoomOverview extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.match = props.match;
        this.params = this.match.params;
        this.id = this.params.id;
    }

    componentDidMount() {
        document.title = `Raum ${this.id}`;
    }

    render() {
        return (
            <div className="RoomOverviewPage">
                <div className="RoomOverview-container">
                    <Provider>
                        <Simulation />
                        <Sideboard />
                    </Provider>
                </div>
            </div>
        )
    }
}

export default RoomOverview;