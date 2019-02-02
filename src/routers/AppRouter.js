import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import DashboardPage from '../routes/Dashboard/Dashboard';
import IntroPage from '../routes/IntroPage/IntroPage';

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
                    <Route exact path="/intro" component={IntroPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
