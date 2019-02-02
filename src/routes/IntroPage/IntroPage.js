import React, { Component } from 'react';

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
            <div className="Page">
                <div className="box">
                    <h2>Willkommen bei Smartchairs</h2>
                    <p>Introtext</p>
                    <CTAButton/>
                </div>
            </div>
        )
    }
};

export default IntroPage;