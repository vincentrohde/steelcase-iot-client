import React, { Component } from 'react';

import UserCard from '../../components/UserCard/UserCard';
import OrderLane from '../../components/OrderLane/OrderLane';

class Sideboard extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        document.title = 'Sideboard';
    }

    render() {
        return (
            <div className="Page">
                <div className="container">
                    <UserCard/>
                    <OrderLane/>
                </div>
            </div>
        )
    }
}

export default Sideboard;