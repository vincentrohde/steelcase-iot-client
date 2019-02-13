import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from "../stores/Store";

import DashboardPage from '../routes/Dashboard/Dashboard';
import CreateOrderPage from '../routes/CreateOrder/CreateOrder';
import IntroPage from '../routes/IntroPage/IntroPage';
import RoomOverview from "../routes/RoomOverview/RoomOverview";

class AppRouter extends Component {

    state = {
        isFirstTime: false
    }

    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={()=>(
                            this.state.isFirstTime ? <Redirect to="/intro" /> : <DashboardPage />
                        )} />
                        <Route exact path="/intro" component={IntroPage} />
                        <Route exact path="/create" component={CreateOrderPage} />
                        <Route exact path="/room/:id" component={RoomOverview} />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default AppRouter;
