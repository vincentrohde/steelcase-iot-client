import React, { Component } from 'react';

import Grid from '../../components/Grid/Grid';
import CTAButton from '../../components/CTAButton/CTAButton';

import './CreateOrder.scss';

class CreateOrder extends Component {
    constructor(props) {
        super();
        this.probs = props;
        this.title = "Anordnung benennen";
    }

    render() {
        return (
            <div className="Page CreateOrder">
                <input
                    className="order-name"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={this.title} />
                <Grid />
                <div className="button-container">
                    <CTAButton />
                </div>
            </div>
        )
    }
};

export default CreateOrder;