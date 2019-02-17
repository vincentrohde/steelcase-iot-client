import React, { Component } from 'react';

import './IntroPage.scss';
import CTAButton from '../../components/CTAButton/CTAButton';
import Headline from '../../components/Headline/Headline';

class IntroPage extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.title = 'Willkommen bei Smartchairs';
    }

    componentDidMount() {
        document.title = 'Intro Page';
    }

    render() {
        var introtext = "Das ist der Introtext";
        return (
            <div className="Page intro wavy-gradient">
                <div className="container">
                    <Headline title={this.title} />
                    <p className="description">{introtext}</p>
                    <div className="cta-container">
                        <CTAButton/>
                    </div>
                </div>
            </div>
        )
    }
};

export default IntroPage;