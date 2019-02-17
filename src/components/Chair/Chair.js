import React, { Component } from 'react';
import chairIcon from '../../assets/images/chair.svg';

import './Chair.scss';

class Chair extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.position = this.props.position;
        this.isGrid = this.props.isGrid;
        if(this.isGrid) {
            this.gridPosition = {
                gridColumn: `${this.position.x} / ${this.position.x + 1}`,
                gridRow: `${this.position.y} / ${this.position.y + 1}`
            };
        }
    }

    render() {
        return (
            <div className="Chair" style={
                this.props.template ? this.props.template : this.gridPosition} >
                <img className="chair-icon" src={chairIcon} alt="Chair Icon"/>
            </div>
        );
    }
}

export default Chair;