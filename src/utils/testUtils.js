import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export const withRouter = Component => props => (
    <BrowserRouter>
        <Component {...props} />
    </BrowserRouter>
);

export const withProvider = Component => props => (
    <Provider store={store}>
        <BrowserRouter>
            <Component {...props} />
        </BrowserRouter>
    </Provider>
);
