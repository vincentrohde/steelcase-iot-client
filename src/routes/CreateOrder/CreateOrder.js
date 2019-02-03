import React, { Component } from 'react';

import CTAButton from '../../components/CTAButton/CTAButton';
import './CreateOrder.scss';

class CreateOrder extends Component {
    constructor(props) {
        super();
        this.probs = props;
    }

    render() {
        return (
            <div className="Page CreateOrder">
                CreateOrder
                <div className="button-container">
                    <CTAButton />
                </div>
            </div>
        )
    }
};

export default CreateOrder;