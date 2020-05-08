import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import rootReducer from 'store/root-reducer';

const store = createStore(rootReducer, applyMiddleware(logger));

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
