import { createStore } from 'redux';
import tripsReducer from 'root-reducer';

const store = createStore(tripsReducer);

export default store;
