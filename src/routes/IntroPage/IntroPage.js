import React, { Component } from 'react';

import './IntroPage.scss';
import CTAButton from '../../components/CTAButton/CTAButton';

class IntroPage extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        document.title = 'Intro Page';
    }

    render() {
        return (
            <div className="Page intro">
                <div className="container">
                    <h1 className="title">Willkommen bei Smartchairs</h1>
                    <p className="description">Introtext</p>
                    <div className="cta-container">
                        <CTAButton/>
                    </div>
                </div>
            </div>
        )
    }
};

export default IntroPage;