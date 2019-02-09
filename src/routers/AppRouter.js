import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import DashboardPage from '../routes/Dashboard/Dashboard';
import CreateOrderPage from '../routes/CreateOrder/CreateOrder';
import IntroPage from '../routes/IntroPage/IntroPage';

class AppRouter extends Component {

    state = {
        chairs: [],
        rooms: []
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/intro" component={IntroPage} />
                    <Route exact path="/create" component={CreateOrderPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
