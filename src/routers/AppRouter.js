import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../routes/HomePage/HomePage';

class AppRouter extends Component {

    state = {
        chairs: [],
        orders: []
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Redirect from="/*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
