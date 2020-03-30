import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import App from './app';

import store from './redux/reduxStore';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Provider store ={store} >
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();
