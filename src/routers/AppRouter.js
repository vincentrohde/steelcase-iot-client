import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import DashboardPage from '../routes/Dashboard/Dashboard';
import CreateOrderPage from '../routes/CreateOrder/CreateOrder';
import IntroPage from '../routes/IntroPage/IntroPage';
import Sideboard from "../routes/Sideboard/Sideboard";
import RoomOverview from "../routes/RoomOverview/RoomOverview";

class AppRouter extends Component {

    state = {
        chairs: [],
        orders: []
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/intro" component={IntroPage} />
                    <Route exact path="/create" component={CreateOrderPage} />
                    <Route exact path="/sideboard" component={Sideboard} />
                    <Route exact path="/roomoverview" component={RoomOverview} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
