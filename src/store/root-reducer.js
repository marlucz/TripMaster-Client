import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tripsReducer from 'store/trips/trips.reducer';
import itineraryReducer from 'store/itinerary/itinerary.reducer';
import todoReducer from 'store/todo/todo.reducer';
import expensesReducer from 'store/expenses/expenses.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const rootReducer = combineReducers({
    trips: tripsReducer,
    itinerary: itineraryReducer,
    todo: todoReducer,
    expenses: expensesReducer,
});

export default persistReducer(persistConfig, rootReducer);
