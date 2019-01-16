import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import './App.scss';

import Example from './Example/Example';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" exact={true} component={Example} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
