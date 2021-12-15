import App from './app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './app/store/store.constants';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('pageContent')
);
