import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import rootReducer from 'store/root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, thunk];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

export const StoreProvider = ({ children }) => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
);

StoreProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
};

export default store;
