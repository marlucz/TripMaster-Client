import TripsActionsTypes from 'store/trips/trips.types';

const INITIAL_STATE = {
    items: [],
    activeTrip: null,
    isLoading: false,
};

const tripsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TripsActionsTypes.FETCH_TRIPS_REQUEST:
        case TripsActionsTypes.ADD_TRIP_REQUEST:
        case TripsActionsTypes.SET_ACTIVE_TRIP_START:
            return {
                ...state,
                isLoading: true,
            };
        case TripsActionsTypes.FETCH_TRIPS_SUCCESS:
            return {
                ...state,
                items: [...action.payload],
                isLoading: false,
            };
        case TripsActionsTypes.ADD_TRIP_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload.data],
                isLoading: false,
            };
        case TripsActionsTypes.REMOVE_TRIP_SUCCESS:
            return {
                ...state,
                items: [
                    ...state.items.filter(
                        item => item._id !== action.payload.id,
                    ),
                ],
                isLoading: false,
            };
        case TripsActionsTypes.SET_ACTIVE_TRIP:
            return {
                ...state,
                activeTrip: action.payload.activeTrip,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default tripsReducer;
