import React, { Component } from 'react';
import Chair from '../Chair/Chair';

import crossIcon from '../../assets/images/cross.svg';

import './Grid.scss';

class Grid extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.crosses = [];
    }

    componentDidMount() {
        const chairGrid = document.querySelector('.chairGrid');
        chairGrid.addEventListener('drag', (e) => {
            console.log(e.target);
        });
    }

    render() {
        let crosses = [];

        for(let index = 0; index < 20; index++) {
            crosses.push(
                <div className="cross" key={index}>
                    <img className="cross-icon" src={crossIcon} alt="Chair Icon"/>
                </div>
            );
        }

        return (
            <div className="Grid">
                <div className="chairGrid">
                    <Chair position={{x: 3, y: 3}} />
                </div>
                <div className="bottomGrid">
                    {
                        crosses.map(cross => cross)
                    }
                </div>
            </div>
        );
    }
}

export default Grid;