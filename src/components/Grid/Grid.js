import React, { Component } from 'react';
import Chair from '../Chair/Chair';

import './Grid.scss';

class Grid extends Component {
    render() {
        return (
            <div className="Grid">
                <Chair position={{x: 1, y: 1}} />
                <Chair position={{x: 1, y: 3}} />
                <Chair position={{x: 4, y: 5}} />
                <Chair position={{x: 3, y: 4}} />
                <Chair position={{x: 5, y: 2}} />
            </div>
        );
    }
}

export default Grid;