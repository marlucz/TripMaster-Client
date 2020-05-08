import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tripsReducer from 'store/trips/trips.reducer';
import itineraryReducer from 'store/itinerary/itinerary.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const rootReducer = combineReducers({
    trips: tripsReducer,
    itinerary: itineraryReducer,
});

export default persistReducer(persistConfig, rootReducer);
