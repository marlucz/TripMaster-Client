import TripsActionsTypes from 'store/trips/trips.types';

const INITIAL_STATE = {
    items: [],
    activeTrip: null,
};

const tripsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TripsActionsTypes.FETCH_TRIPS_SUCCESS:
            return {
                ...state,
                items: [...action.payload],
            };
        case TripsActionsTypes.ADD_TRIP_SUCCESS:
            return {
                ...state,
                items: [...state.trips, action.payload.data],
            };
        case TripsActionsTypes.REMOVE_TRIP_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.trips.filter(
                        trip => trip._id !== action.payload.id,
                    ),
                ],
            };
        case TripsActionsTypes.SET_ACTIVE_TRIP:
            return {
                ...state,
                activeTrip: action.payload,
            };
        default:
            return state;
    }
};

export default tripsReducer;
