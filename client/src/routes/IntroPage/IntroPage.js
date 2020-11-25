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
        const introtext = "Arranging chairs takes a lot of time and is" +
            " exhausting. We at design Akademie Berlin wrote a system that does exactly this. It arranges chairs for you.\n" +
            "This is the app where you can tell the chairs where they should" +
            " be positioned.\n" +
            "Click on the button to enter the Dashboard and discover the app.";
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