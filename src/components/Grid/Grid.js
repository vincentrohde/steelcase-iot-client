import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
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

        let layout = [
            {i: 'c', x: 1, y: 0, w: 1, h: 1}
        ];

        return (
            <div className="Grid">
                <GridLayout
                    className="chairGrid"
                    useCSSTransforms={true}
                    layout={layout}>
                    <div className="item" key="c"></div>
                </GridLayout>
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