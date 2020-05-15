import TripsActionTypes from 'store/trips/trips.types';

const INITIAL_STATE = {
    trips: [],
};

const tripsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TripsActionTypes.FETCH_TRIPS_SUCCESS:
            return {
                ...state,
                trips: [...action.payload],
            };
        case TripsActionTypes.ADD_TRIP_SUCCESS:
            return {
                ...state,
                trips: [...state.trips, action.payload.data],
            };
        case TripsActionTypes.REMOVE_TRIP:
            return {
                ...state,
                trips: [
                    ...state.trips.filter(
                        trip => trip.id !== action.payload.id,
                    ),
                ],
            };

        default:
            return state;
    }
};

export default tripsReducer;
