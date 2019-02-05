import React, { Component } from 'react';

import UserCard from '../../components/UserCard/UserCard';
import OrderLane from '../../components/OrderLane/OrderLane';
import AddButton from '../../components/AddButton/AddButton';

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
                    <div className="Sideboard-order">
                        <OrderLane/>
                        <AddButton/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sideboard;