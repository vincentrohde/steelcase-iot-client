import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "./stores/Store";

import AppRouter from './routers/AppRouter';
import './index.scss';

import * as serviceWorker from './serviceWorker';

const App = (
    <Provider>
        <AppRouter />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
