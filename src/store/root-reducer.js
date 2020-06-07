import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from 'store/user/user.reducer';
import tripsReducer from 'store/trips/trips.reducer';
import itineraryReducer from 'store/itinerary/itinerary.reducer';
import todoReducer from 'store/todo/todo.reducer';
import expensesReducer from 'store/expenses/expenses.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['trips'],
};

const rootReducer = combineReducers({
    user: userReducer,
    trips: tripsReducer,
    itinerary: itineraryReducer,
    todos: todoReducer,
    expenses: expensesReducer,
});

export default persistReducer(persistConfig, rootReducer);
